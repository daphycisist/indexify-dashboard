import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { CardInterface } from '../../../types';

const Card: FC<CardInterface> = ({ children, ...rest }) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  border: 1px solid ${COLORS['off-white']};
  border-radius: 5px;
  background-color: ${COLORS.white};
`;

export default Card;
