# Codex-hub Examples

Quick examples and code snippets for using Codex-hub packages.

## Design Tokens

```typescript
import { colors, spacing, fonts, fontSizes } from '@hustlecodex/design-tokens';

// Using colors
const buttonStyle = {
  backgroundColor: colors.primary.cyan,
  color: colors.text.primary,
  border: `1px solid ${colors.border.default}`,
};

// Using spacing
const cardStyle = {
  padding: spacing.lg,
  margin: spacing.md,
  gap: spacing.sm,
};

// Using typography
const headingStyle = {
  fontFamily: fonts.display,
  fontSize: fontSizes['2xl'],
  lineHeight: lineHeights.tight,
};
```

## UI Components

### Button Examples

```tsx
import { Button } from '@hustlecodex/ui';

// Primary button
<Button variant="primary" onClick={handleClick}>
  Start Quest
</Button>

// Secondary button with loading state
<Button variant="secondary" isLoading={isSubmitting}>
  Save Progress
</Button>

// Ghost button (minimal style)
<Button variant="ghost" size="sm">
  Cancel
</Button>
```

### Card Examples

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@hustlecodex/ui';

// Basic card
<Card>
  <p>Simple card content</p>
</Card>

// Glass morphism card with structure
<Card variant="glass">
  <CardHeader>
    <CardTitle>Quest Progress</CardTitle>
  </CardHeader>
  <CardContent>
    <p>You've completed 5 out of 10 quests</p>
  </CardContent>
</Card>
```

### XP Bar Example

```tsx
import { XPBar } from '@hustlecodex/ui';

<XPBar
  currentXP={2500}
  requiredXP={5000}
  level={10}
  showLabel={true}
/>
```

### Quest Card Example

```tsx
import { QuestCard } from '@hustlecodex/ui';

<QuestCard
  title="Master TypeScript"
  description="Complete 10 TypeScript challenges"
  xpReward={500}
  status="active"
  difficulty="medium"
  onClick={() => handleQuestClick('quest-id')}
/>
```

### Layout Examples

```tsx
import { Container, Stack, Grid } from '@hustlecodex/ui';

// Container with max width
<Container maxWidth="lg">
  <h1>My Content</h1>
</Container>

// Vertical stack with spacing
<Stack direction="vertical" spacing="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Responsive grid
<Grid cols={3} gap="md">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Grid>
```

### Form Example

```tsx
import { Input, Button, Stack } from '@hustlecodex/ui';

<Stack direction="vertical" spacing="md">
  <Input
    label="Username"
    placeholder="Enter your username"
    error={errors.username}
  />
  <Input
    label="Email"
    type="email"
    placeholder="your@email.com"
    helperText="We'll never share your email"
  />
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Stack>
```

## Utilities

### Validation

```typescript
import { validateEmail, validateUsername, validatePassword } from '@hustlecodex/utils';

const email = 'user@example.com';
const isValidEmail = validateEmail(email); // true

const username = 'hustler123';
const isValidUsername = validateUsername(username); // true (3-20 chars)

const password = 'secure123';
const isValidPassword = validatePassword(password); // true (8+ chars, letter + number)
```

### Formatting

```typescript
import { 
  formatXP, 
  formatDate, 
  formatRelativeTime,
  formatPercentage 
} from '@hustlecodex/utils';

// Format XP with K/M suffixes
formatXP(1500);      // "1.5K"
formatXP(2500000);   // "2.5M"

// Format dates
formatDate(new Date()); // "Feb 15, 2024"

// Relative time
formatRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"

// Percentages
formatPercentage(0.75);     // "75%"
formatPercentage(750, 1000); // "75%"
```

### TypeScript Types

```typescript
import type { User, Quest, RecoveryMetrics } from '@hustlecodex/utils';

const user: User = {
  id: '123',
  username: 'hustler',
  email: 'user@example.com',
  xp: 5000,
  level: 10,
};

const quest: Quest = {
  id: 'quest-1',
  title: 'Complete Tutorial',
  description: 'Learn the basics',
  xpReward: 100,
  status: 'active',
  difficulty: 'easy',
};

const metrics: RecoveryMetrics = {
  daysSober: 30,
  xp: 5000,
  questsCompleted: 15,
  stabilityIndex: 85,
  recoveryStatus: 'thriving',
};
```

## Animations

### Basic Animations

```tsx
import { motion } from 'framer-motion';
import { fadeIn, slideIn, scale } from '@hustlecodex/animations';

// Fade in animation
<motion.div {...fadeIn}>
  <p>This content fades in</p>
</motion.div>

// Slide in from left
<motion.div {...slideIn}>
  <p>This slides in from the left</p>
</motion.div>

// Scale animation
<motion.button {...scale}>
  Click me!
</motion.button>
```

### Continuous Animations

```tsx
import { motion } from 'framer-motion';
import { glowPulse, bounce, rotate } from '@hustlecodex/animations';

// Glowing pulse effect
<motion.div {...glowPulse}>
  <span>✨ Special Badge</span>
</motion.div>

// Bouncing animation
<motion.div {...bounce}>
  ⬇️
</motion.div>

// Rotating spinner
<motion.div {...rotate}>
  ⚙️
</motion.div>
```

### List Animations (Stagger)

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@hustlecodex/animations';

<motion.ul {...staggerContainer}>
  {items.map(item => (
    <motion.li key={item.id} {...staggerItem}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Modal Animations

```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { modalBackdrop, modalContent } from '@hustlecodex/animations';

<AnimatePresence>
  {isOpen && (
    <>
      <motion.div {...modalBackdrop} className="fixed inset-0 bg-black/50" />
      <motion.div {...modalContent} className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
          <h2>Modal Content</h2>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

## Complete Dashboard Example

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Container, 
  Grid, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  XPBar,
  QuestCard,
  StatCard,
  Button 
} from '@hustlecodex/ui';
import { formatXP } from '@hustlecodex/utils';
import { fadeIn, staggerContainer, staggerItem } from '@hustlecodex/animations';

export function Dashboard() {
  const user = {
    username: 'HustleCodex',
    level: 12,
    currentXP: 8500,
    requiredXP: 10000,
  };

  const quests = [
    {
      id: '1',
      title: 'Daily Check-in',
      description: 'Complete your daily reflection',
      xpReward: 50,
      status: 'active' as const,
      difficulty: 'easy' as const,
    },
    // ... more quests
  ];

  return (
    <Container maxWidth="xl">
      <motion.div {...fadeIn}>
        <h1 className="text-3xl font-bold mb-6">Welcome back, {user.username}!</h1>
        
        <XPBar
          currentXP={user.currentXP}
          requiredXP={user.requiredXP}
          level={user.level}
          showLabel
          className="mb-8"
        />

        <Grid cols={3} gap="lg" className="mb-8">
          <StatCard
            label="Total XP"
            value={formatXP(user.currentXP)}
            trend="up"
            trendValue="+500 this week"
          />
          <StatCard
            label="Quests Completed"
            value="24"
            trend="up"
            trendValue="+3 today"
          />
          <StatCard
            label="Current Streak"
            value="7 days"
            trend="neutral"
          />
        </Grid>

        <motion.div {...staggerContainer}>
          <h2 className="text-2xl font-semibold mb-4">Active Quests</h2>
          <Grid cols={2} gap="md">
            {quests.map(quest => (
              <motion.div key={quest.id} {...staggerItem}>
                <QuestCard {...quest} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </Container>
  );
}
```

## Tips & Best Practices

1. **Import only what you need** - The packages are tree-shakeable
2. **Use design tokens consistently** - Avoid hardcoded colors/spacing
3. **Combine with Tailwind** - Components work great with Tailwind utilities
4. **Type everything** - Leverage TypeScript types from @hustlecodex/utils
5. **Animate thoughtfully** - Use animations to enhance, not distract

## More Examples

For more examples and patterns, check out:
- [README.md](./README.md) - Full documentation
- [MIGRATION.md](./MIGRATION.md) - Migration patterns from existing code
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
