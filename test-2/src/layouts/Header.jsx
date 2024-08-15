import { useState, lazy, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Button = lazy(() => import("src/components/Button"));

const LoginModal = lazy(() => import("./components/LoginModal"));
import styles from "./index.module.sass";

const MENUS = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Pricing",
    path: "#pricing",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

function disableScroll() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
  const scrollTop = window.scrollX || document.documentElement.scrollTop;
  const scrollLeft = window.scrollY || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "auto";
  }
  window.onscroll = function () {};
}

const HeaderLayout = () => {
  const dialogRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 640 });

  const [toggle, setToggle] = useState(false);

  const _onToggle = () =>
    setToggle((prevState) => {
      if (prevState) {
        enableScroll();
      } else {
        disableScroll();
      }
      return !prevState;
    });

  const _onShowModal = () => {
    dialogRef.current.showModal();
  };

  return (
    <>
      <header className={styles.container}>
        <div className={`container ${styles.innerContainer}`}>
          {/* TODO: Icon */}
          <nav>
            <a href="/">Home</a>
          </nav>

          {isTabletOrMobile ? (
            // https://uiverse.io/ArturCodeCraft/selfish-fish-82
            <div className={styles.mobileMenu} onClick={_onToggle}>
              <button
                className={styles.menuIcon}
                aria-label="menu-mobile"
                {...(toggle ? { "data-active": true } : {})}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          ) : (
            <div className={styles.menuContainer}>
              {MENUS.map((item) => (
                <a key={item.path} href={item.path}>
                  <nav>{item.name}</nav>
                </a>
              ))}
              <Button label="Login" onClick={_onShowModal} />
            </div>
          )}
        </div>
      </header>
      {isTabletOrMobile ? (
        <div
          className={styles.menuMobileContainer}
          {...(toggle ? { "data-active": true } : {})}
        >
          {MENUS.map((item) => (
            <a key={item.path} href={item.path}>
              <nav>{item.name}</nav>
            </a>
          ))}
          <Button label="Login" onClick={_onShowModal} />
        </div>
      ) : null}
      <dialog ref={dialogRef} className={styles.dialogContainer}>
        <LoginModal />
      </dialog>
    </>
  );
};

export default HeaderLayout;
