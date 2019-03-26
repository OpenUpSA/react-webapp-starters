import { darken, lighten } from 'polished';
import { Ttheme } from './types';

import { primary } from '../../tokens/colors';

/**
 * Calculate all styling overrides that should be added if a theme is supplied
 */
const calcThemeShade = (theme: Ttheme): string => {
  switch (theme) {
    case 'dark':
      return darken(0.1, primary);
    case 'light':
      return lighten(0.2, primary);
    default:
      return primary;
  }
};

export default calcThemeShade;
