import { lazy } from "react";
import PropTypes from "prop-types";

const Button = lazy(() => import("src/components/Button"));
const Input = lazy(() => import("src/components/Input"));

import styles from "../index.module.sass";

const LoginModal = ({ onClose }) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    alert(
      JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    );
    onClose();
  };

  return (
    <>
      <div>
        <span onClick={onClose}>X</span>
      </div>
      <div>Login</div>
      <form className={styles.loginForm} onSubmit={_onSubmit}>
        <Input label="Email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Button label="Login" type="submit" />
      </form>
    </>
  );
};

LoginModal.propTypes = {
  onClose: PropTypes.func,
};

export default LoginModal;
