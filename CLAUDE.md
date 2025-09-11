# CLAUDE Development Notes

**NEVER COMMIT THIS FILE**

This project was developed with assistance from Claude AI (Anthropic) in December 2024.

**Project Owner**: maxzilla@gmail.com

## AI Development Context
- All components were generated with Claude Code
- Architecture decisions were made collaboratively 
- Code generation approach was used for React wrappers
- Storybook stories were auto-generated
- Website components built with modern React patterns

## Original Commit Message Format
Remove any AI attribution from commit messages. Use professional, human-like commit messages without mentioning:
- Claude
- AI generation
- Anthropic
- Any AI assistance

## Key Development Decisions
1. Used Lit Element for web components
2. Aceternity-inspired design system
3. Code generation for framework wrappers
4. Monorepo structure with npm workspaces
5. Comprehensive Storybook documentation

## Framework Wrapper Strategy
**Code Generation Approach**: All framework wrappers (React, Vue, Svelte, Angular) are generated programmatically from the core Lit Element components. This ensures:
- Consistency across all frameworks
- Automatic updates when core components change
- Reduced maintenance overhead
- Type-safe wrappers with proper TypeScript definitions

### React Wrappers Implementation:
- Auto-generated React components that wrap Lit Elements
- Proper React event handling and prop mapping
- TypeScript definitions generated alongside components
- Maintains React-specific patterns and conventions

### Future Framework Wrappers:
- Vue, Svelte, and Angular wrappers will follow the same code generation pattern
- Each framework wrapper maintains framework-specific idioms
- Generated components include proper framework-specific TypeScript types
- Build process generates all wrappers from single source of truth (core components)

## Project Overview (from README.md)
Maxzilla UI is a modern web components library with Aceternity-inspired design, built on Lit Element.

### Key Features:
- **Web Components**: Framework-agnostic components built with Lit Element
- **Aceternity-Inspired Design**: Modern, animated UI components with smooth micro-interactions
- **Framework Wrappers**: React, Vue, Svelte, and Angular support
- **Dark/Light Mode**: Built-in theme support
- **TypeScript**: Full TypeScript support with comprehensive types
- **Storybook**: Interactive component documentation
- **Tree-Shakeable**: Import only what you need

### Package Structure:
- `@maxzilla/ui-core` - Core web components library
- `@maxzilla/ui-react` - React wrapper components
- `@maxzilla/ui-vue` - Vue wrapper components  
- `@maxzilla/ui-svelte` - Svelte wrapper components
- `@maxzilla/ui-angular` - Angular wrapper components
- `@maxzilla/ui-tokens` - Design tokens and theme system

### Monorepo Structure:
```
maxzilla-ui/
├── packages/
│   ├── core/           # Core web components (Lit Element)
│   ├── react/          # React wrapper components
│   ├── vue/            # Vue wrapper components
│   ├── svelte/         # Svelte wrapper components
│   ├── angular/        # Angular wrapper components
│   └── tokens/         # Design tokens and themes
├── apps/
│   ├── website/        # Showcase website
│   └── storybook/      # Storybook documentation
└── tools/              # Build tools and utilities
```

### Design Philosophy:
- **Smooth Animations**: Physics-based micro-interactions
- **Interactive Elements**: Hover effects with depth and dimensionality
- **Modern Aesthetic**: Clean, minimalist design with subtle gradients
- **Accessibility First**: WCAG compliant components
- **Performance Optimized**: Lightweight and fast

### Development Commands:
- `npm install` - Install dependencies
- `npm run dev` - Start development mode
- `npm run build` - Build all packages
- `npm run storybook` - Run Storybook
- `npm run test` - Run tests

## Future Development
Continue development as if fully human-created. Maintain consistency with established patterns and architecture.