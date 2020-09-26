import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import api from '../../services/api';

import { GamesProps } from '../Dashboard';

import { Container, Content } from './styles';

const Search: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();

  const [games, setGames] = useState<
    Omit<GamesProps, 'description_raw' | 'description'>[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      history.push('/');
    }
  }, [history, search]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const q = search.split('=')[1].replace(' ', '%20').toLowerCase();

      const { data } = await api.get(`games?search=${q}`);

      setGames(data.results);

      setLoading(false);
    }

    loadData();
  }, [search]);

  return (
    <Container>
      {loading ? (
        ''
      ) : (
        <main>
          <Content>
            {games.map(game => (
              <Card key={game.id} game={game} />
            ))}
          </Content>
        </main>
      )}
    </Container>
  );
};

export default Search;
