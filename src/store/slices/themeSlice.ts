// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeName = 'light' | 'dark' | 'blue' | 'green';

interface ThemeState {
  selectedTheme: ThemeName;
}

const initialState: ThemeState = {
  selectedTheme: 'light',  // Default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeName>) {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
