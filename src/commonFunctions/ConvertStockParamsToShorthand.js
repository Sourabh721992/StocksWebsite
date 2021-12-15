let ConvertStockParamsToShortHand = (paramName) => {
  let name = String(paramName).toUpperCase();
  let shortName = "";
  switch(name) {
    case "PEG RATIO": shortName = "PEG";
      break;
    case "INTEREST COVERAGE RATIO": shortName = "ICR";
      break;
    case "ENTERPRISE VALUE": shortName = "EV (Cr.)";
      break;
    case "PRICE TO FREE CASH FLOW": shortName = "CMP/FCF";
      break;
    case "PROFIT GROWTH": shortName = "PG (%)";
      break;
    case "PLEDGED PERCENTAGE": shortName = "PP (%)";
      break;
    case "PROMOTER HOLDING": shortName = "PH (%)";
      break;
    case "RETURN ON EQUITY": shortName = "ROE (%)";
      break;
    case "RETURN ON CAPITAL EMPLOYED": shortName = "ROCE (%)";
      break;
    case "DIVIDEND YIELD": shortName = "DY (%)";
      break;
    case "RETURN ON ASSETS": shortName = "ROA (%)";
      break;
    case "PRICE TO EARNING": shortName = "P/E";
      break;
    default:
      shortName = paramName;
      break;
  }
  return shortName;
}

export { ConvertStockParamsToShortHand };