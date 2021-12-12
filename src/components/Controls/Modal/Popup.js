import React, {Component} from 'react'
import {Modal, ModalBody, ModalTitle, ModalFooter} from 'react-bootstrap'

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  modalClose = () => {
    this.props.modalClose();
  }
  render() {
    return (
      <Modal centered show={this.props.show} onHide={this.modalClose.bind(this, this.props.data)}>
        <Modal.Header closeButton>
          <ModalTitle>{this.props.title}</ModalTitle>
        </Modal.Header>
        <ModalBody>
          {this.props.body}
        </ModalBody>
        <ModalFooter>
          {this.props.footer}
        </ModalFooter>
      </Modal>
    )
  }
}


export default Popup
