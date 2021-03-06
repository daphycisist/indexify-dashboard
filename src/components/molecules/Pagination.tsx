import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { DPIconCaretLeft, DPIconCaretRight } from '../../assets/icons';
import { COLORS, FONTSIZE, FONTWEIGHT } from '../../constants';
import { PaginationInterface } from '../../types';
import Button from '../atoms/Button/Button';

const Pagination: FC<PaginationInterface> = ({
  currentPage,
  totalPages,
  handlePageIncrement,
  handlePageDecrement,
}) => {
  return (
    <PaginationWrapper totalPages={totalPages}>
      <PaginationButtons
        disabled={currentPage === 0}
        onClick={handlePageDecrement}
      >
        <DPIconCaretLeft />
      </PaginationButtons>
      <PageTracker>
        <span className="active">{currentPage + 1}</span>{' '}
        <span>of {totalPages}</span>
      </PageTracker>
      <PaginationButtons
        disabled={currentPage + 1 === totalPages}
        onClick={handlePageIncrement}
      >
        <DPIconCaretRight />
      </PaginationButtons>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div<{ totalPages: number }>`
  display: flex;
  align-items: center;
  display: ${({totalPages}) => !totalPages && 'none'}
`;

const PaginationButtons = styled(Button)<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS['grey-200']};
      cursor: not-allowed;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;

  svg {
    width: 0.712rem;
    height: 1.2rem;
  }

  *::selection {
    background-color: transparent;
  }

  *::-moz-selection {
    background-color: transparent;
  }
  * {
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const PageTracker = styled.div`
  width: 7.2rem;
  text-align: center;
  color: ${COLORS['grey-300']};
  font-size: ${FONTSIZE['text-sm']};
  line-height: 18px;
  font-weight: ${FONTWEIGHT['font-normal']};

  .active {
    font-weight: ${FONTWEIGHT['font-bold']};
    color: ${COLORS.black};
  }
`;
