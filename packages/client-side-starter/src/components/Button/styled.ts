import { createElement } from 'react';
import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';

import calcThemeShade from './calcThemeShade';
import { Tprimary, Ttheme } from './types';

interface SpinnerProps {
  primary: Tprimary;
  theme?: Ttheme;
  [key: string]: any;
}

const StyledButton = ({ primary, theme, ...rest }): JSX.Element => {
  const themeShade = calcThemeShade(theme);

  const InnerButton = styled(Button)`
    && {
      min-height: 36px;
      border: 1px solid ${themeShade};
      background-color: ${primary ? themeShade : 'white'};
      color: ${primary ? 'white' : themeShade};

      &:hover {
        background-color: ${primary ? themeShade : 'white'};
      }
    }
  `;

  return createElement(InnerButton, rest);
};

const Spinner = ({ primary, theme, ...rest }: SpinnerProps): JSX.Element => {
  const themeShade = calcThemeShade(theme);

  const InnerButton = styled(CircularProgress)`
    && {
      color: ${primary ? 'white' : themeShade};
    }
  `;

  return createElement(InnerButton, rest);
};

export { StyledButton, Spinner };
export default { StyledButton, Spinner };
