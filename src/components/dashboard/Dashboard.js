import React, { Component } from 'react';
import { getStockCandleData } from "../../apiLayer/StockCandleData";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      days: 15
    }
    this.getStockCandleData = this.getStockCandleData.bind(this);
  }
  componentDidMount() {
    //Fetch the all stock api data
    this.getStockCandleData();
  }

  getStockCandleData = () => {
    getStockCandleData(this.state.days)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        Landing Page
      </div>
    )
  }
}

export default Dashboard
