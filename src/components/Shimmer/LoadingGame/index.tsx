import React from 'react';

import { Container, Banner, Row } from './styles';

const LoadingGame: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div>
          <div>
            <Row className="title" />
            <Row className="rank" />
          </div>
          <div className="column-two">
            <div className="column">
              <Row className="image" />
              <Row className="image" />
              <Row className="image" />
              <Row className="image" />
              <Row className="image" />
              <Row className="image" />
            </div>
            <div className="column-about">
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row className="last" />
            </div>
          </div>
        </div>
      </Banner>
    </Container>
  );
};

export default LoadingGame;
