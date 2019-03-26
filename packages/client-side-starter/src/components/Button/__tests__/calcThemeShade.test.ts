import calcThemeShade from '../calcThemeShade';
import testData from './calcThemeShade.data';
import { Ttheme } from '../types';

type Tname = string;
type Toutput = string;

interface TestObject {
  name: Tname;
  input?: Ttheme,
  output: Toutput,
}

interface AssertionObject {
  input?: Ttheme;
  output: Toutput;
}

const assertion = ({ input, output }: AssertionObject) => () => expect(calcThemeShade(input)).toBe(output);
const runTest = ({ name, ...testProps }: TestObject) => test(name, assertion(testProps));

testData.forEach(runTest);