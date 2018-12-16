import React from "react";

interface Props {
  ideaDocument: string;
  framework: string;
  nominationTitle: string;
  description: string;
}
export default (props: Props) => {
  return (
    <div className="card text-white bg-info mb-3 mt-3">
      <div className="card-header">
        <h3 className="text-dark">Idea Details</h3>
      </div>
      <div className="card-body card-text  pl-5 pr-5">
        <div className="row p-2 ">
          <div className="col">
            <h5 className="text-dark">Nomination Title</h5>
            {props.nominationTitle}
          </div>
          <div className="col">
            <h5 className="text-dark">Framework</h5>
            {props.framework}
          </div>
        </div>
        <div className="row d-flex justify-content-center p-2">
          Download Idea Document
        </div>
        <div className="row p-2 ">
          <div className="ml-2">
            <h5 className="text-dark">Description</h5>
          </div>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
