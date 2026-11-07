/**
 * hub-sentinel — Package hub integrity latch
 * Wave: Q-prism-20261107
 * Primary path only. Verifies workspace packages without secret material. No boardroom tokens.
 */
export const FIGURE_ID = 'hub-sentinel' as const;
export const WAVE_ID = 'Q-prism-20261107' as const;

const ALLOWED_PACKAGES = ['@codex/core', '@codex/ui', '@codex/agent'] as const;

export function sentinelCheck(pkg: string): { intact: boolean; pkg: string } {
  const ok = (ALLOWED_PACKAGES as readonly string[]).includes(pkg);
  return { intact: ok, pkg: ok ? pkg : 'rejected' };
}

export function selfCheck(): { ready: true; secretBlocked: true; density: number } {
  const r1 = sentinelCheck('@codex/core');
  const r2 = sentinelCheck('secret-package');
  if (!r1.intact || r2.intact) throw new Error('hub-sentinel selfCheck failed');
  return { ready: true, secretBlocked: true, density: 8.131 };
}
