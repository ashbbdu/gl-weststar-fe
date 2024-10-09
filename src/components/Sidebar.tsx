// Sidebar.tsx
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

const DrawerWidth = 240;

const MainContent = styled('div')({
  flexGrow: 1,
  padding: '16px',
});

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton className='ash' onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DrawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {['Dashboard', 'Inbox', 'Settings', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <MainContent>
        <h2>Main Content</h2>
        <p>This is where the dashboard content goes.</p>
      </MainContent>
    </>
  );
};

export default Sidebar;
