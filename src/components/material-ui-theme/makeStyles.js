import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { makeStyles } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  makeStyles
  - https://material-ui.com/styles/advanced/#makestyles
  - Can only be used with functional components (and requires React Hooks)
*/

const useStyles = makeStyles(theme => ({
  button: {
    background: theme.colors.rastaGradient,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    color: 'black',
  },
}));

function MakeStylesButton(props) {
  const classes = useStyles();

  return (
    <Button {...props} className={classes.button}>
      makeStyles
    </Button>
  );
};

export default MakeStylesButton;
