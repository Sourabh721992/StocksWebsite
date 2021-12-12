import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import {Button} from 'react-bootstrap'

class LinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  btnHandler=(data) => {
    this.props.btnHandler(data);
  }

  render() {
    return (
      <Button id={this.props.id} variant="link" style={{fontSize:"12px"}}
              onClick={this.btnHandler.bind(this, this.props.data)} data-tip data-for={this.props.id + "ToolTip" + this.props.index } >
              {this.props.icon}
        <ReactTooltip id={ this.props.id + "ToolTip" + this.props.index } place="bottom" effect="solid">
         {this.props.toolTip}
        </ReactTooltip>
        {this.props.text}
      </Button>
    )
  }
}

export default LinkButton
