import { Ttheme } from '../types';

type Tname = string;
type Toutput = string;

export interface TestObject {
  name: Tname;
  input?: Ttheme,
  output: Toutput,
}