import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import api from '../../services/api';

import { GamesProps } from '../Dashboard';

import {
  Container,
  Banner,
  BackgroundBanner,
  Main,
  Header,
  Content,
  About,
  Screenshots,
} from './styles';

interface ParamsProps {
  slug: string;
}

interface RatingsProps {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface PlatformsProps {
  platform: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  };
}

interface StoreProps {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  };
}

interface GenerecProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface ScreenshotsProps {
  id: number;
  image: string;
}

interface GameProps extends GamesProps {
  ratings: RatingsProps[];
  reddit_description: string;
  platforms: PlatformsProps[];
  stores: StoreProps[];
  genres: GenerecProps[];
  tags: GenerecProps[];
  screenshots: ScreenshotsProps[];
}

const Game: React.FC = () => {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [screenshots, setScreenshots] = useState<ScreenshotsProps[]>([]);
  const { slug } = useParams<ParamsProps>();

  const loadData = useCallback(async () => {
    const { data } = await api.get(`/games/${slug}`);

    setGame(data);

    const response = await api.get(`/games/${data.id}/screenshots`);
    const { results } = response.data;

    setScreenshots(results);
  }, [slug]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container>
      <Banner>
        <BackgroundBanner>
          <img src={game.background_image} alt={game.slug} />
        </BackgroundBanner>
      </Banner>

      <Main>
        <Header>
          <h1>{game.name}</h1>
          <span>{`#${game.rating_top} Top ${new Date().getFullYear()}`}</span>
        </Header>

        <Content>
          <Screenshots>
            {game.clip !== undefined ? (
              <div>
                <video src={game.clip.clip} autoPlay loop muted />
              </div>
            ) : (
              ''
            )}
            <div>
              {screenshots.map(screenshot => (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  alt={game.slug}
                />
              ))}
            </div>
          </Screenshots>
          <About>
            <h3>About</h3>
            {ReactHtmlParser(game.description)}
          </About>
        </Content>
      </Main>
    </Container>
  );
};

export default Game;
