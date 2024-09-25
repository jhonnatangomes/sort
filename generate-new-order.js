import { writeFileSync } from 'fs';
import { getLinesWithDigest } from './common.js';

const key = process.argv[2];
if (!key) {
  console.log('Usage: node generate-new-order.js <key> <numbers>');
  process.exit(1);
}

const linesWithDigest = getLinesWithDigest(key);
console.log(linesWithDigest.length);
writeFileSync('newWords', linesWithDigest.map((line) => line[0]).join('\n'));
