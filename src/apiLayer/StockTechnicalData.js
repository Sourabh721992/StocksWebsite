import client from "../utils/ApiClient";
import { apiNames } from "./ApiNames";

const getStockCandleData = async (days, stockName) => {
  let data = {};
  data["lastNDay"] = days;

  if(stockName)
    data["stock"] = stockName;
  
  let response = await client.post(apiNames.getStockCandleData, data);

  return response;
}

export { getStockCandleData };