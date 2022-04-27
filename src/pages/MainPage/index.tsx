import { useEffect, useState } from "react";
import { fetchTokensRequestAction } from "store/actions/tokensList.action";
import {
  AboutContent,
  Header,
  LearnMoreSection,
  GetStartedSection,
  TokensList,
  Footer,
} from "./components";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { TOKENS_PORTION, phoneMedia } from "constants/general";
import { useMedia } from "hooks/useMedia";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { loading, tokensList } = useAppSelector(({ mainPage }) => mainPage);
  const isPhoneSize = useMedia(phoneMedia);
  const [touched, setTouched] = useState(false);
  const [count, setCount] = useState(6);

  useEffect(() => {
    dispatch(fetchTokensRequestAction(count));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const getMoreData = () => {
    setTouched(true);
    setCount((prev) => prev + TOKENS_PORTION);
  };

  const data = isPhoneSize && !touched ? tokensList.slice(0, 4) : tokensList;
  //show 4 elements for 360px

  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>
        <AboutContent />
        <TokensList data={data} loading={loading} touched={touched} />
        <button type="button" className={styles.moreBtn} onClick={getMoreData}>
          More
        </button>
      </div>
      <LearnMoreSection />
      <GetStartedSection />
      <Footer />
    </>
  );
};

export default MainPage;
