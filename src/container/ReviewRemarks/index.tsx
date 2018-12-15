import React, { Component} from "react";
import Rating from "../../components/Rating";
import ItemDetails from "../../components/IdeaDetails";
import Card from "../../components/Card";
import "./ReviewRemarks.css";
import Editable from "../Editable";
import DecisionButtons from "../../components/DecisionButtons";
import { ReduxState } from "../../reducers/reduxState";

interface Props {
  ideaId: string;
  ideaDocument: string;
  submittedDate: string;
  status: string;
  framework: string;
  nominationTitle: string;
  description: string;
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
      isReviewInProgress:undefined
    };
    this.onDecision=this.onDecision.bind(this);
    this.isEditable=this.isEditable.bind(this);
  }
  ratingChange = (value: number) => {
    this.setState({ rating: value });
  };
  saveReviewComments = (value: string) => {
    this.setState({ reviewComments: value });
  };
  onDecision(event:any){
    event.currentTarget.value
  }
  isEditable(el:any){
    this.setState({isReviewInProgress : el?true:false});
  }
  render() {
    return (
      <div className="cover_page">
        <header className="bg-primary text-white">
          <h1 className="p-2">Header</h1>
        </header>
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
            <DecisionButtons onDecision={this.onDecision}/>
          </Card>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state:ReduxState){
  return{
    ideaId:state.ideaInReview
  }
}

export default ReviewRemarks;
