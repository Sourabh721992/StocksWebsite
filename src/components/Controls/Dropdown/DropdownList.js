import React, { Component } from 'react'
import Select from 'react-select';

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedOption: this.props.defaultValue
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.dropdownHandler(selectedOption);
  };

  render() {
    return (
      <Select id={ this.props.id }
              value = { this.state.selectedOption }
              onChange = { this.handleChange }
              options = { this.props.data }
      ></Select>
    )
  }
}


export default DropdownList
