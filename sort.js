import { getLinesWithDigest } from './common.js';

const key = process.argv[2];
const numbers = process.argv.slice(3).map(Number);
if (!key || !numbers.length) {
  console.log('Usage: node sort.js <key> <numbers>');
  process.exit(1);
}

if (numbers.some((n) => n < 1 || n > 2048)) {
  console.log('Numbers must be between 1 and 2048');
}

const linesWithDigest = getLinesWithDigest(key);
const words = numbers.map((n) => linesWithDigest[n - 1][0]);
console.log(words.join(' '));
