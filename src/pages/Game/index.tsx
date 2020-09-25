import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  Video,
  ImagesScreenshots,
  Ratings,
  Rating,
  RatingLabels,
  RatingProgress,
  RatingMain,
  Additions,
  AdditionsGroups,
  RowsAdditions,
} from './styles';
import LoadingGame from '../../components/Shimmer/LoadingGame';

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
  reviews_count: number;
  platforms: PlatformsProps[];
  stores: StoreProps[];
  genres: GenerecProps[];
  tags: GenerecProps[];
  screenshots: ScreenshotsProps[];
}

const Game: React.FC = () => {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [screenshots, setScreenshots] = useState<ScreenshotsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams<ParamsProps>();

  const loadData = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`/games/${slug}`);

    setGame(data);

    const response = await api.get(`/games/${data.id}/screenshots`);
    const { results } = response.data;

    setScreenshots(results);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, [loadData]);

  return (
    <Container>
      {loading ? (
        <LoadingGame />
      ) : (
        <>
          <Banner>
            <BackgroundBanner>
              <img src={game.background_image} alt={game.slug} />
            </BackgroundBanner>
          </Banner>

          <Main>
            <Header>
              <h1>{game.name}</h1>
              <span>
                {`#${game.rating_top} Top ${new Date().getFullYear()}`}
              </span>
            </Header>

            <Content>
              <Screenshots>
                {game.clip !== null ? (
                  <Video>
                    <video src={game.clip.clip} autoPlay controls loop muted />
                  </Video>
                ) : (
                  ''
                )}
                <ImagesScreenshots>
                  {screenshots.map(screenshot => (
                    <img
                      key={screenshot.id}
                      src={screenshot.image}
                      alt={game.slug}
                    />
                  ))}
                </ImagesScreenshots>
              </Screenshots>

              <About>
                <h3>About</h3>
                {ReactHtmlParser(game.description)}
              </About>
            </Content>

            <Ratings>
              <RatingMain>
                <div>
                  <strong>
                    {`${game.ratings[0].title
                      .charAt(0)
                      .toUpperCase()}${game.ratings[0].title.slice(1)}`}
                  </strong>
                  <span>{`Ratings ${game.reviews_count}`}</span>
                </div>
                <div>
                  <strong>{`#${game.rating_top}`}</strong>
                  <span>{`Top ${new Date().getFullYear()}`}</span>
                </div>
              </RatingMain>
              <div>
                <RatingProgress>
                  {game.ratings.map(rating => (
                    <Rating key={rating.id} width={rating.percent}>
                      <span />
                    </Rating>
                  ))}
                </RatingProgress>

                <RatingLabels>
                  {game.ratings.map(rating => (
                    <strong key={rating.id}>
                      <div />

                      {`${rating.title
                        .charAt(0)
                        .toUpperCase()}${rating.title.slice(1)}`}
                      <span>{rating.count}</span>
                    </strong>
                  ))}
                </RatingLabels>
              </div>
            </Ratings>

            <Additions>
              <AdditionsGroups>
                <div>
                  <h6>Plataforms</h6>
                  <div>
                    {game.platforms.map(({ platform }, index) => (
                      <Link to="/" key={platform.id}>
                        {platform.name}
                        {game.platforms[index + 1] !== undefined ? ',' : ''}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h6>Genre</h6>
                  <div>
                    {game.genres.map((genre, index) => (
                      <Link to="/" key={genre.id}>
                        {genre.name}
                        {game.genres[index + 1] !== undefined ? ',' : ''}
                      </Link>
                    ))}
                  </div>
                </div>
              </AdditionsGroups>
              <RowsAdditions>
                <h6>Tags</h6>
                <div>
                  {game.tags.map((tag, index) => (
                    <Link to="/" key={tag.id}>
                      {tag.name}
                      {game.tags[index + 1] !== undefined ? ', ' : ''}
                    </Link>
                  ))}
                </div>
              </RowsAdditions>
            </Additions>
          </Main>
        </>
      )}
    </Container>
  );
};

export default Game;
