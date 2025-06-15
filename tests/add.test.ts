import fs from 'fs';
import os from 'os';
import path from 'path';
import * as ob from '../src/add.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('setDotEnvOption', () => {
  it('check add function', async () => {
    await expect(ob.add(1, 2)).resolves.toBe(3);
  });
});
