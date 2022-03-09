import React, { FC } from 'react';
import styled from 'styled-components';
import { DPIconIndexifyLogo } from '../../assets/icons';
import { COLORS, FONTWEIGHT } from '../../constants';
import { persistor } from '../../store';
import media from '../../utilities';
import Button from '../atoms/Button/Button';
import Input from '../atoms/Input/Input';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="logo-container">
          <DPIconIndexifyLogo className="logo" />
          <Button className="logout-btn logout-btn__hidden">Logout</Button>
        </div>
        <HeaderRightWrapper>
          <Input
            className="header__search-input"
            placeholder="Search for a user"
          />
          <Button
            className="logout-btn logout-desktop"
            onClick={() => {
              persistor.purge();
            }}
          >
            Logout
          </Button>
        </HeaderRightWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${COLORS['grey-200']};

  .logout-btn {
    padding: 1rem 2.8rem;
    font-weight: ${FONTWEIGHT['font-bold']};
    align-self: end;

    ${media.tablet`
     align-self: center;
      &__hidden {
      display: none;
    }
  `}
  }

  .logo-container {
    min-width: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tablet`
    margin-right: 4.2rem;
      align-items: center;

    `}
  }

  .logo {
    width: 100%;
    max-width: 95px;
    height: 23px;
  }
`;

const HeaderWrapper = styled.div`
  max-width: 128rem;
  width: 100%;
  margin: 0 auto;
  /* display: flex; */
  //4.9
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2.4rem 2rem 2.3rem;
  flex-wrap: wrap;

  .logout-desktop {
    display: none;
  }

  ${media.tablet`
    align-items: center;
    padding-right: 7.4rem;
    flex-direction: row;
    gap: initial;
    .logout-desktop {
      display: flex;
    }
  `}
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  justify-content: space-between;

  ${media.tablet`
    align-items: center;
    flex-direction: row;
  `}

  .header {
    &__search-input {
      width: 100%;
      justify-self: start;
      flex: 1;

      ${media.tablet`
        width: 43.7rem;      
      `}
    }
  }
`;
