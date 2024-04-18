import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.active}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.active}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
