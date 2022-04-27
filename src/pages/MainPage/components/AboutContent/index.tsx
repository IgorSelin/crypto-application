import styles from "./styles.module.scss";
import aboutImg from "assets/img/aboutImg.png";

const AboutContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Create the next generation crypto exchange website.
      </div>
      <img alt="about" src={aboutImg} />
    </div>
  );
};

export default AboutContent;
