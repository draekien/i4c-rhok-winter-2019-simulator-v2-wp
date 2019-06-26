import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCauses } from "../actions/causeActions";

class CauseForm extends Component {
  componentWillMount() {
    this.props.fetchCauses();
  }

  render() {
    const causeItems = this.props.causes.map(cause => (
      <option key={cause.id.toString()}>{cause.cause}</option>
    ));
    return (
      <div>
        <div>causes</div>
        <select>{causeItems}</select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  causes: state.causes.items
});

export default connect(
  mapStateToProps,
  { fetchCauses }
)(CauseForm);
