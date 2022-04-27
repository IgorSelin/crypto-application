import { SelectItem } from "./components";
import styles from "./styles.module.scss";
const LearnMoreSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.title}>
            Create the next generation crypto exchange website.
          </div>
          <div className={styles.subTitle}>
            Created with Figma and Anima. No coding involved.
          </div>
        </div>
        <div className={styles.itemsContainer}>
          {Array(3)
            .fill("")
            .map((_, i) => (
              <SelectItem key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
