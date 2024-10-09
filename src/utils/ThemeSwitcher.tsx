import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Fab, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../store/slices/themeSlice';
import { AppDispatch, RootState } from '../store/store';

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => selectTheme(state));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
    handleClose(); // Close menu after selection
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="theme switcher"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <ColorLensIcon />
      </Fab>

      {/* Menu for theme selection */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          selected={currentTheme === 'light'}
          onClick={() => handleThemeChange('light')}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={currentTheme === 'dark'}
          onClick={() => handleThemeChange('dark')}
        >
          Dark
        </MenuItem>
        <MenuItem
          selected={currentTheme === 'blue'}
          onClick={() => handleThemeChange('blue')}
        >
          Blue
        </MenuItem>
        <MenuItem
          selected={currentTheme === 'green'}
          onClick={() => handleThemeChange('green')}
        >
          Green
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
