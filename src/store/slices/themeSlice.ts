import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define the initial state with a default theme
const initialState = {
  theme: 'light',  // Default theme
};

// Create a Redux slice for theme management
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to set the theme
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      // Save theme to localStorage for persistence on page reload
      localStorage.setItem('theme', action.payload);
    },
    // Action to load the theme from localStorage on app initialization
    loadTheme: (state) => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        state.theme = savedTheme;
      }
    },
  },
});

// Export the theme actions
export const { setTheme, loadTheme } = themeSlice.actions;

// Create and export the selectTheme selector
export const selectTheme = (state: RootState) => state.theme.theme;  // Select the current theme from state

// Export the reducer to be included in the store
export default themeSlice.reducer;
``
