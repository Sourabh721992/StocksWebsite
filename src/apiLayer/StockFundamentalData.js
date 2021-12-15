import client from "../utils/ApiClient";
import { apiNames } from "./ApiNames";

const getStockFundamentalData = async (stockName, sort) => {
  let data = {};
  if(stockName)
    data["stock"] = stockName;

  data["sort"] = sort;
  
  let response = await client.post(apiNames.getStockFundamentalData, data);

  return response;
}

export { getStockFundamentalData };