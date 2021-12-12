import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { getStockCandleData } from "../../apiLayer/StockTechnicalData";
import DashboardTab from '../Layout/Dashboard/DashboardTab';
import DropdownList from '../Controls/Dropdown/DropdownList';
import ReactSpinner from '../Controls/Spinner/ReactSpinner';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      days: 10,
      dropdownData: [  { value: '7', label: '7 days'}, { value: '10', label: '10 days'}, { value: '15', label: '15 days'}, { value: '30', label: '30 days'}],
      arrBullishStocks:[],
      arrBearishStocks:[],
      loading: false
    }
    this.getStockCandleData = this.getStockCandleData.bind(this);
    this.dropdownHandler = this.dropdownHandler.bind(this);
  }
  componentDidMount() {
    //Fetch the all stock api data
    this.getStockCandleData(this.state.days);
  }

  dropdownHandler = (selectedOption) => {
    this.setState({days: selectedOption.value});
    this.getStockCandleData(selectedOption.value);
  }

  getStockCandleData = (days) => {
    this.setState({loading: true});
    getStockCandleData(days)
    .then(res => {
      this.setState({arrBullishStocks: res["Good Stocks"], arrBearishStocks: res["Bad Stocks"], loading: false});
    })
  }

  render() {
    return (
      <div id="divDashboard">
        <ReactSpinner loading={this.state.loading}></ReactSpinner>
        <Row className="mb-2 mt-3">
          <Col xs ={2} sm={2} md={2} lg={2} xl={2}>
            <h5 className="text-muted">
              Stocks
            </h5>
          </Col>
          <Col xs ={5} sm={5} md={8} lg={8} xl={8}>
          </Col>
          <Col>
            <DropdownList id="dropdownDays"
                      data = { this.state.dropdownData }
                      defaultValue = { { value: '10', label: '10 days'} }
                      title = "Select Days"
                      dropdownHandler = { this.dropdownHandler }
            >
            </DropdownList>
          </Col>
        </Row>
        <Row>
          <Col>
            <DashboardTab 
                    bullishStocks = { this.state.arrBullishStocks }
                    bearishStocks = { this.state.arrBearishStocks }
            ></DashboardTab>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
