import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "assets/img/footerLogo.svg";
import { footerItems } from "./constants";
import { SectionItem } from "./components";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.itemsContainer}>
        {footerItems.map((item) => (
          <SectionItem key={item.title} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
