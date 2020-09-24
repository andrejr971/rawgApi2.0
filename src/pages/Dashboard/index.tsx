import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import Card from '../../components/Card';

import {
  Container,
  Banner,
  BackgroundBanner,
  ContentBanner,
  Main,
  Content,
  Pagination,
} from './styles';
import LoadingDashboard from '../../components/Shimmer/LoadingDashboard';

interface GenresProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GamesProps {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  description: React.ReactNode;
  background_image: string;
  rating_top: number;
  released: Date;
  genres: GenresProps[];
  clip: {
    clip: string;
    preview: string;
  };
}

const Dashboard: React.FC = () => {
  const [games, setGames] = useState<
    Omit<GamesProps, 'description_raw' | 'description'>[]
  >([]);
  const [spotlightGame, setSpotlightGame] = useState<GamesProps>(
    {} as GamesProps,
  );

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const loadPage = useCallback(() => {
    setLoading(true);

    api
      .get('games', {
        params: { page },
      })
      .then(({ data }) => {
        setGames(data.results);

        const index = Math.floor(Math.random() * data.results.length);

        const { id } = data.results[index];

        api.get(`games/${id}`).then(response => {
          setSpotlightGame(response.data);
          setLoading(false);
        });
      });
  }, [page]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  const handlePreviusPage = useCallback(() => {
    if (page === 1) return;

    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return (
    <Container>
      {loading ? (
        <LoadingDashboard />
      ) : (
        <>
          <Banner>
            <BackgroundBanner>
              <img
                src={spotlightGame.background_image}
                alt={spotlightGame.slug}
              />
            </BackgroundBanner>

            <ContentBanner>
              <div>
                <h2>{spotlightGame.name}</h2>
                <span>
                  {`#${
                    spotlightGame.rating_top
                  } Top ${new Date().getFullYear()}`}
                </span>
              </div>
              <p>{`${spotlightGame.description_raw?.substr(0, 150)} ...`}</p>
              <Link to="/">See more</Link>
            </ContentBanner>
          </Banner>

          <Main>
            <Content>
              {games.map(game => (
                <Card key={game.id} game={game} />
              ))}
            </Content>

            <Pagination>
              <button
                type="button"
                className={page === 1 ? 'disabled' : ''}
                onClick={handlePreviusPage}
              >
                <FiChevronLeft />
              </button>
              <button type="button" onClick={handleNextPage}>
                <FiChevronRight />
              </button>
            </Pagination>
          </Main>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
