import { tableHeaders } from "./constants";
import avatar from "assets/img/avatar.png";
import styles from "./styles.module.scss";
import cn from "classnames";
import { ITokenItem } from "store/actions/tokensList.types";
import { Loader } from "components";
import { useEffect, useRef } from "react";

interface ITokensList {
  data: ITokenItem[];
  loading: boolean;
  touched: boolean;
}

const TokensList = ({ data, loading, touched }: ITokensList) => {
  const container = useRef<HTMLDivElement>(null);
  const last = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (last.current && touched) {
      last.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [data, touched]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Market trends</div>
      <div className={styles.tableWrapper}>
        <div className={styles.table} ref={container}>
          {loading && (
            <div className={cn(styles.loaderContainer)}>
              <Loader />
            </div>
          )}
          <div className={styles.tableHeader}>
            {tableHeaders.map((title, i) => (
              <div key={i} className={styles[title.replaceAll(" ", "")]}>
                {title}
              </div>
            ))}
          </div>
          <div className={styles.tableBody}>
            {data.map(
              ({
                id,
                name,
                symbol,
                price_usd,
                percent_change_1h,
                market_cap_usd,
              }) => (
                <div
                  className={styles.row}
                  key={id}
                  ref={data[data.length - 1].id === id ? last : null}
                >
                  <div className={styles.userName}>
                    <img src={avatar} alt="avatar" />
                    <span className={styles.mainName}>{name}</span>
                    <span className={styles.shortName}>{symbol}</span>
                  </div>
                  <div className={styles.lastPrice}>${price_usd}</div>
                  <div
                    className={cn(
                      styles.changes,
                      percent_change_1h?.includes("-")
                        ? styles.decrease
                        : styles.increase
                    )}
                  >
                    {percent_change_1h}
                  </div>
                  <div className={styles.marketCup}>${market_cap_usd}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokensList;
