/**
 * nexus-keeper — Wave Q forge 20261013
 * Primary path: figures/nexus-keeper.contract.ts
 * Role: Gate hub tool entries to unique non-banned figure ids.
 * Knowledge: package boundaries, unique ids, PR-only gate.
 * Responsibilities: admit only unique figures, block boardroom tokens.
 * Test: import { selfCheck }; expect { admitted: true, blocked: true }
 */

export const FIGURE_ID = 'nexus-keeper' as const;
export const WAVE_ID = 'Q-forge-20261013' as const;

const BANNED = new Set(['planner', 'executor', 'monitor', 'data_agent', 'planner-alpha', 'executor-beta']);

export function gateEntry(id: string, existing: string[]): { admitted: boolean; blocked: boolean } {
  const blocked = BANNED.has(id) || existing.includes(id);
  return { admitted: !blocked && id.length > 0, blocked };
}

export function selfCheck() {
  const good = gateEntry('nexus-keeper', []);
  const bad = gateEntry('planner', []);
  const dup = gateEntry('nexus-keeper', ['nexus-keeper']);
  return {
    pass: good.admitted && !good.blocked && bad.blocked && dup.blocked,
    admitted: good.admitted,
    blocked: bad.blocked,
  };
}
