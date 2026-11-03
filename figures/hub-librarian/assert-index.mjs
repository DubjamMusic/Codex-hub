import fs from 'fs';
const idx = JSON.parse(fs.readFileSync('./index.json','utf8'));
const banned = ['planner','executor','monitor','data_agent'];
const text = JSON.stringify(idx).toLowerCase();
const hasBanned = banned.some(b => text.includes(b));
const pass = idx.figure === 'hub-librarian' && idx.packages.length === idx.expectedCount && !hasBanned && idx.prOnly;
console.log(JSON.stringify({ pass, packages: idx.packages.length, banned: hasBanned }));
if (!pass) process.exit(1);
