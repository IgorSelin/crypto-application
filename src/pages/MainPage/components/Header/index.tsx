import { ReactComponent as Logo } from "assets/img/headerLogo.svg";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}

export default Header;
