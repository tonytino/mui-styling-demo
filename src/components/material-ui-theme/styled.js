import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { styled } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  styled
  - https://material-ui.com/styles/basics/#styled-components-api
  - Access to props object (if styling solution supports it) for props-driven styles
  - No access to theme object (though, you can import it...)
  - Customize nested elements (if styling solution supports it)
    - makeStyles/withStyles have a simpler solution for this
  - Ideal for leaning heavily into a styling solution
  - You can use numerous styling solutions (e.g Emotion!)
    https://material-ui.com/guides/interoperability/
  - Overrides defined in the custom theme are still applied, if applicable
  - Can be used by either a functional or class component
*/

// class StyledButton extends React.PureComponent {
//   render () {
//     return (
//       <ButtonStyled {...this.props}>
//         styled
//       </ButtonStyled>
//     );
//   }
// }

function StyledButton(props) {
  return (
    <ButtonStyled {...props}>
      styled
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)(props => ({
  '& .MuiButton-label': props => (props.variant === 'contained' ? {} : {
    background: '-webkit-linear-gradient(teal, aqua)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  })
}));

export default StyledButton;
