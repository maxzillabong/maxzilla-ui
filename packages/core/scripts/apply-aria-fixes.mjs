#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ARIA fixes for each component type
const ariaFixes = {
  'mz-select.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;
  @property({ type: Boolean, attribute: 'aria-expanded' }) ariaExpanded = false;
  @property({ type: String, attribute: 'aria-activedescendant' }) ariaActiveDescendant?: string;`,
    imports: `import { ValidatableMixin } from '../../mixins/validation.js';`,
    renderAttributes: {
      select: `
        role="combobox"
        aria-haspopup="listbox"
        aria-controls="select-dropdown"
        aria-expanded=\${this.ariaExpanded ? 'true' : 'false'}
        aria-invalid=\${this.error ? 'true' : 'false'}
        aria-required=\${this.required ? 'true' : 'false'}
        aria-label=\${this.ariaLabel || this.label}
        aria-describedby=\${this.ariaDescribedBy}`,
      options: `role="listbox" id="select-dropdown"`
    }
  },

  'mz-textarea.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;`,
    imports: `import { ValidatableMixin } from '../../mixins/validation.js';`,
    renderAttributes: {
      textarea: `
        aria-invalid=\${this.error ? 'true' : 'false'}
        aria-required=\${this.required ? 'true' : 'false'}
        aria-multiline="true"
        aria-readonly=\${this.readonly ? 'true' : 'false'}
        aria-label=\${this.ariaLabel || this.label}
        aria-describedby=\${this.ariaDescribedBy}`
    }
  },

  'mz-tooltip.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;`,
    renderAttributes: {
      tooltip: `
        role="tooltip"
        aria-hidden=\${!this.visible ? 'true' : 'false'}
        id=\${this.ariaDescribedBy || \`tooltip-\${this._id}\`}`
    }
  },

  'mz-avatar.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: Boolean }) decorative = false;`,
    renderAttributes: {
      img: `
        role=\${this.decorative ? 'presentation' : 'img'}
        aria-label=\${this.ariaLabel || this.alt}
        alt=\${this.decorative ? '' : (this.alt || this.ariaLabel)}`
    }
  },

  'mz-badge.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: Boolean }) live = false;`,
    renderAttributes: {
      badge: `
        role=\${this.live ? 'status' : 'none'}
        aria-live=\${this.live ? 'polite' : 'off'}
        aria-label=\${this.ariaLabel}`
    }
  },

  'mz-card.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledBy?: string;`,
    renderAttributes: {
      card: `
        role=\${this.clickable ? 'button' : 'article'}
        tabindex=\${this.clickable ? '0' : '-1'}
        aria-label=\${this.ariaLabel}
        aria-describedby=\${this.ariaDescribedBy}
        aria-labelledby=\${this.ariaLabelledBy}`
    },
    keyboardHandling: `
  private handleKeyDown(e: KeyboardEvent) {
    if (this.clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      this.click();
    }
  }`
  },

  'mz-loading.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Loading';`,
    renderAttributes: {
      loading: `
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label=\${this.ariaLabel}`
    }
  },

  'mz-accordion.ts': {
    renderAttributes: {
      accordion: `role="region"`
    }
  },

  'mz-accordion-item.ts': {
    updateExisting: true,
    renderAttributes: {
      button: `
        aria-expanded=\${this.open ? 'true' : 'false'}
        aria-controls="panel-\${this._id}"`,
      panel: `
        role="region"
        aria-labelledby="button-\${this._id}"
        id="panel-\${this._id}"`
    }
  },

  'mz-date-picker.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;`,
    renderAttributes: {
      calendar: `
        role="application"
        aria-label=\${this.ariaLabel || 'Date picker'}
        aria-describedby=\${this.ariaDescribedBy}`,
      date: `
        role="button"
        aria-selected=\${isSelected ? 'true' : 'false'}
        aria-current=\${isToday ? 'date' : 'false'}
        tabindex="0"`
    },
    keyboardHandling: `
  private handleCalendarKeyDown(e: KeyboardEvent) {
    const key = e.key;
    let newDate = new Date(this.selectedDate || new Date());

    switch(key) {
      case 'ArrowLeft':
        newDate.setDate(newDate.getDate() - 1);
        break;
      case 'ArrowRight':
        newDate.setDate(newDate.getDate() + 1);
        break;
      case 'ArrowUp':
        newDate.setDate(newDate.getDate() - 7);
        break;
      case 'ArrowDown':
        newDate.setDate(newDate.getDate() + 7);
        break;
      case 'Enter':
      case ' ':
        this.selectDate(newDate);
        return;
      case 'Escape':
        this.close();
        return;
      default:
        return;
    }

    e.preventDefault();
    this.focusDate(newDate);
  }`
  },

  'mz-form.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledBy?: string;`,
    renderAttributes: {
      form: `
        role="form"
        aria-label=\${this.ariaLabel}
        aria-labelledby=\${this.ariaLabelledBy}`
    }
  },

  'mz-toast-container.ts': {
    renderAttributes: {
      container: `
        role="region"
        aria-live="polite"
        aria-label="Notifications"`
    }
  },

  'mz-option.ts': {
    properties: `
  @property({ type: Boolean }) selected = false;`,
    renderAttributes: {
      option: `
        role="option"
        aria-selected=\${this.selected ? 'true' : 'false'}
        tabindex="-1"`
    }
  },

  'mz-radio-group.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;`,
    renderAttributes: {
      group: `
        role="radiogroup"
        aria-label=\${this.ariaLabel || this.label}
        aria-describedby=\${this.ariaDescribedBy}`
    },
    keyboardHandling: `
  private handleKeyDown(e: KeyboardEvent) {
    const radios = this.querySelectorAll('mz-radio');
    const currentIndex = Array.from(radios).findIndex(r => r.checked);
    let newIndex = currentIndex;

    switch(e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex) {
      e.preventDefault();
      radios[newIndex].checked = true;
      radios[newIndex].focus();
    }
  }`
  },

  'mz-sidebar.ts': {
    properties: `
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Sidebar navigation';`,
    renderAttributes: {
      nav: `
        role="navigation"
        aria-label=\${this.ariaLabel}`
    }
  },

  'mz-container.ts': {
    renderAttributes: {
      container: `role="region"`
    }
  },

  'mz-row.ts': {
    renderAttributes: {
      row: `role="row"`
    }
  },

  'mz-col.ts': {
    renderAttributes: {
      col: `role="cell"`
    }
  },

  'mz-stack.ts': {
    renderAttributes: {
      stack: `role="group"`
    }
  }
};

async function applyAriaFix(filePath, fixes) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const fileName = path.basename(filePath);

    console.log(`\n📝 Processing ${fileName}...`);

    // Add properties if specified
    if (fixes.properties && !content.includes('ariaLabel')) {
      const propertyInsertPoint = content.lastIndexOf('@property');
      if (propertyInsertPoint !== -1) {
        const endOfLine = content.indexOf('\n', propertyInsertPoint);
        content = content.slice(0, endOfLine) +
                  content.slice(endOfLine, endOfLine + 1) +
                  fixes.properties +
                  content.slice(endOfLine + 1);
        console.log('  ✅ Added ARIA properties');
      }
    }

    // Add imports if needed
    if (fixes.imports && !content.includes(fixes.imports)) {
      const importInsertPoint = content.lastIndexOf('import ');
      if (importInsertPoint !== -1) {
        const endOfLine = content.indexOf('\n', importInsertPoint);
        content = content.slice(0, endOfLine) + '\n' +
                  fixes.imports +
                  content.slice(endOfLine);
        console.log('  ✅ Added imports');
      }
    }

    // Add keyboard handling if specified
    if (fixes.keyboardHandling && !content.includes('handleKeyDown')) {
      const renderIndex = content.indexOf('render()');
      if (renderIndex !== -1) {
        content = content.slice(0, renderIndex) +
                  fixes.keyboardHandling + '\n\n  ' +
                  content.slice(renderIndex);
        console.log('  ✅ Added keyboard handling');
      }
    }

    // Note: Render attributes would need more complex parsing
    // This is a simplified version - in practice you'd need proper AST manipulation
    if (fixes.renderAttributes) {
      console.log('  ⚠️  Render attributes need manual application');
      console.log('     Add these attributes to render method:');
      Object.entries(fixes.renderAttributes).forEach(([element, attrs]) => {
        console.log(`     ${element}: ${attrs.trim()}`);
      });
    }

    await fs.writeFile(filePath, content);
    console.log('  ✅ File updated');

  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🎯 Applying ARIA fixes to all components...\n');

  const componentFiles = await glob('src/components/**/mz-*.ts', {
    ignore: ['**/*.test.ts', '**/*.stories.ts']
  });

  let fixedCount = 0;

  for (const filePath of componentFiles) {
    const fileName = path.basename(filePath);
    if (ariaFixes[fileName]) {
      await applyAriaFix(filePath, ariaFixes[fileName]);
      fixedCount++;
    }
  }

  console.log(`\n✅ Processed ${fixedCount} components`);
  console.log('\n⚠️  Note: Some components need manual review for render attribute application');
  console.log('📋 Next steps:');
  console.log('  1. Review each component for render attribute placement');
  console.log('  2. Test keyboard navigation');
  console.log('  3. Verify with screen reader');
  console.log('  4. Run accessibility audit');
}

main().catch(console.error);