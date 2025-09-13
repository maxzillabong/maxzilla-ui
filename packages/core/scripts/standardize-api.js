#!/usr/bin/env node

/**
 * Script to standardize API naming conventions across all components
 *
 * Conventions:
 * - Properties: camelCase (e.g., fullWidth, noCloseButton)
 * - Attributes: kebab-case (e.g., full-width, no-close-button)
 * - Events: Standard DOM events (change, input, focus, blur) + custom mz- prefixed events
 * - Methods: camelCase public API methods
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// API naming standards
const API_STANDARDS = {
  // Properties that should be consistent across all components
  commonProperties: {
    'full-width': 'fullWidth',
    'no-close-button': 'noCloseButton',
    'no-close-on-backdrop': 'noCloseOnBackdrop',
    'aria-label': 'ariaLabel',
    'aria-describedby': 'ariaDescribedBy',
    'helper-text': 'helperText',
    'validation-type': 'validationType',
    'has-prefix': 'hasPrefix',
    'has-suffix': 'hasSuffix',
  },

  // Event naming conventions
  eventPatterns: {
    // Standard DOM events should not be prefixed
    standard: ['change', 'input', 'focus', 'blur', 'click', 'submit'],
    // Custom events should be prefixed with mz-
    custom: ['mz-change', 'mz-input', 'mz-focus', 'mz-blur', 'mz-close', 'mz-open', 'mz-select', 'mz-tab-change']
  },

  // Method naming conventions
  publicMethods: [
    'show', 'hide', 'open', 'close', 'toggle',
    'focus', 'blur', 'select', 'click',
    'validate', 'checkValidity', 'reportValidity', 'setCustomValidity',
    'reset', 'submit'
  ]
};

function analyzeComponent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const componentName = path.basename(filePath, '.ts');

  const issues = [];
  const suggestions = [];

  // Check for inconsistent attribute naming
  const attributeRegex = /@property\([^)]*attribute:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = attributeRegex.exec(content)) !== null) {
    const attribute = match[1];
    if (API_STANDARDS.commonProperties[attribute]) {
      // Check if it maps to the correct property name
      const expectedProperty = API_STANDARDS.commonProperties[attribute];
      const propertyRegex = new RegExp(`@property\\([^)]*attribute:\\s*['"]${attribute}['"][^)]*\\)\\s+(\\w+)`);
      const propMatch = content.match(propertyRegex);

      if (propMatch && propMatch[1] !== expectedProperty) {
        issues.push({
          file: componentName,
          issue: `Inconsistent property naming for attribute "${attribute}"`,
          current: propMatch[1],
          expected: expectedProperty
        });
      }
    }
  }

  // Check for non-standard event naming
  const eventRegex = /dispatchEvent\s*\(\s*new\s+(?:Custom)?Event\s*\(\s*['"]([^'"]+)['"]/g;
  while ((match = eventRegex.exec(content)) !== null) {
    const eventName = match[1];
    const isStandard = API_STANDARDS.eventPatterns.standard.includes(eventName);
    const isCustom = API_STANDARDS.eventPatterns.custom.includes(eventName);

    if (!isStandard && !isCustom && !eventName.startsWith('mz-')) {
      issues.push({
        file: componentName,
        issue: `Non-standard event name "${eventName}"`,
        suggestion: `Use standard event or prefix with "mz-" (e.g., "mz-${eventName}")`
      });
    }
  }

  // Check for public method naming
  const methodRegex = /^\s*public\s+(\w+)\s*\(/gm;
  while ((match = methodRegex.exec(content)) !== null) {
    const methodName = match[1];
    if (!API_STANDARDS.publicMethods.includes(methodName) && !methodName.startsWith('_')) {
      suggestions.push({
        file: componentName,
        suggestion: `Consider if public method "${methodName}" follows naming conventions`
      });
    }
  }

  return { issues, suggestions };
}

function generateReport() {
  const componentFiles = glob.sync('src/components/**/mz-*.ts', {
    ignore: ['**/*.test.ts', '**/*.stories.ts']
  });

  const report = {
    totalComponents: componentFiles.length,
    issues: [],
    suggestions: []
  };

  componentFiles.forEach(file => {
    const result = analyzeComponent(file);
    report.issues.push(...result.issues);
    report.suggestions.push(...result.suggestions);
  });

  return report;
}

function main() {
  console.log('🔍 Analyzing API naming conventions...\n');

  const report = generateReport();

  console.log(`📊 Analyzed ${report.totalComponents} components\n`);

  if (report.issues.length > 0) {
    console.log('❌ Issues found:\n');
    report.issues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.file}: ${issue.issue}`);
      if (issue.current && issue.expected) {
        console.log(`   Current: ${issue.current}, Expected: ${issue.expected}`);
      }
      if (issue.suggestion) {
        console.log(`   Suggestion: ${issue.suggestion}`);
      }
    });
    console.log('');
  } else {
    console.log('✅ No critical issues found!\n');
  }

  if (report.suggestions.length > 0) {
    console.log('💡 Suggestions:\n');
    report.suggestions.forEach((suggestion, index) => {
      console.log(`${index + 1}. ${suggestion.file}: ${suggestion.suggestion}`);
    });
    console.log('');
  }

  // Generate standardization guide
  console.log('📋 API Naming Standards:\n');
  console.log('Properties (camelCase):');
  Object.values(API_STANDARDS.commonProperties).forEach(prop => {
    console.log(`  - ${prop}`);
  });
  console.log('\nAttributes (kebab-case):');
  Object.keys(API_STANDARDS.commonProperties).forEach(attr => {
    console.log(`  - ${attr}`);
  });
  console.log('\nStandard Events:');
  API_STANDARDS.eventPatterns.standard.forEach(event => {
    console.log(`  - ${event}`);
  });
  console.log('\nCustom Events (mz- prefix):');
  API_STANDARDS.eventPatterns.custom.forEach(event => {
    console.log(`  - ${event}`);
  });
  console.log('\nPublic Methods:');
  API_STANDARDS.publicMethods.forEach(method => {
    console.log(`  - ${method}()`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { API_STANDARDS, analyzeComponent, generateReport };