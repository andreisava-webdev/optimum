import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      '#e6f4ff',
      '#bae0ff',
      '#91caff',
      '#69b1ff',
      '#4096ff',
      '#1677ff',
      '#0958d9',
      '#003eb3',
      '#002c8c',
      '#001d66',
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
