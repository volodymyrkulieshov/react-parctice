import css from "./Header.module.css";

const Header = ({ showModal }) => {
  return (
    <nav className={css.nav}>
      <div className={css.navContainer}>
        <span className={css.navText}>Navbar</span>
        <button className={css.button} onClick={showModal}>
          Modal
        </button>
      </div>
    </nav>
  );
};
export default Header;
