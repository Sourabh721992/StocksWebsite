import React, { Component } from 'react'
import ReactSpinner from '../Controls/Spinner/ReactSpinner';
import {Row, Col} from 'react-bootstrap'
import { getStockFundamentalData } from "../../apiLayer/StockFundamentalData";
import CompanyCard from '../Layout/Fundamental/CompanyCard';
import DropdownList from '../Controls/Dropdown/DropdownList';
import {BsFilterCircleFill} from 'react-icons/bs';

class Fundamental extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: false,
      arrFundamentalData: [],
      stockFilter: 'strongFirst',
      dropdownData: [  { value: 'strongFirst', label: 'Fundamentally Strong Stocks'}, { value: 'weakFirst', label: 'Fundamentally Weak Stocks'}],
    }
    this.getFundamentalData = this.getFundamentalData.bind(this);
    this.dropdownHandler = this.dropdownHandler.bind(this);
  }
  componentDidMount() {
    this.getFundamentalData(this.state.stockFilter);
  }

  dropdownHandler = (selectedOption) => {
    this.setState({stockFilter: selectedOption.value});
    this.getFundamentalData(selectedOption.value);
  }

  getFundamentalData = (stockFilter) => {
    this.setState({loading: true});
    getStockFundamentalData('',stockFilter)
    .then(res => {
      this.setState({ loading: false, arrFundamentalData: res});
    })
  }

  render() {
    return (
      <div id="divFundamental">
        <ReactSpinner loading={this.state.loading}></ReactSpinner>
        <Row className="mt-3">
          <Col xs ={2} sm={2} md={2} lg={2} xl={2}>
            <h4 className="text-muted">
              Stocks
            </h4>
          </Col>
          <Col xs ={10} sm={10} md={10} lg={10} xl={10}>
            <div className="d-flex flex-row bd-highlight justify-content-end mt-1">
              <div className="bd-highlight align-items-center">
                <BsFilterCircleFill fontSize="2.3rem" color="#007bff"></BsFilterCircleFill>
              </div>
              <div className="bd-highlight ml-3">
                <DropdownList id="dropdownStocks"
                        data = { this.state.dropdownData }
                        defaultValue = { { value: 'strongFirst', label: 'Fundamentally Strong Stocks'}}
                        // title = "Select Option"
                        dropdownHandler = { this.dropdownHandler }
                >
                </DropdownList>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        {
          
          this.state.arrFundamentalData.map((stock, index) => {
            return(
              <Col key={index} xs ={12} sm={6} md={6} lg={4} xl={4} className="mt-2">
                <CompanyCard 
                              index = {index} 
                              code = {stock["NSE Code"]}
                              name = {stock.Name}
                              stockPrice =  {stock.price}
                              stockPricePercentChange = {`${Number(stock.percentage_change).toFixed(2)}%`}
                              strength = {stock.strength}
                              params = {stock.filtered_params}
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

export default Fundamental
