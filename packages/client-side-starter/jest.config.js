// Documentation for the Jest configuration (used by this file) at https://jestjs.io/docs/en/configuration.html and https://www.gatsbyjs.org/docs/unit-testing/

/**
 * A list of file extensions to stub upon import, since they can not (and should not) be parsed by
 * Jest.
 */
const fileMockExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'webp',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'mp4',
  'webm',
  'wav',
  'mp3',
  'm4a',
  'aac',
  'oga',
].join('|');

/**
 * Mapping the above array of stubs to the mock files in the folder above.
 */
const moduleNameMapper = {
  [`.+\\.(${fileMockExtensions})$`]: '<rootDir>/src/scripts/nonJSJestStub/index.js',
};

/**
 * Configures the location of a NodeJS scripts that should be run before testing `.ts`/`.tsx` files;
 */
const transform = {
  '^.+\\.tsx?$': 'ts-jest',
};

/**
 * Regular expression that instructs Jest to consider all files in all files that end in one of the
 * following as unit tests:
 * - `.test.ts`
 * - `.test.tsx`
 */
const testRegex = '\\.test\\.(tsx?)';

/**
 * Folders to ignore when running Jest
 */
const testPathIgnorePatterns = ['node_modules', '.cache', '.history', '.vs-code'];

/**
 * Configuration file to pass to Jest
 */
const config = {
  transform,
  testRegex,
  moduleNameMapper,
  testPathIgnorePatterns,
};

module.exports = config;
