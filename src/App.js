import React, { useState } from 'react';
// https://material-ui.com/customization/themes/#theme-provider
import { ThemeProvider } from '@material-ui/styles';
// https://material-ui.com/components/css-baseline/#css-baseline
import { CssBaseline } from '@material-ui/core';
import './App.css';
import {
  ButtonVariantControl,
  CUSTOM_THEME,
  StyledButton,
  MakeStylesButton,
  UseThemeButton,
  WithStylesButton,
} from './components/material-ui-theme';

function App() {
  const buttonVariants = ['text', 'outlined', 'contained'];
  const [variant, setVariant] = useState(buttonVariants[0]);

  return (
    <ThemeProvider theme={CUSTOM_THEME}>
      <CssBaseline />
      <div className='App'>
        <div className='ButtonVariantControlContainer'>
          <ButtonVariantControl
            onClickHandler={setVariant}
            value={variant}
            options={buttonVariants}
          />
        </div>

        <div className='ButtonsContainer'>
          <MakeStylesButton variant={variant} color='primary' />
          <UseThemeButton variant={variant} color='primary' />
          <StyledButton variant={variant} color='primary' />
          <WithStylesButton variant={variant} color='primary' />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
