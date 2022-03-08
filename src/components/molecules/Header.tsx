import React, { FC } from 'react';
import styled from 'styled-components';
import { DPIconIndexifyLogo } from '../../assets/icons';
import { COLORS } from '../../constants';
import Button from '../atoms/Button/Button';
import Input from '../atoms/Input/Input';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeftWrapper>
        <DPIconIndexifyLogo className="header__logo" />
        <Input
          className="header__search-input"
          placeholder="Search for a user"
        />
      </HeaderLeftWrapper>
      <Button className="logout-btn">Logout</Button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 7.4rem 2rem 2.3rem;
  border: 1px solid ${COLORS['grey-200']};

  .logout-btn {
    padding: 1rem 2.8rem;
  }
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;

  .header {
    &__logo {
      width: 9.5rem;
      height: 2.3rem;
    }

    &__search-input {
      width: 43.7rem;
    }
  }
`;
