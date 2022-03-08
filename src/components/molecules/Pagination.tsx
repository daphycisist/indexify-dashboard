import React, { FC } from 'react';
import styled from 'styled-components';
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
    <PaginationWrapper>
      <PaginationButtons
        disabled={currentPage === 1}
        onClick={handlePageDecrement}
      >
        <DPIconCaretLeft />
        {/* <img src={CaretLeft} alt="Caret Left" /> */}
      </PaginationButtons>
      <PageTracker>
        <span className="active">{currentPage}</span>{' '}
        <span>of {totalPages}</span>
      </PageTracker>
      <PaginationButtons
        disabled={currentPage === totalPages}
        onClick={handlePageIncrement}
      >
        <DPIconCaretRight />
        {/* <img src={CaretRight} alt="Caret Right" /> */}
      </PaginationButtons>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButtons = styled(Button)<{ disabled: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? `${COLORS['grey-200']}` : `${COLORS.blue}`};
  padding: 0.7rem 1.036rem 0.7rem 0.852rem;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;

  /* :first-of-type {
    margin-right: 1.8rem;
  }

  :last-of-type {
    margin-left: 1.7rem;
  } */

  ::selection {
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
  color: ${COLORS['grey-300']};
  font-size: ${FONTSIZE['text-sm']};
  font-weight: ${FONTWEIGHT['font-bold']};
  line-height: 18px;
  .active {
    color: ${COLORS.black};
  }
`;
