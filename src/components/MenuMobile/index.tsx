import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface MenuMobileProps {
  setIsVisible(visible: boolean): void;
  isVisible: boolean;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isVisible, setIsVisible }) => {
  return (
    <Container isVisible={isVisible}>
      <header>
        <button type="button" onClick={() => setIsVisible(false)}>
          <FiX />
        </button>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Search</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default MenuMobile;
