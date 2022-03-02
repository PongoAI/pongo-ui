import { themeGenerator } from '@pongo-ui/react-theme-generator';
import type { ColorTokens } from '../../types';

export const webLightTokens: ColorTokens = themeGenerator({
  canvasColor: '#ffffff',
  semanticColors: {
    inherit: '#4d4d4d',
    brand: '#2060CF',
    secondary: '#586bd9',
    success: '#278536',
    danger: '#de3309',
    social: '#1d9aee',
    warning: '#eb6807',
    info: '#1da8b5',
  },
});
