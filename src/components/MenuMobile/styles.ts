import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: ${props => (props.isVisible ? 0 : '-120%')};
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background: var(--color-dark);

  transition: animation 0.2s;

  animation: ${appearFromTop} 1s;
  display: ${props => (props.isVisible ? 'initial' : 'none')};

  header {
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      color: var(--color-active);

      svg {
        font-size: 30px;
      }
    }
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 150px;

      li {
        width: 100%;
        text-align: center;

        & + li {
          margin-top: 20px;
        }

        a {
          width: 100%;
          height: 100%;
          padding: 10px;
          font-size: 20px;
          color: inherit;
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
  }
`;
