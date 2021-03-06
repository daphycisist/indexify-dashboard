import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DPIconIndexifyLogo, DPIconLoadinRing } from '../../assets/icons';
import { FONTSIZE } from '../../constants';
import { useLoginMutation } from '../../features/api/companyApi';
import { setCredentials } from '../../features/company/companySlice';
import media from '../../utilities';
import { validateEmail } from '../../utilities/helpers';
import Button from '../atoms/Button/Button';
import Card from '../atoms/Card/Card';
import Input from '../atoms/Input/Input';

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const [login, { isError, error, isLoading }] = useLoginMutation();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedEmail = validateEmail(email);

      if (!validatedEmail) {
        toast.error('Please provide a valid email');
        return;
      }

      const result = await login({ email }).unwrap();

      if (result.token) {
        dispatch(setCredentials(result.token));
        navigate('/dashboard');
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (isError && error && 'data' in error) {
      const errorData = error.data as any;
      toast.error(errorData.validation.body.message);
    }
  }, [isError, error]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <LoginContainer className="">
      <LoginWrapper onSubmit={handleLogin}>
        <DPIconIndexifyLogo className="logo" />
        <Card className="login-card">
          <h1>Log In to your account</h1>
          <Input
            className="login-card__input"
            label="Email Address"
            onChange={handleChange}
          />
          <Button
            className="login-card__button"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <DPIconLoadinRing className="loader" />
            ) : (
              <span>Login</span>
            )}
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

const LoginWrapper = styled.form`
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
      .loader {
        width: 1.8rem;
        height: 1.8rem;
      }

      ${media.mobile`
        width: 29.8rem;
      `}
    }
  }
`;

export default Login;
