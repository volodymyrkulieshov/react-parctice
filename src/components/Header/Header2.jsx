import { PureComponent } from "react";
import css from "./Header2.module.css";
import { NavLink } from "react-router-dom";

class Header extends PureComponent {
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if (nextProps.showModal !== this.props.showModal) {
  //     return true;
  //   }
  //   return false;
  // };

  render() {
    // console.log("render header ");
    const { showModal } = this.props;
    return (
      <nav className={css.nav}>
        <div className={css.navContainer}>
          <span className={css.navText}>Header</span>
          <ul className={css.navList}>
            <li className={css.navLink}>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li className={css.navLink}>
              <NavLink to="/products" className={css.link}>
                Products
              </NavLink>
            </li>
            <li className={css.navLink}>
              <NavLink to="/todo" className={css.link}>
                Todo
              </NavLink>
            </li>
          </ul>
          <button className={css.button} onClick={showModal}>
            Modal
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
