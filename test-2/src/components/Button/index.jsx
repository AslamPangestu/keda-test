import PropTypes from "prop-types";

import styles from "./index.module.sass";

import Loader from "../Loader";

const Button = ({ label, loading, disabled, ...props }) => (
  <button
    {...props}
    className={styles.buttonContainer}
    disabled={loading || disabled}
  >
    {loading ? <Loader /> : label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
