import React,{MouseEvent} from "react";

interface Props {
  onDecision: ((event:MouseEvent<HTMLElement>)=>void);
}

export default (props: Props) => {
  return (
    <div className="d-flex justify-content-around">
      <button type="button" value="A" onClick={props.onDecision} className="btn btn-primary btn-lg">
        Accept
      </button>
      <button type="button" value="N" onClick={props.onDecision} className="btn btn-secondary btn-lg">
        No Decision
      </button>
      <button type="button" value="R" onClick={props.onDecision} className="btn btn-danger btn-lg">
        Reject
      </button>
    </div>
  );
};
