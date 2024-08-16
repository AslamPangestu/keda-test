import image from "src/assets/undraw_metrics_re_6g90.svg";

import styles from "./index.module.sass";

const BannerModule = () => {
  return (
    <section className={styles.bannerModule}>
      <div>
        <div className={styles.title}>
          <span>
            &quot;Excepteur sint occaecat cupidatat non proident&quot;
          </span>
        </div>
        <div className={styles.description}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className={styles.image}>
          <img src={image} alt="banner" />
        </div>
      </div>
    </section>
  );
};
export default BannerModule;
