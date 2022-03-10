import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DPIconClose } from '../../assets/icons';
import { COLORS } from '../../constants';
import { ModalInterface } from '../../types';
import Button from '../atoms/Button/Button';

export const Modal: FC<ModalInterface> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  children,
}) => {
  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper>
        <StyledModal>
          <CloseButton onClick={hide}>
            <DPIconClose />
          </CloseButton>
          <Content>{modalContent ?? children}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 7.9rem;
  z-index: 700;
  /* width: inherit; */
  width: 49.2rem;
  outline: 0;
  transform: translateX(-50%);
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 17, 41, 0.5);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 5px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: -32px;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  /* padding: 10px; */
  /* max-height: 30rem; */
  overflow-x: hidden;
  overflow-y: auto;
`;
