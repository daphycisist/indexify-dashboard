import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DPIconIndexifyLogo } from '../../assets/icons';
import { FONTSIZE, FONTWEIGHT } from '../../constants';
import Button from '../atoms/Button/Button';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/dashboard');
  };
  return (
    <NotFoundWrapper>
      <DPIconIndexifyLogo className="logo" />
      <NotFoundContent>
        <p className="error-code">404</p>
        <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
        <p>Either something went wrong or the page doesn't exist anymore.</p>
        <Button className="btn-home" onClick={handleGoHome}>
          Back to Home
        </Button>
      </NotFoundContent>
    </NotFoundWrapper>
  );
};

export default NotFound;

const NotFoundWrapper = styled.div`
  padding: 3rem 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .logo {
    display: inline-block;
    width: 100%;
    max-width: 95px;
  }
`;

const NotFoundContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${FONTSIZE['text-base']};
  font-weight: ${FONTWEIGHT['font-medium']};
  gap: 0.5rem;

  .error-code {
    font-size: 8rem;
    font-weight: ${FONTWEIGHT['font-bold']};
  }

  .btn-home {
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 2rem;
  }
`;
