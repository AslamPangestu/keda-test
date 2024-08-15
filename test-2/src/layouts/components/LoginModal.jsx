import { useState, lazy, useRef } from "react";

const Button = lazy(() => import("src/components/Button"));
const Input = lazy(() => import("src/components/Input"));

import styles from "../index.module.sass";

const LoginModal = ({ onClose }) => {
  return (
    <>
      <div>Login</div>
      <form className={styles.loginForm}>
        <Input label="Email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Button label="Login" type="submit" />
      </form>
    </>
  );
};

export default LoginModal;
