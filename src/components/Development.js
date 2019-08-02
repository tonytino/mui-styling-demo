import React from 'react';
import {
  Input
} from '@material-ui/core';
import './MuiDemo.css';

function MuiDemo() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Input
        type='number'
        step='0.01' // doesn't work
        value={value}
        onChange={evt => setValue(evt.target.value)}
        inputProps={{
          'step': '0.01' // works
        }}
      />
    </>
  );
}

export default MuiDemo;
