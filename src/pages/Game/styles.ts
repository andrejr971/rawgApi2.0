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

    h1 {
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
  position: relative;
  z-index: 850;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: -400px;
  padding: 10px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: var(--color-active);
  }
`;

export const Content = styled.article`
  width: 100%;
  margin-top: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const About = styled.div`
  color: inherit;

  p {
    font-size: 17px;
    line-height: 25px;
    text-align: justify;
  }

  h3 {
    font-size: 24px;
    margin: 10px 0 0;
    border-bottom: 1px solid var(--color-secundary);
  }
`;

export const Screenshots = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;

    video {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;

    img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;

export const Ratings = styled.div``;

export const Tags = styled.div``;

export const Genres = styled.div``;

export const Website = styled.div``;
