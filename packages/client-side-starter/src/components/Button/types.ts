/**
 * The text to display inside the button
 */
export type Tchildren = string;

/**
 * Changes button styling to a blue background and white text. This is in correspondance with
 * 'primary' styling components in this project.
 */
export type Tprimary = boolean;

/**
 * Changes the theming of the button to either dark or light. If no values is supplied, no special
 * theming will be applied.
 */
export type Ttheme = 'dark' | 'light';

/**
 * Whether the button should transition to a loading state once clicked.
 */
export type TautoLoading = boolean;

/**
 * Whether the button is currently displaying an animated spinner instead of text to indicate that
 * something is happening.
 */
export type TisLoading = boolean;

/**
 * Function to call when button is clicked.
 */
export type TclickHandler = () => any;

type Tname = string;
type Toutput = string;

interface TestObject {
  name: Tname;
  input?: Ttheme,
  output: Toutput,
}