import css from "./Header.module.css";

const Header = () => {
  return (
    <nav className={css.nav}>
      <div className={css.navContainer}>
        <span className={css.navText}>Navbar</span>
        <button className={css.button}>Modal</button>
      </div>
    </nav>
  );
};
export default Header;
