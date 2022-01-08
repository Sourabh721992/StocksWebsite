// Redirect functionality added in component, on on click
// Other functionalities onclick will be added later on as per requirement

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {Form, InputGroup} from 'react-bootstrap';
import {HiOutlineSearch} from 'react-icons/hi';
import {withRouter} from 'react-router-dom';


class AutoTextBox extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = [];

    // Filter our suggestions that don't contain the user's input
    let countSuggestions = 1;
    for(let i = 1; i < suggestions.length; i++) {
      if(
          String(suggestions[i].id).toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
          String(suggestions[i].val).toLowerCase().indexOf(userInput.toLowerCase()) > -1
        ) {
        filteredSuggestions.push(suggestions[i]);
        countSuggestions++;
      }
      if(countSuggestions === 5)
        break;
    }

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    });
    
    if(this.props.redirect === true) {
      let selectedStock = this.state.filteredSuggestions.filter(suggestion => suggestion.val === e.currentTarget.innerText)[0];
      this.props.history.push(String(this.props.uri).replace("{id}", selectedStock.id).replace("{val}", selectedStock.val));
    }
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].val
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {
             filteredSuggestions.map((suggestion, index) => {
                let className;

                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }

                return (
                  <li className={className} key={index} onClick={onClick}>
                    {suggestion.val}
                  </li>
                );
              })
            }
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Not able to find stock</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text>
                  <HiOutlineSearch></HiOutlineSearch>
              </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder="Search Stocks"
            className="input text-muted"
          />
        </InputGroup>
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default withRouter(AutoTextBox);
