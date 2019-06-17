import React from 'react';
// https://material-ui.com/customization/themes/#theme-provider
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import {
  EazeTheme,
  StyledButton,
  MakeStylesButton,
  UseThemeButton,
  WithStylesButton,
} from './components/material-ui-theme';

function App() {
  return (
    <ThemeProvider theme={EazeTheme}>
      <div className='App'>
        <MakeStylesButton variant='outlined' />
        <StyledButton variant='outlined' />
        <UseThemeButton variant='outlined' />
        <WithStylesButton variant='outlined' />
      </div>
    </ThemeProvider>
  );
}

export default App;
