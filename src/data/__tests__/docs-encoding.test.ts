import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect } from 'vitest';

/**
 * Guarda de encoding da documentação.
 *
 * O AGENTS.md já foi commitado com double-encoding (UTF-8 lido como cp1252),
 * o que trocou toda a acentuação por sequências como "DescriÃ§Ã£o" e corrompeu
 * as árvores ASCII. Estes testes impedem a regressão.
 */

const DOCS = ['AGENTS.md', 'README.md'];

function read(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf8');
}

describe.each(DOCS)('%s', (doc) => {
  it('não contém sequências de double-encoding', () => {
    const lines = read(doc).split('\n');
    const corrompidas = lines.filter((line) => /[ÃÂ][\u0080-\u00bf]|â€|â”|â•|â–|â†/.test(line));

    expect(corrompidas.slice(0, 3)).toEqual([]);
  });

  it('não contém caractere de substituição U+FFFD', () => {
    expect(read(doc)).not.toContain('\uFFFD');
  });

  it('é válido como UTF-8 e não começa com BOM', () => {
    const raw = readFileSync(resolve(process.cwd(), doc));

    expect(raw.subarray(0, 3)).not.toEqual(Buffer.from([0xef, 0xbb, 0xbf]));
    expect(() => new TextDecoder('utf-8', { fatal: true }).decode(raw)).not.toThrow();
  });
});
