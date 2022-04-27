import axios from "axios";

export const getTokens = async (total: number): Promise<Response> => {
  const { data } = await axios.get(
    `https://api.coinlore.net/api/tickers/?start=0&limit=${total}`
  );
  return data;
};
