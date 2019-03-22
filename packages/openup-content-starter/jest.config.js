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
 * A list of firebase imports used in this project that should be stubbed in order to prevent test
 * data from syncing with the live firebase database
 */
const firebaseImports = [
  'firebase/app',
  'firebase/firestore',
  'firebase/auth',
  'firebase/messaging',
].join('|');

/**
 * Mapping the above array of stubs to the mock files in the folder above.
 */
const moduleNameMapper = {
  [`.+\\.(${fileMockExtensions})$`]: '<rootDir>/src/scripts/nonJSJestStub/index.js',
  [`(${firebaseImports})`]: '<rootDir>/src/scripts/firebaseJestStub/index.js',
};

/**
 * Configures the location of a NodeJS scripts that should be run before testing specific files
 * (main distinction here between file `.js`/`.jsx` files and `.ts`/`.tsx` files);
 */
const transform = {
  '^.+\\.jsx?$': '<rootDir>/src/scripts/addGatsbyBabelConfigToTests/index.js',
  '^.+\\.tsx?$': 'ts-jest',
};

/**
 * Regular expression that instructs Jest to consider all files in all files that end in one of the
 * following as unit tests:
 * - `.test.js`
 * - `.test.jsx`
 * - `.test.ts`
 * - `.test.jsx`
 */
const testRegex = '\\.test\\.([tj]sx?)';

/**
 * Folders to ignore when running Jest
 */
const testPathIgnorePatterns = ['node_modules', '.cache', '.history'];

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
