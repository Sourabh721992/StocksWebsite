let convertStockParamsToShortHand = (paramName) => {
  let name = String(paramName).toUpperCase();
  let shortName = "";
  switch(name) {
    case "PEG RATIO": shortName = "PEG";
      break;
    case "INTEREST COVERAGE RATIO": shortName = "ICR";
      break;
    case "ENTERPRISE VALUE": shortName = `EV (${fetchUnitsOfStockParam(name)})`;
      break;
    case "PRICE TO FREE CASH FLOW": shortName = "CMP/FCF";
      break;
    case "PROFIT GROWTH": shortName = `PG (${fetchUnitsOfStockParam(name)})`;
      break;
    case "PLEDGED PERCENTAGE": shortName = `PP (${fetchUnitsOfStockParam(name)})`;
      break;
    case "PROMOTER HOLDING": shortName = `PH (${fetchUnitsOfStockParam(name)})`;
      break;
    case "RETURN ON EQUITY": shortName = `ROE (${fetchUnitsOfStockParam(name)})`;
      break;
    case "RETURN ON CAPITAL EMPLOYED": shortName = `ROCE (${fetchUnitsOfStockParam(name)})`;
      break;
    case "DIVIDEND YIELD": shortName = `DY (${fetchUnitsOfStockParam(name)})`;
      break;
    case "RETURN ON ASSETS": shortName = `ROA (${fetchUnitsOfStockParam(name)})`;
      break;
    case "PRICE TO EARNING": shortName = "P/E";
      break;
    default:
      shortName = paramName;
      break;
  }
  return shortName;
}

let fetchUnitsOfStockParam = (paramName) => {
  let name = String(paramName).toUpperCase();
  let unit = "";
  switch(name) {
    case "PEG RATIO": unit = "";
      break;
    case "INTEREST COVERAGE RATIO": unit = "";
      break;
    case "ENTERPRISE VALUE": unit = "Cr.";
      break;
    case "PRICE TO FREE CASH FLOW": unit = "";
      break;
    case "PROFIT GROWTH": unit = "%";
      break;
    case "PLEDGED PERCENTAGE": unit = "%";
      break;
    case "PROMOTER HOLDING": unit = "%";
      break;
    case "RETURN ON EQUITY": unit = "%";
      break;
    case "RETURN ON CAPITAL EMPLOYED": unit = "%";
      break;
    case "DIVIDEND YIELD": unit = "%";
      break;
    case "RETURN ON ASSETS": unit = "%";
      break;
    case "PRICE TO EARNING": unit = "";
      break;
    default:
      unit = paramName;
      break;
  }
  return unit;
}

export { convertStockParamsToShortHand, fetchUnitsOfStockParam };