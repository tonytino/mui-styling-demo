// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { createMuiTheme } from '@material-ui/core/styles';

// Interactive DefaultTheme Object: https://material-ui.com/customization/default-theme/
export const GoogleTheme = createMuiTheme();

/*
Creating Custom Themes: https://material-ui.com/customization/themes
ThemeProvider: https://material-ui.com/customization/themes/#theme-provider
Overrides: https://material-ui.com/customization/globals/
createMuiTheme: https://material-ui.com/customization/themes/#createmuitheme-options-theme
*/

const CustomTheme = createMuiTheme({
  colors: {
    rastaGradient: 'linear-gradient(to right, red, yellow, green)',
  },
  // Apply props to all instances of a component
  props: {
    // Name of the component to apply props to (you can't target variants)
    MuiButton: {
      disableRipple: true,
    },
  },
  button: {
    borderColor: 'red',
  },
  // Apply CSS to all instances of a component
  overrides: {
    // Name of the component to apply CSS to
    MuiButton: {
      // The base class for the component (will impact all variants)
      root: {
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
          color: 'yellow'
        },
      },
      // The variant-specific override styles for the component
      // e.g. <Button variant='contained' />
      text: {
        padding: GoogleTheme.spacing(2.5),
        background: GoogleTheme.palette.primary.main,
        '&:hover': {
          background: GoogleTheme.palette.primary.dark,
        },
      },
      contained: {
        // Name of the variation to target
        // The contained class stylesheet has a custom color defined
        // so you will not see `color: white` from root take effect
        // However, there is not a &:hover { color } style defined for contained
        // so, such defined in root will take effect for contained too
        background: 'red',
        '&:hover': {
          background: 'blue',
        },
      },
    },
  }
});

console.log('Google Theme', GoogleTheme);
console.log('Custom Theme', CustomTheme);

export default CustomTheme;
