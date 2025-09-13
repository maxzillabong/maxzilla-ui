#!/usr/bin/env node

/**
 * Script to add comprehensive ARIA attributes to all components
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Component-specific ARIA requirements
const componentAriaMap = {
  'mz-button': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;",
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;",
      "@property({ type: Boolean, attribute: 'aria-pressed' }) ariaPressed?: boolean;",
      "@property({ type: Boolean, attribute: 'aria-expanded' }) ariaExpanded?: boolean;",
      "@property({ type: String, attribute: 'aria-controls' }) ariaControls?: string;"
    ],
    renderAttributes: [
      "aria-busy for loading state",
      "aria-disabled for disabled state",
      "role='button' for links"
    ]
  },
  'mz-select': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;",
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;",
      "@property({ type: Boolean, attribute: 'aria-expanded' }) ariaExpanded = false;",
      "@property({ type: String, attribute: 'aria-activedescendant' }) ariaActiveDescendant?: string;"
    ],
    renderAttributes: [
      "role='combobox'",
      "aria-haspopup='listbox'",
      "aria-controls for dropdown",
      "aria-invalid for error state",
      "aria-required for required"
    ]
  },
  'mz-textarea': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;",
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;"
    ],
    renderAttributes: [
      "aria-invalid for error state",
      "aria-required for required",
      "aria-multiline='true'",
      "aria-readonly for readonly"
    ]
  },
  'mz-tooltip': {
    properties: [
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;"
    ],
    renderAttributes: [
      "role='tooltip'",
      "aria-hidden when not visible"
    ]
  },
  'mz-avatar': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;"
    ],
    renderAttributes: [
      "role='img' if decorative",
      "alt text for images"
    ]
  },
  'mz-badge': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;"
    ],
    renderAttributes: [
      "role='status' for dynamic badges",
      "aria-live='polite' for updates"
    ]
  },
  'mz-card': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;",
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;"
    ],
    renderAttributes: [
      "role='article' or 'region'",
      "aria-labelledby for heading"
    ]
  },
  'mz-loading': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Loading';"
    ],
    renderAttributes: [
      "role='status'",
      "aria-live='polite'",
      "aria-busy='true'"
    ]
  },
  'mz-accordion': {
    properties: [],
    renderAttributes: [
      "role='region' for panels",
      "aria-expanded for triggers",
      "aria-controls for triggers",
      "aria-labelledby for panels"
    ]
  },
  'mz-date-picker': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;",
      "@property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;"
    ],
    renderAttributes: [
      "role='application' for calendar",
      "aria-selected for dates",
      "aria-current='date' for today",
      "aria-invalid for error state"
    ]
  },
  'mz-form': {
    properties: [
      "@property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;"
    ],
    renderAttributes: [
      "role='form'",
      "aria-labelledby for form title"
    ]
  }
};

// Generate ARIA recommendations report
function generateAriaReport() {
  console.log('🔍 ARIA Attribute Requirements Report\n');
  console.log('=' .repeat(50));

  for (const [component, requirements] of Object.entries(componentAriaMap)) {
    console.log(`\n📦 ${component}`);
    console.log('-'.repeat(30));

    if (requirements.properties.length > 0) {
      console.log('Properties to add:');
      requirements.properties.forEach(prop => {
        console.log(`  • ${prop}`);
      });
    }

    if (requirements.renderAttributes.length > 0) {
      console.log('Render attributes:');
      requirements.renderAttributes.forEach(attr => {
        console.log(`  • ${attr}`);
      });
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n✅ General ARIA Best Practices:\n');
  console.log('1. All interactive elements need keyboard support');
  console.log('2. Focus indicators must be visible');
  console.log('3. Screen reader announcements for dynamic content');
  console.log('4. Proper heading hierarchy in content');
  console.log('5. Alternative text for images and icons');
  console.log('6. Form labels associated with inputs');
  console.log('7. Error messages announced to screen readers');
  console.log('8. Loading states communicated');
  console.log('9. Focus trapping in modals/drawers');
  console.log('10. Escape key to close overlays');
}

// Check existing ARIA implementation
function checkComponentAria(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const componentName = path.basename(filePath, '.ts');

  const hasAria = content.includes('aria-') || content.includes('role=');
  const hasAriaProperties = content.includes("attribute: 'aria-");
  const hasKeyboardHandling = content.includes('keydown') || content.includes('keyup');
  const hasFocusHandling = content.includes('focus') || content.includes('blur');

  return {
    component: componentName,
    hasAria,
    hasAriaProperties,
    hasKeyboardHandling,
    hasFocusHandling,
    missingFeatures: []
  };
}

async function analyzeAllComponents() {
  const componentFiles = await glob('src/components/**/mz-*.ts', {
    ignore: ['**/*.test.ts', '**/*.stories.ts']
  });

  const analysis = componentFiles.map(checkComponentAria);

  console.log('\n📊 Current ARIA Implementation Status:\n');
  console.log('Component | ARIA | Props | Keyboard | Focus');
  console.log('-'.repeat(60));

  analysis.forEach(comp => {
    const status = [
      comp.component.padEnd(20),
      comp.hasAria ? '✅' : '❌',
      comp.hasAriaProperties ? '✅' : '❌',
      comp.hasKeyboardHandling ? '✅' : '❌',
      comp.hasFocusHandling ? '✅' : '❌'
    ].join(' | ');
    console.log(status);
  });

  const needsWork = analysis.filter(c => !c.hasAria || !c.hasKeyboardHandling);
  console.log(`\n⚠️  ${needsWork.length} components need ARIA improvements`);

  return analysis;
}

// Main execution
async function main() {
  console.log('🎯 Maxzilla UI - ARIA Accessibility Audit\n');

  // Analyze current state
  const analysis = await analyzeAllComponents();

  // Generate recommendations
  generateAriaReport();

  // Summary
  const compliant = analysis.filter(c => c.hasAria && c.hasKeyboardHandling).length;
  const total = analysis.length;
  const percentage = Math.round((compliant / total) * 100);

  console.log('\n📈 Summary:');
  console.log(`  • ${compliant}/${total} components have basic ARIA (${percentage}%)`);
  console.log(`  • Target: 100% WCAG 2.1 AA compliance`);
  console.log('\n💡 Next Steps:');
  console.log('  1. Add missing ARIA properties to components');
  console.log('  2. Implement keyboard navigation');
  console.log('  3. Add focus management');
  console.log('  4. Test with screen readers');
  console.log('  5. Run automated accessibility tests');
}

main().catch(console.error);