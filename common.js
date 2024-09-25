import fs from 'fs';
import { createHmac } from 'crypto';

export function getLinesWithDigest(key) {
  const lines = fs
    .readFileSync('words')
    .toString()
    .split('\n')
    .filter((l) => l);
  return lines
    .map((line) => [line, createHmac('sha256', key).update(line).digest('hex')])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
