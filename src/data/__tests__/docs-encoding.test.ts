import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect } from 'vitest';

/**
 * Guarda de encoding da documentação.
 *
 * O AGENTS.md já foi commitado com double-encoding (UTF-8 lido como cp1252),
 * o que trocou toda a acentuação e corrompeu as árvores ASCII. Estes testes
 * impedem a regressão.
 *
 * O padrão de mojibake é montado a partir de code points, nunca escrito
 * literalmente aqui: se os caracteres estivessem no código-fonte, este arquivo
 * acusaria a si mesmo caso a varredura passe a incluir os próprios testes.
 */

const DOCS = ['AGENTS.md', 'README.md'];

const MOJIBAKE = new RegExp(
  [
    `[${String.fromCharCode(0xc3)}${String.fromCharCode(0xc2)}][${String.fromCharCode(
      0x80
    )}-${String.fromCharCode(0xbf)}]`,
    ...[0x20ac, 0x201d, 0x2022, 0x2013, 0x2014, 0x2020].map(
      (cp) => `${String.fromCharCode(0xe2)}${String.fromCharCode(cp)}`
    ),
  ].join('|')
);

function read(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf8');
}

describe('detector de mojibake', () => {
  it('detecta texto corrompido', () => {
    expect(MOJIBAKE.test(String.fromCharCode(0xc3, 0xa7))).toBe(true);
    expect(MOJIBAKE.test(`${String.fromCharCode(0xe2, 0x20ac, 0x201d)}`)).toBe(true);
  });

  it('não acusa texto acentuado correto', () => {
    const correto = `Descri${String.fromCharCode(0xe7, 0xe3)}o ${String.fromCharCode(0x2014)} fim`;

    expect(MOJIBAKE.test(correto)).toBe(false);
  });
});

describe.each(DOCS)('%s', (doc) => {
  it('não contém sequências de double-encoding', () => {
    const lines = read(doc).split('\n');
    const corrompidas = lines
      .map((line, index) => ({ line, index: index + 1 }))
      .filter(({ line }) => MOJIBAKE.test(line))
      .map(({ index }) => index);

    expect(corrompidas).toEqual([]);
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
