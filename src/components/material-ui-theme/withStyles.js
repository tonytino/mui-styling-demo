import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { withStyles } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  withStyles
  - https://material-ui.com/styles/advanced/#withstyles
    - https://material-ui.com/styles/basics/#higher-order-component-api
  - No access to prop object
  - Access to theme object for custom styles that depend on the theme object props
  - Customize nested elements
    - Generates class names to apply on the root and nested elements
  - Overrides defined in the custom theme are still applied, if applicable
  - Can be utilized by either a functional or class component
*/

// class WithStylesButton extends React.PureComponent {
//   render () {
//     const { classes } = this.props;
//     return (
//       <Button {...this.props} className={classes.root}>
//         withStyles
//       </Button>
//     );
//   }
// }

function WithStylesButton(props) {
  const { classes } = props;
  return (
    <Button {...props} className={classes.myButton}>
      <span className={classes.mySpan}>
        withStyles
      </span>
    </Button>
  );
}

const styles = theme => ({
  myButton: {
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
  },
  mySpan: theme.typography.subtitle1,
});

export default withStyles(styles, { withTheme: true })(WithStylesButton);
