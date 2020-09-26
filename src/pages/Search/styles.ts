import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 120px auto 20px;
  padding: 10px;
`;

export const Content = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
  margin-bottom: 100px;
`;
