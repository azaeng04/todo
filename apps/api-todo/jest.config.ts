import type { Config } from '@jest/types';

module.exports = {
  displayName: 'api-todo',
  verbose: true,
  setupFilesAfterEnv: [
    '../../node_modules/@hirez_io/jest-single/dist/jest-single.js',
  ],
  preset: '../../jest.preset.ts',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api-todo',
  moduleNameMapper: {
    '~api/(.*)$': '<rootDir>/apps/api-todo/$1',
    '~app/(.*)$': '<rootDir>/apps/app-todo/$1',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
} as Config.InitialOptions;
