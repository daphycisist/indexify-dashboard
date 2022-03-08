import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, FONTSIZE, FONTWEIGHT } from '../../../constants';
import { InputInterface } from '../../../types';

const Input: FC<InputInterface> = ({
  name,
  label,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBar
        type="text"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: ${FONTSIZE['text-xs']};
`;

const InputLabel = styled.label`
  margin-bottom: 4px;
  font-weight: ${FONTWEIGHT['font-normal']};
`;

const InputBar = styled.input`
  border: 1px solid ${COLORS['grey-100']};
  outline: none;
  padding: 1.3rem 2.1rem 1.1rem;
  border-radius: 5px;

  font-size: ${FONTSIZE['text-xsm']};
  color: ${COLORS['grey-300']};
  font-weight: ${FONTWEIGHT['font-normal']};

  &::placeholder {
    font-size: ${FONTSIZE['text-xsm']};
    color: ${COLORS['grey-300']};
    font-weight: ${FONTWEIGHT['font-normal']};
  }
`;

export default Input;
