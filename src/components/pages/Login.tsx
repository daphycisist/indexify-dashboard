import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AxiosRequest from '../../api/Axios';
import { DPIconIndexifyLogo } from '../../assets/icons';
import { FONTSIZE } from '../../constants';
import media from '../../utilities';
import Button from '../atoms/Button/Button';
import Card from '../atoms/Card/Card';
import Input from '../atoms/Input/Input';

const Login: FC = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    if (!email) return;
    const data = await AxiosRequest.post('/auth/login', {
      email,
    });

    const token = data.data.token;

    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard');
    }
    return data.data;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <LoginContainer className="">
      <LoginWrapper>
        <DPIconIndexifyLogo className="logo" />
        <Card className="login-card">
          <h1>Log In to your account</h1>
          <Input
            className="login-card__input"
            label="Email Address"
            onChange={handleChange}
          />
          <Button className="login-card__button" onClick={handleLogin}>
            Login
          </Button>
        </Card>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 12.3rem;
`;

const LoginWrapper = styled.div`
  margin: auto;
  width: fit-content;
  text-align: center;

  .logo {
    margin-bottom: 4rem;
    width: 11.9rem;
    height: 2.9rem;
  }

  .login-card {
    padding: 3.6rem 4.8rem 5.3rem;
    h1 {
      font-size: ${FONTSIZE['text-lg']};
      margin-bottom: 4rem;
    }

    &__input {
      margin-bottom: 4rem;
      width: 100%;

      ${media.mobile`
        width: 29.7rem;
      `}
    }

    &__button {
      width: 100%;

      ${media.mobile`
        width: 29.8rem;
      `}
    }
  }
`;

export default Login;
