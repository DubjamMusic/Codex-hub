# Codex-hub

> Centralized component library and utilities hub for the HustleCodeX ecosystem

## 📖 Overview

Codex-hub is a TypeScript monorepo that provides shared UI components, design tokens, utilities, and animation presets for all HustleCodeX projects. Built with modern web technologies and designed for maximum reusability and type safety.

## 🎯 Features

- 🎨 **Design System Tokens** - Centralized colors, typography, and spacing
- 🧩 **React Components** - Reusable, accessible UI components
- 🛠️ **Utilities** - Shared TypeScript utilities for validation and formatting
- ✨ **Animation Presets** - Framer Motion variants for consistent animations
- 📦 **Tree-Shakeable** - Import only what you need
- 🔒 **Type-Safe** - Full TypeScript support with type definitions
- 🚀 **Fast Builds** - Powered by tsup and Turbo

## 📦 Packages

### @hustlecodex/design-tokens

Design system tokens including colors, typography, spacing, and shadows.

```typescript
import { colors, fonts, spacing } from '@hustlecodex/design-tokens';
```

### @hustlecodex/utils

Shared utilities for validation, formatting, and TypeScript types.

```typescript
import { formatXP, validateEmail, type User } from '@hustlecodex/utils';
```

### @hustlecodex/animations

Framer Motion animation variants and presets.

```typescript
import { fadeIn, glowPulse, slideIn } from '@hustlecodex/animations';
```

### @hustlecodex/ui

React UI components following the HustleCodeX design system.

```typescript
import { Button, Card, XPBar, QuestCard } from '@hustlecodex/ui';
```

## 🚀 Installation

Install the packages you need:

```bash
# Using pnpm (recommended)
pnpm add @hustlecodex/ui @hustlecodex/design-tokens

# Using npm
npm install @hustlecodex/ui @hustlecodex/design-tokens

# Using yarn
yarn add @hustlecodex/ui @hustlecodex/design-tokens
```

## 💻 Usage

### Design Tokens

```typescript
import { colors, spacing, fonts } from '@hustlecodex/design-tokens';

const styles = {
  backgroundColor: colors.background.dark,
  color: colors.primary.cyan,
  padding: spacing.md,
  fontFamily: fonts.body,
};
```

### UI Components

```tsx
import { Button, Card, XPBar, Badge } from '@hustlecodex/ui';

function MyComponent() {
  return (
    <Card variant="glass">
      <h2>Welcome to HustleCodeX</h2>
      <XPBar currentXP={2500} requiredXP={5000} level={5} />
      <Badge variant="success">Active</Badge>
      <Button variant="primary" onClick={handleClick}>
        Start Quest
      </Button>
    </Card>
  );
}
```

### Utilities

```typescript
import { formatXP, validateEmail, formatDate } from '@hustlecodex/utils';

const xpDisplay = formatXP(15000); // "15K"
const isValid = validateEmail('user@example.com'); // true
const dateStr = formatDate(new Date()); // "Jan 15, 2024"
```

### Animations

```tsx
import { motion } from 'framer-motion';
import { fadeIn, glowPulse } from '@hustlecodex/animations';

function AnimatedComponent() {
  return (
    <motion.div {...fadeIn}>
      <motion.button {...glowPulse}>
        Click me!
      </motion.button>
    </motion.div>
  );
}
```

## 🏗️ Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/DubjamMusic/Codex-hub.git
cd Codex-hub

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev
```

### Project Structure

```
Codex-hub/
├── packages/
│   ├── ui/                    # React components
│   ├── design-tokens/         # Design system tokens
│   ├── utils/                 # Shared utilities
│   └── animations/            # Framer Motion presets
├── package.json              # Root workspace config
├── pnpm-workspace.yaml       # Workspace definition
├── tsconfig.json             # Base TypeScript config
└── turbo.json                # Turbo configuration
```

## 🎨 Component Library

### Core Components

- **Button** - Primary, secondary, ghost variants with loading states
- **Card** - Glass morphism card with header/content sections
- **Input** - Form input with validation states and labels
- **Badge** - Status indicators with color variants
- **Progress** - Progress bars with gradient support
- **Avatar** - User avatars with fallback support

### Layout Components

- **Container** - Responsive wrapper with max-width presets
- **Stack** - Vertical/horizontal spacing utility
- **Grid** - Responsive grid system

### Specialized Components

- **XPBar** - Gamification progress bar with level display
- **QuestCard** - Quest display with status and rewards
- **StatCard** - Metric display with trend indicators
- **GlassPanel** - Glassmorphism container
- **GradientText** - Animated gradient text
- **GlowEffect** - Glow animations wrapper

## 🎯 Design Principles

- **Accessibility First** - All components support keyboard navigation and screen readers
- **Dark Mode by Default** - Designed for dark theme with glassmorphism effects
- **Gamification Ready** - Built-in components for XP, quests, and achievements
- **Type Safety** - Full TypeScript support throughout
- **Performance** - Tree-shakeable exports and optimized builds
- **SSR Compatible** - Works with Next.js and other SSR frameworks

## 📚 API Documentation

### Button

```tsx
<Button
  variant="primary" | "secondary" | "ghost"
  size="sm" | "md" | "lg"
  isLoading={boolean}
  onClick={() => {}}
>
  Click me
</Button>
```

### Card

```tsx
<Card variant="default" | "glass">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### XPBar

```tsx
<XPBar
  currentXP={2500}
  requiredXP={5000}
  level={5}
  showLabel={true}
/>
```

### QuestCard

```tsx
<QuestCard
  title="Complete Tutorial"
  description="Learn the basics"
  xpReward={100}
  status="active" | "locked" | "completed"
  difficulty="easy" | "medium" | "hard"
  onClick={() => {}}
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and type checking (`pnpm type-check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🔗 Links

- [GitHub Repository](https://github.com/DubjamMusic/Codex-hub)
- [Issue Tracker](https://github.com/DubjamMusic/Codex-hub/issues)

---

Built with ❤️ by the HustleCodeX team