import styled from 'styled-components';
import Skeleton from '../Skeleton';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  background: var(--color-dark);
  position: relative;

  > div {
    width: 100%;
    max-width: 800px;
    height: 150px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 130px;
    padding: 10px;
    /* background: #7159c1; */

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
  }
`;

export const Row = styled(Skeleton)`
  display: flex;
  width: 100%;
  height: 12px;
  align-items: center;

  & + div {
    margin-top: 5px;
  }

  &:last-child {
    width: 50%;
  }

  &.title {
    width: 250px;
    height: 25px;
  }

  &.rank {
    width: 100px;
  }

  &.button {
    width: 150px;
    height: 35px;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px;

  article {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 10px;
    margin-bottom: 100px;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: var(--color-secundary);
  border-radius: 10px;

  section {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    background: var(--color-dark);
  }

  > div {
    padding: 10px;
  }
`;
