import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { getStockCandleData } from "../../apiLayer/StockTechnicalData";
import DashboardTab from '../Layout/Dashboard/DashboardTab';
import DropdownList from '../Controls/Dropdown/DropdownList';
import ReactSpinner from '../Controls/Spinner/ReactSpinner';
import {BsFilterCircleFill} from 'react-icons/bs';

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
                <DropdownList id="dropdownDays"
                          data = { this.state.dropdownData }
                          defaultValue = { { value: '10', label: '10 days'} }
                          title = "Select Days"
                          dropdownHandler = { this.dropdownHandler }
                >
                </DropdownList>
              </div>
            </div>
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
