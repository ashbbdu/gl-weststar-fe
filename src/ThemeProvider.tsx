// ThemeProvider.tsx
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from './store/slices/themeSlice';
import { RootState } from './store/store';

// Define the different theme configurations
const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        paper: '#ffffff',
        default: '#f4f4f4',
      },
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        paper: '#1c1c1c',
        default: '#121212',
      },
    },
  }),
  blue: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0d47a1',
      },
      background: {
        paper: '#e3f2fd',
        default: '#f5f5f5',
      },
    },
  }),
  green: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2e7d32',
      },
      background: {
        paper: '#e8f5e9',
        default: '#fafafa',
      },
    },
  }),
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeName = useSelector((state: RootState) => selectTheme(state));
  const theme = themes[themeName];

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
