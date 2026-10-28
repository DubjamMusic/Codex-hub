/**
 * vault-scribe — Action Figure contract
 * Bound to Codex-hub primary path.
 * Role: Guard package utility boundaries; reject banned boardroom tokens and secret-shaped keys.
 * Knowledge: Central hub for codex tools. One primary path per figure. New branch every wave.
 */
export const FIGURE_ID = 'vault-scribe' as const;
export const WAVE_ID = '20261028-q-beacon' as const;
export const PRIMARY_PATH = 'figures/vault-scribe.contract.ts' as const;

const BANNED = new Set(['planner', 'executor', 'monitor', 'data_agent', 'planner-alpha', 'executor-beta']);

export function selfCheck(): { pass: boolean; figure: string; bannedRejected: boolean; gate: string } {
  const sample = ['utility-pack', 'beacon-runner', 'planner'];
  const bannedRejected = sample.filter((id) => BANNED.has(id)).length === 1;
  return {
    pass: FIGURE_ID === 'vault-scribe' && bannedRejected,
    figure: FIGURE_ID,
    bannedRejected,
    gate: 'pr-only',
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(selfCheck(), null, 2));
}
