import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/messages');
const locales = ['en', 'zh', 'sq', 'de', 'fr', 'it', 'nl'];

function load(loc) {
  return JSON.parse(fs.readFileSync(path.join(dir, `${loc}.json`), 'utf8'));
}

// 1) Parsability
for (const loc of locales) {
  try {
    load(loc);
    console.log(`OK parse: ${loc}.json`);
  } catch (e) {
    console.error(`PARSE ERROR ${loc}.json: ${e.message}`);
    process.exit(1);
  }
}

// 2) Deep key parity vs en (ref)
const en = load('en');
const refKeys = [];
function collect(obj, prefix) {
  for (const k of Object.keys(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    refKeys.push(p);
    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) collect(obj[k], p);
  }
}
collect(en, '');

let missing = 0;
for (const loc of locales.filter((l) => l !== 'en')) {
  const data = load(loc);
  const miss = [];
  function check(obj, prefix) {
    for (const k of Object.keys(obj)) {
      const p = prefix ? `${prefix}.${k}` : k;
      const inRef = refKeys.includes(p);
      if (!inRef) miss.push(p);
      else if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) check(obj[k], p);
    }
  }
  check(data, '');
  // Also check that every ref key exists in loc
  const locKeys = [];
  function collectLoc(o, prefix) {
    for (const k of Object.keys(o)) {
      const p = prefix ? `${prefix}.${k}` : k;
      locKeys.push(p);
      if (o[k] && typeof o[k] === 'object' && !Array.isArray(o[k])) collectLoc(o[k], p);
    }
  }
  collectLoc(data, '');
  const absent = refKeys.filter((k) => !locKeys.includes(k));
  if (absent.length || miss.length) {
    missing++;
    console.error(`MISMATCH ${loc}: missing-in-${loc}=${JSON.stringify(absent)} extra-unexpected=${JSON.stringify(miss)}`);
  } else {
    console.log(`OK keys: ${loc} (${refKeys.length} keys)`);
  }
}
console.log(missing ? 'VALIDATION FAILED' : 'ALL GOOD');
process.exit(missing ? 1 : 0);
