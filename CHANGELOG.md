# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-02-15

### Added

#### Infrastructure
- Monorepo setup with pnpm workspaces
- Turbo build system for efficient builds
- TypeScript configuration with strict mode
- Build pipeline using tsup

#### @hustlecodex/design-tokens (0.1.0)
- Color tokens including primary, empathy, logic, concordance colors
- Typography tokens (fonts, font sizes, weights, line heights)
- Spacing tokens (xs to 5xl scale)
- Border radius tokens
- Shadow tokens including glow effects

#### @hustlecodex/utils (0.1.0)
- TypeScript types: `User`, `Quest`, `RecoveryMetrics`, `Achievement`, `Skill`, `Badge`
- Validation utilities: `validateUsername`, `validateEmail`, `validatePassword`, `validateXP`, `validateQuestStatus`
- Formatting utilities: `formatXP`, `formatDate`, `formatRelativeTime`, `formatPercentage`, `formatDaysDuration`, `truncateText`

#### @hustlecodex/animations (0.1.0)
- Framer Motion animation variants
- `fadeIn`, `slideIn`, `slideInRight`, `scale` animations
- `glowPulse`, `bounce`, `rotate`, `shimmer` effects
- `staggerContainer` and `staggerItem` for list animations
- Modal animations: `modalBackdrop`, `modalContent`, `slideUpDrawer`
- `fadeBlur` animation variant

#### @hustlecodex/ui (0.1.0)

**Core Components:**
- `Button` - Primary, secondary, ghost variants with loading states
- `Card` - Glass morphism card with header/content sections
- `Input` - Form input with validation states and labels
- `Badge` - Status indicators with 6 color variants
- `Progress` - Progress bars with gradient support
- `Avatar` - User avatars with fallback support

**Layout Components:**
- `Container` - Responsive wrapper with max-width presets
- `Stack` - Vertical/horizontal spacing utility
- `Grid` - Responsive grid system (1-12 columns)

**Specialized Components:**
- `XPBar` - Gamification progress bar with level display
- `QuestCard` - Quest display with status and rewards
- `StatCard` - Metric display with trend indicators
- `GlassPanel` - Glassmorphism container with blur effects
- `GradientText` - Text with gradient colors
- `GlowEffect` - Wrapper for glow animations

#### Documentation
- Comprehensive README with installation and usage
- API documentation for all components
- Migration guide (MIGRATION.md)
- Contributing guidelines (CONTRIBUTING.md)
- Component examples and patterns

### Technical Details
- Full TypeScript support with exported type definitions
- Tree-shakeable exports (ESM and CJS)
- SSR/SSG compatible
- React 18+ support
- Tailwind CSS based styling
- Dark mode by default

## [Unreleased]

### Planned
- Storybook setup for visual component testing
- Unit tests with Vitest
- Component tests with Testing Library
- Additional components (Modal, Select, Tabs, Sidebar)
- Animation hooks and utilities
- Theme customization system
- Publishing to npm or GitHub Packages
