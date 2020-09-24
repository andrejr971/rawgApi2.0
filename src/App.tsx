import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MenuMobile from './components/MenuMobile';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <BrowserRouter>
      <Header setIsVisible={setIsVisible} />
      <MenuMobile setIsVisible={setIsVisible} isVisible={isVisible} />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
