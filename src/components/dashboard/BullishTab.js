import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CompanyCard from '../Layout/Dashboard/CompanyCard';

class BullishTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  
  render() {
    let { stocks } = this.props
    // console.log(stocks);
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
                                name = "Infosys Private Limited"
                                stockPrice = "$ 1711"
                                stockPricePercentChange = "1.83%"
                                score = {stock.priority}
                                strength = {stock.fundamental_trend}
                                mode = "bull"
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


export default BullishTab