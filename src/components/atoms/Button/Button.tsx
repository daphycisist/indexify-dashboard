import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { ButtonInterface } from '../../../types';

const Button: FC<ButtonInterface> = ({ children, className, ...rest }) => {
  return (
    <ButtonWrapper className={className} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  padding-top: 1rem; 
  padding-bottom: 1rem; 
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.blue};
  color: ${COLORS.white}
`
