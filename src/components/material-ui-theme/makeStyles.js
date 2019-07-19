import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { makeStyles } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  makeStyles
  - https://material-ui.com/styles/advanced/#makestyles
  - Access to props object for props-driven styles
  - Access to theme object for custom styles that depend on the theme object props
  - Customize nested elements
    - Generates class names to apply on the root and nested elements
  - Overrides defined in the custom theme are still applied, if applicable
  - Can ONLY be used with functional components (AND requires React Hooks)
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
