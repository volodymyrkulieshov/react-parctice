import { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ children, hideModal }) => {
  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code === "Escape") {
        hideModal();
        console.log("Press");
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      console.log("UNMOUNT");
    };
  }, [hideModal]);

  // componentDidMount = () => {
  //   document.addEventListener("keydown", this.handleEsc);
  // };
  // componentWillUnmount = () => {
  //   document.removeEventListener("keydown", this.handleEsc);
  // };
  return (
    <div>
      <div className={css.modal}>
        <article className={css.modalContainer}>
          <header className={css.modalContainerHeader}>
            <h1 className={css.modalContainerTitle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                />
              </svg>
              Terms and Services
            </h1>
            <button className={css.iconButton} onClick={hideModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </button>
          </header>
          <section className={css.modalContainerBody}>
            <h2>
              Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam
              pollicetur.
            </h2>

            <p>{children}</p>
          </section>
          <footer className={css.modalContainerFooter}>
            <button className={css.buttonIsGhost}>Decline</button>
            <button className={css.buttonIsPrimary}>Accept</button>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Modal;
