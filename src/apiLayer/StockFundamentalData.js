import client from "../utils/ApiClient";
import { apiNames } from "./ApiNames";

const getStockFundamentalData = async (stockName) => {
  let data = {};
  if(stockName)
    data["stock"] = stockName;
  
  let response = await client.post(apiNames.getStockFundamentalData, data);

  return response;
}

export { getStockFundamentalData };