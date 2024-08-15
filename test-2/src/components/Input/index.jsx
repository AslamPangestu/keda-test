import PropTypes from "prop-types";

import styles from "./index.module.sass";

const Input = ({ label, ...props }) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
