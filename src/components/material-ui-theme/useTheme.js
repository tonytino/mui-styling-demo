import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { useTheme } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  useTheme
  - https://material-ui.com/styles/advanced/#accessing-the-theme-in-a-component
  - Can only be used with functional components (and requires React Hooks)
*/

function UseThemeButton(props) {
  const classes = useTheme();

  return (
    <Button {...props} className={classes.button}>
      useTheme
    </Button>
  );
}

export default UseThemeButton;
