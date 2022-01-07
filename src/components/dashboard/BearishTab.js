import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CompanyCard from '../Layout/Dashboard/CompanyCard';

class BearishTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    let { stocks } = this.props
    return (
      <div id="divBullishTab" className="container-fluid">
        <Row>
        {
          stocks.map((stock, index) => {
              return(
                <Col key={index} xs ={12} sm={6} md={6} lg={3} xl={3} className="mt-4">
                  <CompanyCard 
                                index = {index} 
                                code = {stock.stock}
                                name = {stock.name}
                                stockPrice =  {stock.price}
                                stockPricePercentChange = {`${Number(stock.percentCh).toFixed(2)}%`}
                                score = {stock.priority}
                                strength = {stock.fundamental_trend}
                                mode = "bear"
                                candleData = {stock.CandleData}
                  >
                  </CompanyCard>
                </Col>)
          })
        }
        </Row>
      </div>
    )
  }
}


export default BearishTab
