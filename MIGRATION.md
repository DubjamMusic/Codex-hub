# Migration Guide

This guide helps you migrate existing HustleCodeX projects to use the new Codex-hub shared component library.

## Overview

Codex-hub centralizes shared components, utilities, and design tokens across the HustleCodeX ecosystem. This guide covers migrating from duplicated code to the shared library.

## Installation

First, install the packages you need:

```bash
# Using pnpm
pnpm add @hustlecodex/ui @hustlecodex/design-tokens @hustlecodex/utils @hustlecodex/animations

# Using npm
npm install @hustlecodex/ui @hustlecodex/design-tokens @hustlecodex/utils @hustlecodex/animations
```

## Migrating Components

### Before (Local Component)

```tsx
// components/Button.tsx
export const Button = ({ children, variant = 'primary' }) => {
  const styles = variant === 'primary' 
    ? 'bg-cyan-500 text-white' 
    : 'bg-gray-800 text-gray-300';
  
  return <button className={styles}>{children}</button>;
};
```

### After (Using Codex-hub)

```tsx
// Simply import from the library
import { Button } from '@hustlecodex/ui';

// Use it directly
<Button variant="primary">Click me</Button>
```

## Migrating Design Tokens

### Before (Hardcoded Colors)

```tsx
const styles = {
  backgroundColor: '#00D4AA',
  color: '#ffffff',
  padding: '16px',
};
```

### After (Using Design Tokens)

```tsx
import { colors, spacing } from '@hustlecodex/design-tokens';

const styles = {
  backgroundColor: colors.primary.cyan,
  color: colors.text.primary,
  padding: spacing.md,
};
```

## Migrating Utilities

### Before (Local Utils)

```tsx
// utils/formatters.js
export const formatXP = (xp) => {
  if (xp >= 1000000) return `${(xp / 1000000).toFixed(1)}M`;
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`;
  return xp.toString();
};
```

### After (Using Shared Utils)

```tsx
import { formatXP } from '@hustlecodex/utils';

const xpDisplay = formatXP(15000); // "15K"
```

## Migrating Animations

### Before (Local Animation Variants)

```tsx
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
```

### After (Using Shared Animations)

```tsx
import { fadeIn } from '@hustlecodex/animations';
import { motion } from 'framer-motion';

<motion.div {...fadeIn}>Content</motion.div>
```

## Common Migration Patterns

### Pattern 1: Card Components

**Before:**
```tsx
<div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
  <h3 className="text-xl font-semibold">Title</h3>
  <p>Content</p>
</div>
```

**After:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@hustlecodex/ui';

<Card variant="default">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

### Pattern 2: XP Displays

**Before:**
```tsx
<div className="w-full">
  <div className="flex justify-between mb-2">
    <span>Level {level}</span>
    <span>{currentXP} / {maxXP} XP</span>
  </div>
  <div className="h-3 bg-gray-800 rounded-full">
    <div 
      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
      style={{ width: `${(currentXP / maxXP) * 100}%` }}
    />
  </div>
</div>
```

**After:**
```tsx
import { XPBar } from '@hustlecodex/ui';

<XPBar currentXP={currentXP} requiredXP={maxXP} level={level} showLabel />
```

### Pattern 3: Quest Cards

**Before:**
```tsx
<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
  <h3>{quest.title}</h3>
  <p>{quest.description}</p>
  <div className="mt-4">
    <span className="text-cyan-400">+{quest.xpReward} XP</span>
  </div>
</div>
```

**After:**
```tsx
import { QuestCard } from '@hustlecodex/ui';

<QuestCard
  title={quest.title}
  description={quest.description}
  xpReward={quest.xpReward}
  status={quest.status}
  difficulty={quest.difficulty}
/>
```

## TypeScript Types

The library exports all TypeScript types for proper type checking:

```tsx
import type { User, Quest, RecoveryMetrics } from '@hustlecodex/utils';

const user: User = {
  id: '1',
  username: 'hustler',
  email: 'user@example.com',
  xp: 5000,
  level: 10,
};
```

## Styling Approach

Codex-hub components use Tailwind CSS classes. Ensure your project has Tailwind configured:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@hustlecodex/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      // Your custom theme
    },
  },
};
```

## Gradual Migration Strategy

You don't need to migrate everything at once:

1. **Phase 1**: Start with design tokens (colors, spacing, typography)
2. **Phase 2**: Migrate utility functions
3. **Phase 3**: Replace core components (Button, Card, Input)
4. **Phase 4**: Replace specialized components (XPBar, QuestCard, etc.)
5. **Phase 5**: Clean up old component files

## Breaking Changes

### Version 0.1.0 (Initial Release)

- New package structure
- All components require React 18+
- Tailwind CSS is now required for styling

## Troubleshooting

### Import Errors

If you see import errors, ensure:
1. The package is installed: `pnpm list @hustlecodex/ui`
2. Your bundler supports the exports field in package.json
3. TypeScript is configured correctly

### Styling Issues

If components don't look right:
1. Ensure Tailwind CSS is configured
2. Include the Codex-hub packages in your Tailwind content paths
3. Check that dark mode is enabled

### Type Errors

If you see TypeScript errors:
1. Ensure you're using TypeScript 5.0+
2. Install type definitions: `pnpm add -D @types/react @types/react-dom`
3. Check your tsconfig.json settings

## Getting Help

- Check the [README](./README.md) for API documentation
- Open an issue on GitHub for bugs or questions
- Review the [Contributing Guide](./CONTRIBUTING.md) to contribute fixes

## Next Steps

After migration:
1. Remove duplicate component code
2. Update tests to use the new imports
3. Update documentation references
4. Consider contributing improvements back to Codex-hub

Happy migrating! 🚀
