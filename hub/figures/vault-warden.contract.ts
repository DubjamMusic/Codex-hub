/**
 * vault-warden — hub vault latch for utility access.
 * WAVE_ID: 2026-10-25-q-rift
 * Distinct from prior waves.
 */

export const FIGURE_ID = "vault-warden";
export const WAVE_ID = "2026-10-25-q-rift";

const BANNED = ["planner", "executor", "monitor", "data_agent", "planner-alpha", "executor-beta"];

export function wardUtility(utility: string, caller: string): { allowed: boolean; sealed: boolean } {
  if (BANNED.includes(caller.toLowerCase())) {
    return { allowed: false, sealed: true };
  }
  return { allowed: true, sealed: false };
}

export function selfCheck(): { pass: boolean; allowed: boolean; sealed: boolean } {
  const ok = wardUtility("codex-tool", FIGURE_ID);
  const bad = wardUtility("codex-tool", "executor");
  return {
    pass: ok.allowed && !ok.sealed && !bad.allowed && bad.sealed,
    allowed: ok.allowed,
    sealed: bad.sealed,
  };
}

// Expected: { pass: true, allowed: true, sealed: true }
