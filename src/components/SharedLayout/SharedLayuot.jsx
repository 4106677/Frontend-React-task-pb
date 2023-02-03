import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Converter</NavLink>
        <NavLink to="/rates">Rates</NavLink>
      </nav>

      <Outlet />
    </>
  );
};
