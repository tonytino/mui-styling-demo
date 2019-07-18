import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { useTheme, withTheme } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/*
  useTheme
  - https://material-ui.com/styles/advanced/#accessing-the-theme-in-a-component
  - Use this when you need access to the theme object for custom styles that
    depend on the theme object properties
    - Ideal for one-off designs using theme properties
    - Overrides defined in the custom theme are still applied, if applicable
  - Can only be used with functional components
    - Hook Approach:  useTheme()
    - HOC Approach:   withTheme()
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
