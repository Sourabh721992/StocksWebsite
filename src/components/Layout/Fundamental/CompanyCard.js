import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import LabelCompanyCode from '../../Controls/Labels/LabelCompanyCode'
import LabelStockPrice from '../../Controls/Labels/LabelStockPrice'
import LabelCompanyName from '../../Controls/Labels/LabelCompanyName'
import LabelStockPercentChange from '../../Controls/Labels/LabelStockPercentChange'
import LabelSubHeading from '../../Controls/Labels/LabelSubHeading'
import LabelGeneric from '../../Controls/Labels/LabelGeneric'
import {ConvertStockParamsToShortHand} from '../../../commonFunctions/ConvertStockParamsToShorthand'

function CompanyCard(props) {
  let {index, code, name, stockPrice, stockPricePercentChange, params} = props;

  return (
    <div id={"divFundamentalCard" + index}>
      <Card  className="shadow-lg px-1 py-1 mt-4" style={{borderRadius: "1.5rem"}}>
        <Card.Header style={{backgroundColor:"#FFF", height:"75px"}}>
        <div id={"divMetaInfo" + index}>
            <Row>
              <Col xs ={6} sm={6} md={7} lg={7} xl={7} >
                <h5><b><LabelCompanyCode  index={index} text={code}></LabelCompanyCode></b></h5>
              </Col>
              <Col xs ={6} sm={6} md={5} lg={5} xl={5}  className="text-right">
                <h5><LabelStockPrice  index={index} text={stockPrice}></LabelStockPrice></h5>
              </Col>
            </Row>
            <Row className="mt-n3">
              <Col xs ={8} sm={8} md={8} lg={8} xl={8}>
                <span style={{fontSize: "13px"}}><b><LabelCompanyName  index={index} text={name}></LabelCompanyName></b></span>
              </Col>
              <Col xs ={4} sm={4} md={4} lg={4} xl={4} className="text-right">
                <span style={{fontSize: "13px"}}><b><LabelStockPercentChange  index={index} text= {stockPricePercentChange}></LabelStockPercentChange></b></span>
              </Col>
            </Row>
          </div>
        </Card.Header>
        <Card.Body>
          
          <div id={"divFundamentalParams" + index}>
            <Row>
              {
                params.map((param, i) => {
                  return(
                    <Col key={i} xs={3} sm={3} md={3} lg={3} xl={3} className="mt-3">
                      <Row className="text-center">
                        <Col>
                          <LabelGeneric text={param[1]}
                                        size="16px"
                                        border={Number(param[2]) === 1 ? '3px solid #00ff00': '3px solid #880808'}
                                        bgColor="#f0fff0"
                                        >

                          </LabelGeneric>
                         
                        </Col>
                      </Row>
                      <Row className="text-center mt-1">
                        <Col>
                          <LabelSubHeading text={ConvertStockParamsToShortHand(param[0])}
                                            id={"span" + ConvertStockParamsToShortHand(param[0])}
                                            index={index}
                                            toolTip={param[0]}>
                          </LabelSubHeading>
                        </Col>
                      </Row>
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CompanyCard
