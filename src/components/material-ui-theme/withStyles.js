import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { withStyles } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  withStyles
  - https://material-ui.com/styles/basics/#higher-order-component-api
  - Can be utilized by either a functional or class component
  - Uncomment the component below to see this example using a class component
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
    <Button {...props} className={classes.root}>
      withStyles
    </Button>
  );
}

const styles = {
  root: {
    color: 'purple',
  },
};

export default withStyles(styles)(WithStylesButton);
