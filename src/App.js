import React, { useState } from 'react';
// https://material-ui.com/customization/themes/#theme-provider
import { ThemeProvider } from '@material-ui/styles';
// https://material-ui.com/components/css-baseline/#css-baseline
import { CssBaseline } from '@material-ui/core';
import './App.css';
import {
  MuiDemo,
  Development,
 } from './components';
import {
  ButtonConfigControl,
  CUSTOM_THEME,
} from './components/mui';

function App() {
  const APP_MODES = ['MuiDemo', 'Development'];
  const [appMode, setAppMode] = useState(APP_MODES[1]);

  return (
    <ThemeProvider theme={CUSTOM_THEME}>
      <CssBaseline />
      <div className='App'>
        <div className='ButtonConfigControlsContainer'>
          <ButtonConfigControl
            variant='contained'
            onClickHandler={setAppMode}
            value={appMode}
            options={APP_MODES}
          />
        </div>

        {appMode === APP_MODES[0]
          ? <MuiDemo />
          : <Development />
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
