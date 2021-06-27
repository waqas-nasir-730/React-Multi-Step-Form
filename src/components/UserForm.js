import React, { Component } from "react";
import UserDetail from "./UserDetail";
import PersonalDetail from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.focusInput = React.createRef();

    this.state = {
      step: 1
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.focusInput.current.focus();
  }

  nextStep = (event) => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = (event) => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { step } = this.state;

    if (step === 1) {
      return (
        <UserDetail
          values={this.state}
          nextStep={this.nextStep}
          handleInput={this.handleInput}
          inputRef={this.focusInput}
        />
      );
    } else if (step === 2) {
      return (
        <PersonalDetail
          values={this.state}
          nextStep={this.nextStep}
          handleInput={this.handleInput}
          prevStep={this.prevStep}
          inputRef={this.focusInput}
        />
      );
    } else if (step === 3) {
      return (
        <Confirmation
          values={this.state}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
      );
    } else if (step === 4) {
      return <Success />;
    }
  }
}

export default UserForm;
