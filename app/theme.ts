import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      '#f0f5ff',
      '#d6e4ff',
      '#adc6ff',
      '#85a5ff',
      '#597ef7',
      '#2f54eb',
      '#1d39c4',
      '#10239e',
      '#061178',
      '#030852',
    ],
    gray: [
      '#fafafa',
      '#f5f5f5',
      '#f0f0f0',
      '#d9d9d9',
      '#bfbfbf',
      '#8c8c8c',
      '#595959',
      '#434343',
      '#262626',
      '#1f1f1f',
    ],
  },
  primaryColor: 'brand',
  primaryShade: 6,
  fontFamily: 'Rubik, sans-serif',
  headings: { fontFamily: 'Unbounded, Rubik, sans-serif' },
};
