import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

function Layout() {
  return (
    <>
      <header>
        <nav className={css.layout}>
          <NavLink className={css.layoutLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.layoutLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
