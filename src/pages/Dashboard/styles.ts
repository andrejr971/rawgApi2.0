import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* position: relative; */
`;

export const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
`;

export const BackgroundBanner = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5),
      var(--background-color-secundary)
    );
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const ContentBanner = styled.div`
  position: absolute;
  bottom: 130px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 800px;
  padding: 10px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      font-size: 2.5rem;
    }

    span {
      color: var(--color-active);
    }
  }

  p {
    margin: 10px 0;
    text-align: justify;
    font-size: 1.2rem;
  }

  a {
    background: var(--color-active);
    color: var(--color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px;
`;

export const Content = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
  margin-bottom: 100px;
`;

export const Pagination = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    background: var(--color-dark);

    & + button {
      margin-left: 10px;
    }

    &.disabled {
      opacity: 0.6;
      pointer-events: none;
      cursor: no-drop;
    }

    svg {
      font-size: 20px;
      color: var(--color);
    }
  }
`;
