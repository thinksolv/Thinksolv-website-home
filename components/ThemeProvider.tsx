'use client';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemesProviderProps } from 'next-themes';
import { ReactNode } from 'react';

// Use the ThemeProviderProps type directly from next-themes
type ThemeProviderProps = {
  children: ReactNode;
} & Pick<NextThemesProviderProps, 'attribute' | 'defaultTheme' | 'enableSystem'>;

export function ThemeProvider({ 
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
