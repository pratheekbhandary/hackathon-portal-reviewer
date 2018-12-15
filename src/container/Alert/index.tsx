import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../reducers/reduxState";
import "./Alert.css";

interface Props {
  alert: { message: string; type: string };
}

class Alert extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {this.props.alert.message === "SUCCESS" && (
          <div className="myAlert-top alert alert-success">
            <a
              href="#"
              className="close"
              data-dismiss="alert"
              aria-label="close"
            >
              &times;
            </a>
            <strong>Success!</strong> {this.props.alert.message}
          </div>
        )}
        {this.props.alert.message === "ERROR" && (
          <div className="myAlert-bottom alert alert-danger">
            <a
              href="#"
              className="close"
              data-dismiss="alert"
              aria-label="close"
            >
              &times;
            </a>
            <strong>Danger!</strong> {this.props.alert.message}
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    alert: state.alert || ""
  };
}

export default connect(mapStateToProps)(Alert);
