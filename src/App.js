import React, { useState } from 'react';
// https://material-ui.com/customization/themes/#theme-provider
import { ThemeProvider } from '@material-ui/styles';
// https://material-ui.com/components/css-baseline/#css-baseline
import { CssBaseline } from '@material-ui/core';
import './App.css';
import {
  ButtonConfigControl,
  CUSTOM_THEME,
  StyledButton,
  MakeStylesButton,
  UseThemeButton,
  WithStylesButton,
} from './components/mui';

function App() {
  const buttonVariants = ['text', 'outlined', 'contained'];
  const [variant, setVariant] = useState(buttonVariants[0]);

  const buttonColors = ['default', 'primary', 'secondary', 'inherit'];
  const [color, setColor] = useState(buttonColors[0]);

  return (
    <ThemeProvider theme={CUSTOM_THEME}>
      <CssBaseline />
      <div className='App'>
        <div className='ButtonConfigControlsContainer'>
          <ButtonConfigControl
            onClickHandler={setVariant}
            value={variant}
            options={buttonVariants}
          />
          <ButtonConfigControl
            onClickHandler={setColor}
            value={color}
            options={buttonColors}
          />
        </div>

        <div className='ButtonsContainer'>
          <MakeStylesButton variant={variant} color={color} />
          <UseThemeButton variant={variant} color={color} />
          <StyledButton variant={variant} color={color} />
          <WithStylesButton variant={variant} color={color} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
