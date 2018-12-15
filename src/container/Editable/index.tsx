import React, { ChangeEvent, Component, MouseEvent } from "react";

interface Props {
  value: string;
  onSave: ((value: string) => void);
  editRef: any;
}

interface State {
  currentValue: string;
  editable: boolean;
  remarksStyling: string;
}

export default class Editable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentValue: props.value,
      editable: props.value.length == 0,
      remarksStyling: "form-control"
    };
    this.makeEditable = this.makeEditable.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  makeEditable() {
    this.setState({ editable: true,
      remarksStyling: "form-control" });
  }
  onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ currentValue: event.target.value });
  }
  onCancel(event: MouseEvent<HTMLElement>) {
    this.setState({
      editable: false,
      currentValue: this.props.value
    });
  }
  onSave(event: MouseEvent<HTMLElement>) {
    if (this.state.currentValue === "" && this.props.value==="") {
      this.setState({ remarksStyling: "form-control is-invalid" });
      return;
    }
    this.setState({ remarksStyling: "form-control" });
    this.props.onSave(this.state.currentValue);
    this.setState({ editable: false });
  }
  render() {
    if (this.state.editable) {
      return (
        <div className="d-flex">
          <div className="form-group flex-grow-1">
            <textarea
              ref={this.props.editRef}
              className={this.state.remarksStyling}
              rows={9}
              value={this.state.currentValue}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">
              No Comments? Please click on cross icon(Close)
            </div>
          </div>
          <i
            className="cursor--pointer material-icons m-2"
            onClick={this.onSave}
          >
            save
          </i>
          <i
            className="cursor--pointer material-icons m-2"
            onClick={this.onCancel}
          >
            close
          </i>
        </div>
      );
    } else {
      return (
        <div className="d-flex">
          <span className="flex-grow-1">{this.props.value===""?"No Comments":this.props.value}</span>
          <i
            className="cursor--pointer material-icons m-2"
            onClick={this.makeEditable}
          >
            edit
          </i>
        </div>
      );
    }
  }
}
