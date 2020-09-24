import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  background: var(--color-dark);
  position: relative;

  transition: all 0.3s;

  &:hover {
    border-radius: 10px 10px 0 0;
    transform: translateY(-100px);

    ul {
      display: initial;
    }
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 10px;

  > a {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  margin-top: 10px;
  list-style: none;
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: -106px;
  background: var(--color-dark);
  border-radius: 0 0 10px 10px;
  padding: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 10px 0 0;

    strong {
      font-weight: normal;
      opacity: 0.8;
    }

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;

      a {
        text-decoration: none;
        color: inherit;

        &:hover {
          opacity: 0.6;
        }

        & + a {
          margin-left: 5px;
        }
      }
    }

    & + li {
      border-top: 1px solid var(--color-secundary);
    }
  }
`;
