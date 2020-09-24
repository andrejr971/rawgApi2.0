import React from 'react';

import { Container, Banner, Main, Card, Row } from './styles';

const LoadingDashboard: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div>
          <div>
            <Row className="title" />
            <Row className="rank" />
          </div>
          <Row />
          <Row />
          <Row />
          <Row className="button" />
        </div>
      </Banner>

      <Main>
        <article>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
          <Card>
            <section />
            <div>
              <Row className="title" />
            </div>
          </Card>
        </article>
      </Main>
    </Container>
  );
};

export default LoadingDashboard;
