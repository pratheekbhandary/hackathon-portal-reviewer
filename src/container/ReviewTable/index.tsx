import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { ReduxState } from "../../reducers/reduxState";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {selectIdea} from '../../actions/index';

interface Props extends RouteComponentProps {
  selectIdea:Function;
}

interface State {
  show: boolean;
}

interface Nominee {
  ideaId: string;
  ideaDocument: string;
  submittedDate: string;
  status: string;
  framework: string;
  nominationTitle: string;
  description: string;
  reviewRemarks: string;
  reviewStatus: string;
}

const NOMINEE_DETAILS: Array<Nominee> = [
  {
    ideaId: "Idea0001",
    submittedDate: "19/12/2015",
    description: "Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.",
    framework: "framework1",
    nominationTitle: "Nom0001",
    ideaDocument: "../watever",
    status: "Submitted",
    reviewRemarks: "",
    reviewStatus: ""
  },
  {
    ideaId: "Idea0001",
    submittedDate: "19/12/2015",
    description: "Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.",
    framework: "framework2",
    nominationTitle: "Nom0002",
    ideaDocument: "../watever",
    status: "Submitted",
    reviewRemarks: "",
    reviewStatus: ""
  },
  {
    ideaId: "Idea0001",
    submittedDate: "19/12/2015",
    description: "Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts jQuery plugin.",
    framework: "framework3",
    nominationTitle: "Nom0003",
    ideaDocument: "../watever",
    status: "Submitted",
    reviewRemarks: "",
    reviewStatus: ""
  },
  {
    ideaId: "Idea0001",
    submittedDate: "19/12/2015",
    description: "",
    framework: "framework4",
    nominationTitle: "Nom0004",
    ideaDocument: "../watever",
    status: "Submitted",
    reviewRemarks: "",
    reviewStatus: ""
  },
  {
    ideaId: "Idea0001",
    submittedDate: "19/12/2015",
    description: "",
    framework: "framework5",
    nominationTitle: "Nom0005",
    ideaDocument: "../watever",
    status: "Submitted",
    reviewRemarks: "",
    reviewStatus: ""
  }
];

class ReviewTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.navigateToIdea=this.navigateToIdea.bind(this);
  }

  getTableHeader = () => {
    return (
      <thead className="thead-dark text-uppercase">
        <tr>
          <th scope="col">Nomination Title</th>
          <th scope="col">Framework</th>
          <th scope="col">Download Idea</th>
          <th scope="col">Nomination Status</th>
          <th scope="col">Remarks</th>
        </tr>
      </thead>
    );
  };

  getRowItem = ({
    ideaId,
    framework,
    nominationTitle,
    ideaDocument,
    status,
    reviewStatus
  }: Nominee) => {
    let classToBeApplied;
    switch (reviewStatus) {
      case "N":
        classToBeApplied = "table-success";
        break;
      case "A":
        classToBeApplied = "table-active";
        break;
      case "R":
        classToBeApplied = "table-danger";
        break;
      default:
        classToBeApplied = "";
    }
    return (
      <tr className={classToBeApplied}>
        <td>{nominationTitle}</td>
        <td>{framework}</td>
        <td>{"Download"}</td>
        <td>{status}</td>
        <td>{this.modalActivateButton(ideaId)}</td>
      </tr>
    );
  };

  modalActivateButton = (ideaId:any) => {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={(ideaId)=>this.navigateToIdea(ideaId)}
      >
        Remarks
      </button>
    );
  };

  generateBody = (nomineeDetails: Array<any>) => {
    return (
      <tbody>
        {nomineeDetails.map(singleRow => this.getRowItem(singleRow))}
      </tbody>
    );
  };

  navigateToIdea(ideaId:any){
    this.props.selectIdea(ideaId);
    this.props.history.push("/remarks");
  }

  render() {
    return (
      <div className="ReactTable">
        <h4>Reviewers Table</h4>
        <div className="m-5 border">
          <table className="table table-hover">
            {this.getTableHeader()}
            {this.generateBody(NOMINEE_DETAILS)}
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:ReduxState){

}

function mapDispatchToProps(dispatch:Dispatch<Action>){
  return bindActionCreators({selectIdea},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewTable);
