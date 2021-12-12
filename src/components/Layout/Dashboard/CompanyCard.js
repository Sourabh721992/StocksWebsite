import React, {useState} from 'react'
import {Card, Row, Col} from 'react-bootstrap';
import {RiStockLine} from 'react-icons/ri';
import {Gi3DStairs} from 'react-icons/gi';
import LabelCompanyName from '../../Controls/Labels/LabelCompanyName';
import LabelCompanyCode from '../../Controls/Labels/LabelCompanyCode';
import LabelStockPrice from '../../Controls/Labels/LabelStockPrice';
import LabelStockPercentChange from '../../Controls/Labels/LabelStockPercentChange';
import LabelBuy from '../../Controls/Labels/LabelBuy';
import LabelSell from '../../Controls/Labels/LabelSell';
import LabelSubHeading from '../../Controls/Labels/LabelSubHeading';
import LabelStrength from '../../Controls/Labels/LabelStrength';
import LabelTechScore from '../../Controls/Labels/LabelTechSocre';
import LinkButton from '../../Controls/Buttons/LinkButton';
import Popup from '../../Controls/Modal/Popup';
import Grid from '../../Controls/Table/Grid';

function CompanyCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const showCandlePatterns = () => {
    let arrCandleData = buildCandlesData();
    let body = (
      <div>
        <span className="text-muted"><b>Technical Bot</b></span><span>, has detected the below-mentioned candle pattern(s). Based on the patterns technical score of the stock is calculated.</span>
        <Grid data={arrCandleData}></Grid>
      </div>
    )
    
    setModalBody(body);
    setModalTitle("Candle Pattern(s)");
    setShowModal(true);
  }

  const showFundamentalPatterns = () => {
    let body = (
      <div>
        <span>The company, <b><span className="text-muted">{props.name}</span></b> has <b><span className="text-muted">{props.strength}</span></b> fundamentals.
        Below mentioned parameters are considered while calculating fundamental strength:
        </span>
        <ul>
          <li>PE Ratio</li>
          <li>PEG Ratio</li>
          <li>ROE Ratio</li>
          <li>ROCE Ratio</li>
          <li>Interest Coverage Ratio</li>
          <li>Enterprise Value</li>
          <li>Price to Free Cash Flow</li>
          <li>Profit Growth</li>
          <li>Interest Coverage Ratio</li>
          <li>Pledged Percentage</li>
          <li>Promoters Holding</li>
          <li>Interest Coverage Ratio</li>
          <li>Dividend Yield</li>
          <li>Return on Assets</li>
        </ul>
      </div>
    );
    setModalBody(body);
    setModalTitle("Fundamental Parameters");
    setShowModal(true);
  }

  const onModalClose = () => {
    setShowModal(false);
  }

  const buildCandlesData = () => {
    let arrCandles =[];
    const keys = Object.keys(props.candleData);
    keys.forEach((date) => {
      props.candleData[date].forEach((arrCandleData) => {
        //Array containing candles data
        let objCandleData = {};
        objCandleData.date = date;
        objCandleData["Candle Name"] = arrCandleData[1];
        objCandleData.trend = arrCandleData[0];
        objCandleData.rank = arrCandleData[2];
        arrCandles.push(objCandleData);
      });
    });
    return arrCandles;
  }

  return (
    <div>
      <Card  className="shadow-lg px-1 py-1" style={{borderRadius: "1.5rem"}}>
        <Card.Body>
          <Row>
            <Col xs ={6} sm={6} md={7} lg={7} xl={7} >
              <h5><b><LabelCompanyCode  index={props.index} text={props.code}></LabelCompanyCode></b></h5>
            </Col>
            <Col xs ={6} sm={6} md={5} lg={5} xl={5}  className="text-right">
              <h5><LabelStockPrice  index={props.index} text={props.stockPrice}></LabelStockPrice></h5>
            </Col>
          </Row>
          <Row className="mt-n3">
            <Col xs ={8} sm={8} md={8} lg={8} xl={8}>
              <span style={{fontSize: "13px"}}><b><LabelCompanyName  index={props.index} text={props.name}></LabelCompanyName></b></span>
            </Col>
            <Col xs ={4} sm={4} md={4} lg={4} xl={4} className="text-right">
              <span style={{fontSize: "13px"}}><b><LabelStockPercentChange  index={props.index} text= {props.stockPricePercentChange}></LabelStockPercentChange></b></span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs ={4} sm={4} md={4} lg={4} xl={4} className="text-center">
              <LabelTechScore index={props.index} text={Number(props.score).toFixed(2)}></LabelTechScore>
            </Col>
            <Col xs ={5} sm={5} md={5} lg={5} xl={5} className="text-center">
              <LabelStrength index={props.index} text={props.strength}> </LabelStrength>
            </Col>
            {
              String(props.mode).toUpperCase() === "BULL" ?
                <Col xs ={3} sm={3} md={3} lg={3} xl={3} className="text-center">
                  <h5><LabelBuy index={props.index}></LabelBuy></h5>
                </Col> 
              :
                <Col xs ={3} sm={3} md={3} lg={3} xl={3} className="text-center">
                      <h5><LabelSell  index={props.index}></LabelSell></h5>
                </Col>
            }
          </Row>
          <Row className="mt-n1">
            <Col xs ={4} sm={4} md={4} lg={4} xl={4} className="text-center">
                <h6>
                  <LabelSubHeading text="Technical"
                                   id="spanTechnical"
                                   index={props.index}
                                   toolTip="Technical score indicates strength of candles describing the ongoing trend in stock."
                  ></LabelSubHeading> 
                </h6>
            </Col>
            <Col xs ={5} sm={5} md={5} lg={5} xl={5} className="text-center">
              <h6>
                <LabelSubHeading text="Fundamentals"
                                  id="spanFundamental"
                                  index={props.index}
                                  toolTip="After analysis of important parameter like PE, ROE, ROCE etc., stocks have been classified into four categories.
                                          Very Strong, Strong, Weak and, Very Weak">
                </LabelSubHeading>
              </h6>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="mt-n3" style={{backgroundColor:"#FFFFFF"}}>
        <Row>
            <Col xs ={12} sm={12} md={12} lg={12} xl={12} className="text-right">
              <LinkButton id={"btnFundamentalPattern"}
                                index={props.index}
                                icon={<Gi3DStairs size={24}></Gi3DStairs>}
                                toolTip="Fundamental Parameters"
                                btnHandler={showFundamentalPatterns}
                                className="mt-n3"

                  >
              </LinkButton>
              <LinkButton id={"btnCandlePattern"}
                              index={props.index}
                              icon={<RiStockLine size={24}></RiStockLine>}
                              toolTip="Candle Patterns Detected"
                              btnHandler={showCandlePatterns}
                              className="mt-n3"
                >
                </LinkButton>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Popup title = {modalTitle}
             body = {modalBody}
             modalClose = {onModalClose}
             show={showModal}
      ></Popup>
    </div>
  )
}

export default CompanyCard;
