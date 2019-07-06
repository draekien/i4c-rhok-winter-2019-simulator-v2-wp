import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCauses, setCause, setDefaultCause } from "../actions/causeActions";

class CauseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      cause: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchCauses();
    this.props.setDefaultCause();
  }

  onChange(e) {
    e.preventDefault();

    const cause = e.target.value;

    this.props.setCause(cause);
  }

  render() {
    const causeItems = this.props.causes.map(cause => (
      <option key={cause.id.toString()} data-id={cause.id.toString()}>
        {cause.cause}
      </option>
    ));
    return (
      <div>
        <div>causes</div>
        <select onChange={this.onChange}>{causeItems}</select>
      </div>
    );
  }
}

CauseForm.propTypes = {
  fetchCauses: PropTypes.func.isRequired,
  setCause: PropTypes.func.isRequired,
  causes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  causes: state.causes.items
});

export default connect(
  mapStateToProps,
  { fetchCauses, setCause, setDefaultCause }
)(CauseForm);
