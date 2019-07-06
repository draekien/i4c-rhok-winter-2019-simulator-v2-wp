import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setContribution } from "../actions/causeActions";

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      percentage: 4
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const contribution = {
      balance: this.state.balance,
      percentage: this.state.percentage
    };

    this.props.setContribution(contribution);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="number" name="balance" onChange={this.onChange} defaultValue={this.state.balance} />
          <input type="number" name="percentage" onChange={this.onChange} defaultValue={this.state.percentage} />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ContributionForm.propTypes = {
  setContribution: PropTypes.func.isRequired
};

export default connect(
  null,
  { setContribution }
)(ContributionForm);
