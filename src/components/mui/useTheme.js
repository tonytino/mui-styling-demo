import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
// eslint-disable-next-line
import { useTheme, withTheme } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/*
  useTheme
  - https://material-ui.com/styles/advanced/#accessing-the-theme-in-a-component
  - Access to props object for props-driven styles
  - Access to theme object for custom styles that depend on the theme object props
  - Customize nested elements
    - makeStyles/withStyles have a simpler solution for this
  - Overrides defined in the custom theme are still applied, if applicable
  - Can ONLY be used with functional components
    - Hook Approach:  useTheme()
    - HOC Approach:   withTheme()
  - useTheme is a wrapper for useContext
    https://github.com/mui-org/material-ui/blob/master/packages/material-ui-styles/src/useTheme/useTheme.js
*/

// Hook Approach: useTheme

function UseThemeButton(props) {
  const theme = useTheme();

  return (
    <Button
      {...props}
      css={css`
        &:hover {
          background-color: ${theme.colors.purple};
        }
      `}
    >
      useTheme
    </Button>
  );
}

export default React.memo(UseThemeButton);


// HOC Approach: withTheme

// function UseThemeButton(props) {
//   const { theme } = props;

//   return (
//     <Button
//       {...props}
//       css={css`
//         &:hover {
//           background-color: ${theme.colors.purple};
//         }
//       `}
//     >
//       useTheme
//     </Button>
//   );
// }

// export default withTheme(React.memo(UseThemeButton));
