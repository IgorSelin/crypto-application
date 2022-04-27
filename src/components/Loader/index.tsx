import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      {Array(4)
        .fill("")
        .map((_, i) => (
          <div key={i} />
        ))}
    </div>
  );
};

export default Loader;
