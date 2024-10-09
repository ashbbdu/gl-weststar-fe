// App.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import SidebarComponent from './components/SidebarComponent';
import { RootState } from './store/store';
import { blueTheme, darkTheme, greenTheme, lightTheme } from './themes';

const themes = {
  light: lightTheme,
  dark: darkTheme,
  blue: blueTheme,
  green: greenTheme,
};

const App: React.FC = () => {
  const selectedTheme = useSelector((state: RootState) => state.theme.selectedTheme);

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <CssBaseline />
    <div style={{display : "flex"}}>
    <div>
      <SidebarComponent />
      <Navbar />
      </div>
    
      <div style={{ padding: 16 }}>
        <h1>Welcome to the Multi-Theme App</h1>
        <p>This theme will apply globally!</p>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
