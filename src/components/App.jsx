import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayuot';

const Converter = lazy(() => import('pages/converter/Converter'));
const Rates = lazy(() => import('pages/rates/Rates'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Converter />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
