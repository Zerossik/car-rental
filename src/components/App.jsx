import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/Home';
import { lazy, useEffect, useRef, useState } from 'react';

const Catalog = lazy(() => import('../pages/Catalog'));

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const favRef = useRef(favorites);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('favorites'));
    if (result) setFavorites(result);
  }, []);

  useEffect(() => {
    if (favorites !== favRef.current) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorites = newFavorit => {
    setFavorites(prevFaf => [...prevFaf, newFavorit]);
  };

  const dellFavorit = favoritId => {
    setFavorites(favorites.filter(({ id }) => id !== favoritId));
    return;
  };
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="catalog"
          element={
            <Catalog addFavorit={addFavorites} dellFavorit={dellFavorit} />
          }
        />
        <Route path="favorites" element={<div>Favorites</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
