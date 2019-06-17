import React from 'react';
// https://material-ui.com/customization/default-theme/#material-ui-core-styles-vs-material-ui-styles
// https://material-ui.com/components/buttons/
import Button from '@material-ui/core/Button';
// https://material-ui.com/components/buttons/#grouped-buttons
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ButtonVariantControl(props) {
  const {
    value,
    onClickHandler,
    options,
  } = props;
  return (
    <ButtonGroup>
      {
        options.map(option => {
          return (
            <Button
              key={option}
              variant={option === value ? 'contained' : 'text'}
              onClick={() => onClickHandler(option)}
            >
              {option === value ? <b>{option}</b> : option}
            </Button>
          );
        })
      }
    </ButtonGroup>
  );
};

export default React.memo(ButtonVariantControl);
