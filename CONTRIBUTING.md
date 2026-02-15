# Contributing to Codex-hub

Thank you for your interest in contributing to Codex-hub! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Codex-hub.git`
3. Install dependencies: `pnpm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup Development Environment

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run in development mode (watch mode)
pnpm dev

# Run type checking
pnpm type-check
```

### Project Structure

```
Codex-hub/
├── packages/
│   ├── ui/                    # React components
│   ├── design-tokens/         # Design system tokens
│   ├── utils/                 # Shared utilities
│   └── animations/            # Framer Motion presets
```

## Making Changes

### Adding a New Component

1. Create the component file in `packages/ui/src/components/YourComponent.tsx`
2. Export it from `packages/ui/src/index.ts`
3. Add TypeScript types and JSDoc comments
4. Ensure it follows the design system tokens
5. Test the build: `pnpm build`

### Adding New Design Tokens

1. Update the relevant file in `packages/design-tokens/src/`
2. Ensure proper TypeScript types are exported
3. Update documentation

### Adding Utilities

1. Add utility functions to `packages/utils/src/`
2. Include unit tests if possible
3. Export from `packages/utils/src/index.ts`
4. Add JSDoc comments

## Code Style

- Use TypeScript for all code
- Follow existing code conventions
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep components small and focused
- Use functional components with hooks

## Component Guidelines

### Component Structure

```tsx
import React from 'react';

export interface YourComponentProps {
  // Props with JSDoc comments
  /** Description of the prop */
  propName: string;
  className?: string;
}

export const YourComponent: React.FC<YourComponentProps> = ({
  propName,
  className = '',
}) => {
  // Component implementation
  return <div className={className}>{propName}</div>;
};
```

### Design System Integration

- Use design tokens from `@hustlecodex/design-tokens`
- Follow the color palette and spacing system
- Ensure dark mode compatibility
- Support responsive design

## Testing

Currently, the project doesn't have a comprehensive test suite. When adding tests:

1. Use Vitest for unit tests
2. Use Testing Library for component tests
3. Place test files next to the source files: `ComponentName.test.tsx`

## Commit Messages

Use clear and descriptive commit messages:

```
feat: add new Button variant
fix: resolve XPBar overflow issue
docs: update installation instructions
refactor: simplify Card component structure
```

## Pull Request Process

1. Ensure your code builds successfully: `pnpm build`
2. Run type checking: `pnpm type-check`
3. Update documentation if needed
4. Create a pull request with a clear description
5. Link any related issues
6. Wait for review and address feedback

## Documentation

- Update README.md if adding new features
- Add JSDoc comments to all public APIs
- Include usage examples in documentation
- Keep the component API documentation up to date

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about contributing
- Suggestions for improvements

Thank you for contributing to Codex-hub! 🚀
