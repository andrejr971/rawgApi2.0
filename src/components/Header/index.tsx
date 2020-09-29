import React, {
  useState,
  useCallback,
  useRef,
  ChangeEvent,
  useEffect,
} from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';

import {
  Container,
  LogoLink,
  Nav,
  Content,
  ToggleButton,
  Search,
} from './styles';

interface HeaderProps {
  setIsVisible(visible: boolean): void;
}

const Header: React.FC<HeaderProps> = ({ setIsVisible }) => {
  const [isColor, setIsColor] = useState(false);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setIsVisibleSearch(false);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll <= 50) {
      setIsColor(false);
    } else {
      setIsColor(true);
      setIsVisibleSearch(false);
    }
  });

  const history = useHistory();
  const { pathname, search } = useLocation();

  const handleSearch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const text = target.value;

      if (text.length === 0) {
        history.push('/');
      }

      setInputValue(text);

      history.push(`/search?q=${text}`);
    },
    [history],
  );

  const HandleActive = (active: boolean, to: string) => {
    const match = useRouteMatch({
      path: to,
      exact: active,
    });

    return match ? 'active' : '';
  };

  const handleVisibleSearch = useCallback(() => {
    if (isVisibleSearch && pathname === '/search') {
      setInputValue('');
      history.push('/');
    }

    setIsVisibleSearch(!isVisibleSearch);
  }, [isVisibleSearch, history, pathname]);

  useEffect(() => {
    if (search.split('=')[1] === '') {
      history.push('/');
    }
  }, [search, history]);

  return (
    <Container isColor={isColor}>
      <Content>
        <LogoLink to="/">RawgApi</LogoLink>

        {isVisibleSearch ? (
          <Search>
            <div>
              <input
                type="text"
                ref={inputRef}
                autoFocus
                defaultValue={inputValue}
                placeholder="Enter a game name"
                onChange={handleSearch}
              />
              <button type="button" onClick={handleVisibleSearch}>
                <FiX />
              </button>
            </div>
          </Search>
        ) : (
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
                <button type="button" onClick={handleVisibleSearch}>
                  <FiSearch />
                </button>
              </li>
            </ul>
          </Nav>
        )}

        <ToggleButton type="button" onClick={() => setIsVisible(true)}>
          <FiMenu />
        </ToggleButton>
      </Content>
    </Container>
  );
};

export default Header;
