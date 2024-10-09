// Navbar.tsx
import { AppBar, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import { RootState } from '../store/store';

const Navbar: React.FC = () => {
  const selectedTheme = useSelector((state: RootState) => state.theme.selectedTheme);
  const dispatch = useDispatch();

  const handleThemeChange = (event: SelectChangeEvent<'light' | 'dark' | 'blue' | 'green'>) => {
    dispatch(setTheme(event.target.value as 'light' | 'dark' | 'blue' | 'green'));
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Theme Switcher App
        </Typography>
        <Select
          value={selectedTheme}
          onChange={handleThemeChange}
          variant="outlined"
          style={{ color: 'white' }}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="green">Green</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
