import { calculateContrastRatio, calculateTransparentColor, invertColor } from '../index';
import type { ThemeGeneratorProps, ColorSet, SemanticColors } from './themeGenerator.types';

/**
 * Generates a set of semantic color values that correspond with the given colors.
 */
export const createSemanticColor = (semanticColors: SemanticColors, canvasColor: string) => {
  const colorSets: ColorSet<any> = {};

  for (const color in semanticColors) {
    const contrastRatio = calculateContrastRatio(semanticColors[color], canvasColor);
    if (contrastRatio < 3) {
      console.error(
        'It appears that your color ' +
          color +
          ' has a contrast of ' +
          contrastRatio +
          ' with your canvas background. This is below W3 standards of a 3.0 ratio.',
      );
    }
    colorSets[color] = semanticColors[color];
    colorSets[color + 'Hover'] = calculateTransparentColor(semanticColors[color], invertColor(canvasColor), 0.8);
    colorSets[color + 'Pressed'] = calculateTransparentColor(semanticColors[color], invertColor(canvasColor), 0.7);
    colorSets[color + 'Disabled'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.5);
    colorSets[color + 'ForegroundHover'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.04);
    colorSets[color + 'ForegroundPressed'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.08);
  }

  return colorSets;
};

export const themeGenerator = (props: ThemeGeneratorProps) => {
  const { canvasColor, semanticColors } = props;

  const colorSets = createSemanticColor(semanticColors, canvasColor);

  return {
    textColor: invertColor(canvasColor),
    canvasColor,
    ...colorSets,
  };
};

const hcTheme = themeGenerator({
  canvasColor: '#000000',
  semanticColors: {
    inherit: '#ffff00',
    brand: '#0029ff',
    success: '#278536',
    danger: '#de3309',
  },
});