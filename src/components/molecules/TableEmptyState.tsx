import React from 'react';
import styled from 'styled-components';
import { DPIconEmptyState } from '../../assets/icons';

const TableEmptyState = () => {
  return (
    <TableEmptyStateWrapper>
      <DPIconEmptyState />
    </TableEmptyStateWrapper>
  );
};

export default TableEmptyState;

const TableEmptyStateWrapper = styled.div`
  width: 100%;
  height: 100%;

  svg {
    width: 20rem;
  }
`;
