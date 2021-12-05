import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import BullishTab from '../../Dashboard/BullishTab';
import BearishTab from '../../Dashboard/BearishTab';

function DashboardTab(props) {
  const [key, setKey] = useState('bullishTab');
  return (
    <Tabs id="tabDashboard" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="bullishTab" title="Most Bullish">
        <BullishTab stocks= {props.bullishStocks} ></BullishTab>
      </Tab>
      <Tab eventKey="bearishTab" title="Most Bearish">
        <BearishTab stocks= {props.bearishStocks}></BearishTab>
      </Tab>
    </Tabs>
  )
}

export default DashboardTab
