import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/Home';
import { lazy } from 'react';

const Catalog = lazy(() => import('../pages/Catalog'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<div>Favorites</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
