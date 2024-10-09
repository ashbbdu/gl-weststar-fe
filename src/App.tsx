// Dashboard.tsx
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
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
        <div style={{marginTop : 80 , padding : 10}}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
        <ThemeSwitcher />
      </Box>
    </ThemeProvider>
  );
};

export default App;
