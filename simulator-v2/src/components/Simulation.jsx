import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Simulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cause: {
        id: 0,
        cause: "",
        charity: "",
        achieves: [],
        postTxt: ""
      },
      contribution: {
        balance: 1000,
        percentage: 4
      }
    };
  }

  componentDidMount() {
    const cause = this.props.cause;
    this.setState({ cause: cause });
    console.log(this.state.contribution);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cause: nextProps.cause, contribution: nextProps.contribution });
    console.log(this.state);
  }

  render() {
    const achievements = this.state.cause.achieves.map(achievement => (
      <div key={achievement.id.toString()}>
        <p>{achievement.name}</p>
        <p>{achievement.amount}</p>
      </div>
    ));
    return (
      <div>
        <div>Achievements</div>
        <div>{achievements}</div>
      </div>
    );
  }
}

Simulation.propTypes = {
  cause: PropTypes.object.isRequired,
  contribution: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cause: state.causes.item,
  contribution: state.causes.contribution
});

export default connect(
  mapStateToProps,
  {}
)(Simulation);
