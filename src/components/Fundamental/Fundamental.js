import React, { Component } from 'react'
import ReactSpinner from '../Controls/Spinner/ReactSpinner';
import { getStockFundamentalData } from "../../apiLayer/StockFundamentalData";

class Fundamental extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: false
    }
  }
  componentDidMount() {
    this.getFundamentalData();
  }

  getFundamentalData = () => {
    this.setState({loading: true});
    getStockFundamentalData()
    .then(res => {
      console.log(res);
      this.setState({ loading: false});
    })
  }
  render() {
    return (
      <div id="divFundamental">
        <ReactSpinner loading={this.state.loading}></ReactSpinner>
        Fundamental
      </div>
    )
  }
}

export default Fundamental
