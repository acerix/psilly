// @ts-check
/* eslint-env node */

/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 42,
      lines: 69,
      statements: 69,
    }
  }
}

module.exports = options
