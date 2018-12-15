import React, { Fragment, Component } from "react";
import "./Rating.css";

interface Props {
  ratingChange: Function;
}

interface State {
  value: number;
}

export default class Rating extends Component<Props, State> {
private rangeRef:any;
  constructor(props: Props) {
    super(props);
    this.rangeRef = React.createRef();
    this.state = { value: 0 };
  }

  componentDidMount() {
    this.rangeRef.current.addEventListener("input", this.rangeValue);
  }

  rangeValue = () => {
    this.setState({value:this.rangeRef.current.value});
    this.props.ratingChange(this.rangeRef.current.value);
  };

  render() {
    return (
      <div className="rating">
        <div className="value">{this.state.value}</div>
        <input
          ref={this.rangeRef}
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={this.state.value}
        />
      </div>
    );
  }
}
