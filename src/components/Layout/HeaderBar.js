import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { AiOutlineStock } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { GrMoney } from 'react-icons/gr';
import Link from '../Controls/NavLink/NavLink';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeUrl: window.location.pathname,
      labelTechnical: 'Technical',
      labelFundamental: 'Fundamental',
      labelSocial: 'Social'
    }
  }

  render() {
    let { labelTechnical, labelFundamental, labelSocial } = this.state;
    return (
      <div className="border-bottom shadow-sm">
        <Row>
          <Col xs ={12} sm={12} md={12} lg={12} xl={12}>
            <h3 className="text-primary ml-3 mt-2">Stock Crunch</h3>
          </Col>
        </Row>
        <Row>
          <Col xs ={12} sm={12} md={12} lg={12} xl={12}  >
            <Navbar variant="light" className="mb-2">
                <Nav className="me-auto ml-n2">
                  <Link to={ "/" + labelTechnical.toLowerCase() }
                           icon= {<AiOutlineStock /> }
                           text = { labelTechnical } >
                  </Link>
                  <Link to={ "/" + labelFundamental.toLowerCase() }
                           icon= {<GrMoney /> }
                           text = { labelFundamental } >
                  </Link>
                  <Link to={ "/" + labelSocial.toLowerCase() }
                           icon= {<IoIosPeople /> }
                           text = { labelSocial } >
                  </Link>
                </Nav>
            </Navbar>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HeaderBar;
