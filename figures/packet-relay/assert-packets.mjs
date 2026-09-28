#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '../..');
const card = JSON.parse(readFileSync(join(here, 'packets.json'), 'utf8'));

if (card.figureId !== 'packet-relay') throw new Error('bad figureId');
if (card.waveId !== '2026-09-28-m-relay') throw new Error('bad waveId');
if (card.mergePolicy !== 'pr-only') throw new Error('merge policy must be pr-only');
if (card.packets.length !== 4) throw new Error('need exactly 4 packets');
const banned = new Set(card.bannedTokens || []);
const off = new Set(card.offRosterThisWave || []);
if (off.has(card.figureId)) throw new Error('self off-roster');
const ids = new Set();
for (const p of card.packets) {
  if (!p.id || !p.path || !p.outcome || !p.test) throw new Error('packet missing fields: ' + p.id);
  if (ids.has(p.id)) throw new Error('duplicate packet id ' + p.id);
  ids.add(p.id);
  if (!existsSync(join(root, p.path))) throw new Error('missing path ' + p.path);
  for (const token of banned) {
    if (p.id.includes(token) || card.figureId.includes(token)) {
      throw new Error('banned token in packet ' + p.id);
    }
  }
}
if (!card.frozen.includes('challengeAgent.ts')) throw new Error('challenge not frozen');
console.log(`ok packet-relay packets=${card.packets.length}`);
