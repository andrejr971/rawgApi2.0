import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  isColor: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 10px 0;
  width: 100%;
  z-index: 999999;

  transition: background-color 0.3s;
  background: ${props => (props.isColor ? 'rgba(0, 0, 0, 0.8)' : 'none')};

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  font-size: 25px;
  color: var(--color-active);
  text-decoration: none;
  font-weight: bold;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 500px) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      &.active {
        a,
        button {
          border-color: var(--color-active);
        }
      }

      a,
      button {
        font-weight: bold;
        padding: 10px;
        font-size: 17px;
        color: var(--color);
        text-decoration: none;
        border-bottom: 2px solid transparent;

        &:hover {
          border-color: var(--color-active);
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 0;
        border-bottom: 2px solid transparent;

        svg {
          font-size: 22px;
        }

        &:hover {
          border-color: var(--color-active);
        }
      }

      & + li {
        margin-left: 10px;
      }
    }
  }
`;

export const ToggleButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  color: var(--color-active);

  svg {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    display: flex;
  }
`;

export const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    width: 100%;
    max-width: 300px;
    height: 40px;
    margin-bottom: 4px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color);
    background: var(--color-dark);
    border-color: var(--color-active);

    input {
      font-size: 17px;
      flex: 1;
      color: var(--color);
      background: transparent;
      border: 0;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      border-bottom: 2px solid transparent;

      svg {
        font-size: 22px;
      }

      color: inherit;
    }
  }
`;
