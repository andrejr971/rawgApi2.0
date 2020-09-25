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
`;

export const Video = styled.div`
  width: 100%;
  display: flex;

  video {
    width: 100%;
    max-width: 350px;
    height: 100%;
    margin: 0 auto;
    border-radius: 10px;
  }
`;

export const ImagesScreenshots = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const Ratings = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  h3 {
    font-size: 20px;
  }

  > div {
    margin-top: 10px;
  }
`;

export const RatingProgress = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
`;

export const RatingMain = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + div {
      margin-left: 20px;
      padding-left: 10px;
      border-left: 1px solid var(--color-secundary);
    }

    strong {
      font-size: 25px;
    }

    span {
      text-transform: uppercase;
      opacity: 0.6;
    }
  }
`;

interface RatingProps {
  width: number;
}

export const Rating = styled.div<RatingProps>`
  width: ${props => props.width}%;
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    height: 40px;
    display: flex;

    &:hover {
      box-shadow: 1px 2px 8px rgba(255, 255, 255, 0.3);
    }
  }

  &:nth-child(1) {
    span {
      border-radius: 5px 0 0 5px;
      background: #59a52b;
    }
  }

  &:nth-child(2) {
    span {
      background: #4e6cd1;
    }
  }

  &:nth-child(3) {
    span {
      background: #f73442;
    }
  }

  &:nth-child(4) {
    span {
      border-radius: 0 5px 5px 0;
      background: #f89c3b;
    }
  }
`;

export const RatingLabels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  strong {
    display: flex;
    align-items: center;
    font-size: 17px;

    &:nth-child(1) {
      div {
        background: #59a52b;
      }
    }

    &:nth-child(2) {
      div {
        background: #4e6cd1;
      }
    }

    &:nth-child(3) {
      div {
        background: #f73442;
      }
    }

    &:nth-child(4) {
      div {
        background: #f89c3b;
      }
    }

    div {
      width: 10px;
      height: 10px;
      display: block;
      border-radius: 50px;
      margin-right: 10px;
    }

    span {
      margin-left: 10px;
      opacity: 0.6;
      font-weight: normal;
    }
  }
`;

export const Additions = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10px;

  h6 {
    font-weight: normal;
    font-size: 17px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  a {
    color: inherit;
    font-size: 15px;

    &:hover {
      opacity: 0.6;
    }

    & + a {
      margin-left: 5px;
    }
  }
`;

export const AdditionsGroups = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RowsAdditions = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
