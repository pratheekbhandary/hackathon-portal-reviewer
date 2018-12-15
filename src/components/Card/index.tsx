import React from "react";

interface Props {
  children: any;
}
export default (props: Props) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};
