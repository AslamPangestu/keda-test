import styles from "./index.module.sass";

const Loader = () => (
  <div className={styles.container}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
);

export default Loader;
