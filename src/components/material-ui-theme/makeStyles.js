import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { makeStyles } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  makeStyles
  - https://material-ui.com/styles/advanced/#makestyles
  - Use this when you need access to the theme or props objects
    - You can define advanced configurations (e.g. numerous classes can be
      defined in makeStyles and used on the root and nested elements)
  - Use this when you need numerous one-off class names to apply on the root
    and nested elements
  - Overrides defined in the custom theme are still applied, if applicable
  - Can only be used with functional components (and requires React Hooks)
*/

const useStyles = makeStyles(theme => ({
  myButton: {
    color: props => (
      props.variant === 'contained' ? null : theme.colors.orange
    ),
  },
  mySpan: theme.typography.subtitle1
}));

function MakeStylesButton(props) {
  // useStyles accepts props, which enables prop-driven customizations
  const classes = useStyles(props);
  return (
    <Button {...props} className={classes.myButton}>
      <span className={classes.mySpan}>
        makeStyles
      </span>
    </Button>
  );
};

export default React.memo(MakeStylesButton);
