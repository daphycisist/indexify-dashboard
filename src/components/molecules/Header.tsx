import React, { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DPIconIndexifyLogo } from '../../assets/icons';
import { COLORS, FONTWEIGHT } from '../../constants';
import { logout } from '../../features/company/companySlice';
import { persistor } from '../../store';
import media from '../../utilities';
import Button from '../atoms/Button/Button';
import Input from '../atoms/Input/Input';

const Header: FC<{
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}> = ({ handleSearch, searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge().then(() => {
        navigate('/');
      });
    });
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="logo-container">
          <DPIconIndexifyLogo className="logo" />
          <Button
            className="logout-btn logout-btn__hidden"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <HeaderRightWrapper>
          <Input
            className="header__search-input"
            placeholder="Search for a user"
            onChange={handleSearch}
            value={searchValue}
          />
          <Button className="logout-btn logout-desktop" onClick={handleLogout}>
            Logout
          </Button>
        </HeaderRightWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default memo(Header);

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
