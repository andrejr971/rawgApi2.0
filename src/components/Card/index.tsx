import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ImageContent, Description, List } from './styles';

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
  background_image: string;
  rating_top: number;
  released: Date;
  genres: GenresProps[];
  clip: {
    clip: string;
    preview: string;
  };
}

interface CardProps {
  game: GamesProps;
}

const Card: React.FC<CardProps> = ({ game }) => {
  return (
    <Container>
      <ImageContent>
        <img src={game.background_image} alt={game.slug} />
      </ImageContent>

      <Description>
        <Link to="/">{game.name}</Link>

        <List>
          <li>
            <strong>Released:</strong>
            <span>{game.released}</span>
          </li>
          <li>
            <strong>Genres:</strong>
            <div>
              {game.genres.map((genre, index) => (
                <Link to="/" key={genre.id}>
                  {genre.name}
                  {game.genres[index + 1] !== undefined ? ',' : ''}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <strong>Chart:</strong>
            <span>{`#${game.rating_top} Top ${new Date().getFullYear()}`}</span>
          </li>
        </List>
      </Description>
    </Container>
  );
};

export default Card;
