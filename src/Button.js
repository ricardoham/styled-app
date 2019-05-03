import React from 'react';
import StyledButton from './StyledButton';

const Button = props => (
  <StyledButton
    color={props.color}
    btnType={props.btnType}
  >
    {props.children}
  </StyledButton>
);

export default Button;
