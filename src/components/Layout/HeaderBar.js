import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import {RiStockLine} from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { Gi3DStairs } from 'react-icons/gi';
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
            <div className="d-flex flex-row bd-highlight mt-2">
              <div className="bd-highlight">
                <img
                    className="ml-2"
                    src={require("../../images/Logo/Logo.png").default}
                    style={{ height: "3rem" }}
                    alt=""
                ></img>
              </div>
              <div className="bd-highlight">
                <h2 className="text-primary ml-2 align-middle">Stock Crunch</h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs ={12} sm={12} md={12} lg={12} xl={12}  >
            <Navbar variant="light" className="mb-2">
                <Nav className="me-auto ml-n2">
                  <Link to={ "/" + labelTechnical.toLowerCase() }
                           icon= {<RiStockLine size={20}/> }
                           text = { labelTechnical } >
                  </Link>
                  <Link to={ "/" + labelFundamental.toLowerCase() }
                           icon= {<Gi3DStairs size={20}/> }
                           text = { labelFundamental } >
                  </Link>
                  <Link to={ "/" + labelSocial.toLowerCase() }
                           icon= {<IoIosPeople size={20}/> }
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
