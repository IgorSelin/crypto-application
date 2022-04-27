import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface ISectionItem {
  info: {
    title: string;
    items: {
      title: string;
      link: string;
    }[];
  };
}

const SectionItem = ({ info }: ISectionItem) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{info.title}</div>
      {info.items?.map(({ title, link }) => (
        <Link to={link} key={title} className={styles.item}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default SectionItem;
