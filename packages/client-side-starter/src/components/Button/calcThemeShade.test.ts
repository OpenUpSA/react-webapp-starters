import calcThemeShade from './calcThemeShade';

const names = [
  'No theme',
  'Light theme',
  'Dark theme'
]

const inputs = [
  null,
  'light',
  'dark',
];

const tests = [
  {
    name: 'No theme',
    input: null,
    output: true,
  },
  {
    name: 'Light theme',
    input: 'light',
    output: true,
  },
  {
    name: 'Dark theme',
    input: 'dark',
    output: true,
  }
]

const assertion = ({ input, output }) => expect(calcThemeShade(input)).toBe(output);
const runTest = ({ name, ...testProps }) => test(name, assertion(testProps));

tests.forEach(runTest);