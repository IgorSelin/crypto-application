import styles from "./styles.module.scss";
import icon from "assets/img/selectIcon.png";
const SelectItem = () => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="select item" />
      <div className={styles.title}>Awesome feature</div>
      <div className={styles.description}>
        Fill in the details with a clear description of your feature.
      </div>
      <div className={styles.link}>Learn more</div>
    </div>
  );
};

export default SelectItem;
