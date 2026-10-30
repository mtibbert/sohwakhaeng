// logger.test.ts
import { logInfo } from "../../../src/lib/utility/logger.ts"
import { Logger } from './gas-code';

import { describe, it, expect } from 'vitest'

describe('logInfo()', () => {
  let consoleMock;

  beforeEach(() => {
    consoleMock = vi.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    consoleMock.mockRestore();
  });

  describe('logInfo(msg, prefix) overload', () => {

    vi.stubGlobal('Logger', {
      log: vi.fn((msg) => { console.log(`${msg}`)}),
    });
    
    it(`prefix argument is used in output'`, () => {
      const prefix = `test `;
      const msg = `foo `;
      const specialChars = ['['];
      const regexPattern = `^${RegExp.escape(prefix)}*`;
      const dynamicRegex = new RegExp(regexPattern);
      logInfo(msg, prefix);
      expect(consoleMock).toHaveBeenCalledWith(expect.stringMatching(dynamicRegex));
    })
  });
});
