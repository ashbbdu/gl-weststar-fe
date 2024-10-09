// theme.ts
import { createTheme, Theme } from '@mui/material/styles';

const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
    text: {
      primary: '#000',
    },
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#fff',
    },
  },
});

const blueTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#e3f2fd',
    },
    text: {
      primary: '#0d47a1',
    },
  },
});

const greenTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#66bb6a',
    },
    background: {
      default: '#e8f5e9',
    },
    text: {
      primary: '#388e3c',
    },
  },
});

export { blueTheme, darkTheme, greenTheme, lightTheme };

