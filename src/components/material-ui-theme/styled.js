import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
import { styled } from '@material-ui/styles';
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';

/*
  styled
  - https://material-ui.com/styles/basics/#styled-components-api
  - Can be utilized by either a functional or class component
  - Uncomment the component below to see this example using a class component
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

// TODOAH CAN YOU ACCESS THE THEME HERE SO WE CAN USE A THEME COLOR FOR BACKGROUND?
const ButtonStyled = styled(Button)({
  color: 'blue',
});

export default StyledButton;
