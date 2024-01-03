import { PureComponent } from "react";
import css from "./Header.module.css";

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
          <button className={css.button} onClick={showModal}>
            Modal
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
