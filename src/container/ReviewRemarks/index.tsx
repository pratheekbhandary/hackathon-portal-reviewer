import React, { Component } from "react";
import Rating from "../../components/Rating";
import ItemDetails from "../../components/IdeaDetails";
import Card from "../../components/Card";
import "./ReviewRemarks.css";
import Editable from "../Editable";
import DecisionButtons from "../../components/DecisionButtons";
import { ReduxState } from "../../reducers/reduxState";
import { Action, Dispatch, bindActionCreators } from "redux";
import { throwError } from "../../actions/index";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import Header from '../header';

interface Props extends RouteComponentProps{
  ideaId: string;
  ideaDocument: string;
  submittedDate: string;
  status: string;
  framework: string;
  nominationTitle: string;
  description: string;
  throwError: Function;
  authUser: string;
  authName: string;
}

interface State {
  rating: number;
  reviewComments: string;
  decision: string;
  isReviewInProgress: any;
}

class ReviewRemarks extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rating: 0,
      reviewComments: "",
      decision: "",
      isReviewInProgress: undefined
    };
    this.onDecision = this.onDecision.bind(this);
    this.isEditable = this.isEditable.bind(this);
  }
  ratingChange = (value: number) => {
    this.setState({ rating: value });
  };
  saveReviewComments = (value: string) => {
    this.setState({ reviewComments: value });
  };
  onDecision(event: any) {
    if (this.state.isReviewInProgress) {
      this.props.throwError({
        type: "ERROR",
        message: "Please save your remarks!"
      });
    }
    else if(this.state.rating===0 && event.target.value==="A"){
      this.props.throwError({
        type: "ERROR",
        message: "You liked the Idea? Please Rate it on the scale of 10!"
      });
    }
    else if(this.state.reviewComments==="" && event.target.value==="R"){
      this.props.throwError({
        type: "ERROR",
        message: "Please add the reason of rejection in Remarks section"
      });
    }
    else{
      //publish to db
      this.props.history.push("/ideas");
    }
  }
  isEditable(el: any) {
    this.setState({ isReviewInProgress: el ? true : false });
  }
  logoutForm() {
    if (this.props.authUser) {
      return (
        <div>
          <Header
            authUser={this.props.authUser}
            authName={this.props.authName}
            history={this.props.history}
          />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="cover_page">
        {this.logoutForm()}
        <main className="container background">
          <ItemDetails
            ideaDocument=""
            framework="Insurance Idea"
            nominationTitle="The Best Idea"
            description="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
          />
          <Card>
            <h5 className="text-dark">Rating</h5>
            <Rating ratingChange={this.ratingChange} />
            <h5 className="text-dark">Remarks</h5>
            <Editable
              value={this.state.reviewComments}
              onSave={this.saveReviewComments}
              editRef={this.isEditable}
            />
            <DecisionButtons onDecision={this.onDecision} />
          </Card>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    ideaId: state.ideaInReview,
    authUser: state.user.email,
    authName: state.user.name
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({ throwError }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewRemarks);
