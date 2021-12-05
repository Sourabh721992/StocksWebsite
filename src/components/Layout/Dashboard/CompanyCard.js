import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';
import LabelCompanyName from '../../Controls/Labels/LabelCompanyName';
import LabelCompanyCode from '../../Controls/Labels/LabelCompanyCode';
import LabelStockPrice from '../../Controls/Labels/LabelStockPrice';
import LabelStockPercentChange from '../../Controls/Labels/LabelStockPercentChange';
import LabelHeading from '../../Controls/Labels/LabelHeading';
import LabelBuy from '../../Controls/Labels/LabelBuy';
import LabelSell from '../../Controls/Labels/LabelSell';

function CompanyCard(props) {
  return (
    <Card border="secondary" className="px-2 py-2" style={{borderRadius: "1.5rem"}}>
      <Card.Body>
        <Row>
          <Col xs={8}>
            <h5><LabelCompanyCode  index={props.index} text={props.code}></LabelCompanyCode></h5>
          </Col>
          <Col xs={4} className="text-right">
            <h5><LabelStockPrice  index={props.index} text={props.stockPrice}></LabelStockPrice></h5>
          </Col>
        </Row>
        <Row className="mt-n3">
          <Col xs={8}>
            <span style={{fontSize: "13px"}}><b><LabelCompanyName  index={props.index} text={props.name}></LabelCompanyName></b></span>
          </Col>
          <Col xs={4} className="text-right">
            <span style={{fontSize: "13px"}}><b><LabelStockPercentChange  index={props.index} text= {props.stockPricePercentChange}></LabelStockPercentChange></b></span>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="auto">
            <b><LabelHeading text="Score : "> </LabelHeading></b> &nbsp;
            <b><LabelHeading  index={props.index} text={props.score}></LabelHeading></b> 
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <b><LabelHeading text="Strength : "> </LabelHeading></b> &nbsp;
            <b><LabelHeading  index={props.index} text={props.strength}></LabelHeading></b>
          </Col>
          {
            String(props.mode).toUpperCase() === "BULL" ?
              <Col className="text-right mt-n3">
                <h4><LabelBuy  index={props.index}></LabelBuy></h4>
              </Col> 
            :
              <Col className="text-right mt-n3">
                <h4><LabelSell  index={props.index}></LabelSell></h4>
              </Col>
          }
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard;
