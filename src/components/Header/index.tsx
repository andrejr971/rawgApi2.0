import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';

import { Container, LogoLink, Nav, Content, ToggleButton } from './styles';

interface HeaderProps {
  setIsVisible(visible: boolean): void;
}

const Header: React.FC<HeaderProps> = ({ setIsVisible }) => {
  const [isColor, setIsColor] = useState(false);

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll <= 50) {
      setIsColor(false);
    } else {
      setIsColor(true);
    }
  });

  const HandleActive = (active: boolean, to: string) => {
    const match = useRouteMatch({
      path: to,
      exact: active,
    });

    return match ? 'active' : '';
  };

  return (
    <Container isColor={isColor}>
      <Content>
        <LogoLink to="/">RawgApi</LogoLink>

        <Nav>
          <ul>
            <li className={HandleActive(true, '/')}>
              <Link to="/">Home</Link>
            </li>
            <li className={HandleActive(false, '/store')}>
              <Link to="/">Store</Link>
            </li>
            <li className={HandleActive(true, '/about')}>
              <Link to="/">About</Link>
            </li>
            <li className={HandleActive(false, '/search')}>
              <button type="button">
                <FiSearch />
              </button>
            </li>
          </ul>
        </Nav>

        <ToggleButton type="button" onClick={() => setIsVisible(true)}>
          <FiMenu />
        </ToggleButton>
      </Content>
    </Container>
  );
};

export default Header;
