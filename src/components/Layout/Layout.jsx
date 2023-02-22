import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

function Layout() {
  return (
    <>
      <header className={css.section}>
        <nav className={css.layout}>
          <NavLink className={css.layoutLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.layoutLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main className={css.section}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
