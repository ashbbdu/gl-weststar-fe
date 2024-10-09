// Dashboard.tsx
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import { RootState } from './store/store';
import { blueTheme, darkTheme, greenTheme, lightTheme } from './themes';
import ThemeSwitcher from './utils/ThemeSwitcher';


const themes = {
  light: lightTheme,
  dark: darkTheme,
  blue: blueTheme,
  green: greenTheme,
};

const App: React.FC = () => {
  const selectedTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <CssBaseline />
      <Box display="flex">
        <Sidebar />
        <ThemeSwitcher />
      </Box>
    </ThemeProvider>
  );
};

export default App;
