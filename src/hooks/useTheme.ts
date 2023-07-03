import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import { useState } from 'react';
import { DefaultTheme } from 'styled-components';

export function useTheme() {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return { theme, toggleTheme };
}
