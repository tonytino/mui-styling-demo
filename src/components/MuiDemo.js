import React, { useState } from 'react';
import {
  ButtonConfigControl,
  StyledButton,
  MakeStylesButton,
  UseThemeButton,
  WithStylesButton,
} from './mui';
import './MuiDemo.css';

function MuiDemo() {
  const buttonVariants = ['text', 'outlined', 'contained'];
  const [variant, setVariant] = useState(buttonVariants[0]);

  const buttonColors = ['default', 'primary', 'secondary', 'inherit'];
  const [color, setColor] = useState(buttonColors[0]);

  return (
    <>
      <div className='ButtonConfigControlsContainer'>
        <ButtonConfigControl
          color='primary'
          variant='outlined'
          onClickHandler={setVariant}
          value={variant}
          options={buttonVariants}
        />
        <ButtonConfigControl
          color='primary'
          variant='outlined'
          onClickHandler={setColor}
          value={color}
          options={buttonColors}
        />
      </div>

      <div className='ButtonsContainer'>
        <MakeStylesButton variant={variant} color={color} />
        <UseThemeButton variant={variant} color={color} />
        <StyledButton variant={variant} color={color} />
        <WithStylesButton variant={variant} color={color} />
      </div>
    </>
  );
}

export default MuiDemo;
