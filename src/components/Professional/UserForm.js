import React, { Component } from 'react';
import validator from "validator";
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Login from '../Login/Login';

export class UserForm extends Component {
  state = {
    step: 1,
    formSetting: {
      firstName: {
        name: "firstName",
        type: "text",
        placeholder: "Enter first name",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      lastName: {
        name: "lastName",
        type: "text",
        placeholder: "Enter last name",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      email: {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      profession: {
        name: "profession",
        type: "text",
        placeholder: "What is your profession?",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      expertise: {
        name: "expertise",
        type: "text",
        placeholder: "What is your area of expertise that you would like to share?",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
 
      city: {
        name: "city",
        type: "number",
        placeholder: "City",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      password: {
        name: "password",
        placeholder: "Enter password",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
    },
    validate: {
      usernameError: {
        noError: null,
        message: "",
      },
      emailError: {
        noError: null,
        message: "",
      },
      passwordError: {
        noError: null,
        message: "",
      },
    },
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  checkInputValidation = (errorState, inputName, inputValue) => {
    switch (inputName) {
      case "username":
        let validatedUsername;
        validatedUsername = validator.matches(
          inputValue,
          /^[a-zA-Z0-9]{1,20}$/
        );

        if (!validatedUsername) {
          errorState.usernameError.noError = validatedUsername;
          errorState.usernameError.message =
            "cannot contain special characters and minimum of 2 and maximum of 20 characters";
          return errorState;
        } else {
          errorState.usernameError.noError = validatedUsername;
          errorState.usernameError.message = "";
          return errorState;
        }
      case "email":
        let validatedEmail;
        validatedEmail = validator.isEmail(inputValue);

        if (!validatedEmail) {
          errorState.emailError.noError = validatedEmail;
          errorState.emailError.message = "It must be an email";
          return errorState;
        } else {
          errorState.emailError.noError = validatedEmail;
          errorState.emailError.message = "";
          return errorState;
        }

      case "password":
        // let validatedPassword;
        // validatedPassword = validator.matches(
        //   inputValue,
        //   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        // );

        let validatedPassword = true;

        if (!validatedPassword) {
          errorState.passwordError.noError = validatedPassword;
          errorState.passwordError.message =
            "Minimum eight characters, at least one letter, one number and one special character";
          return errorState;
        } else {
          errorState.passwordError.noError = validatedPassword;
          errorState.passwordError.message = "";
          return errorState;
        }

      default:
        return errorState;
    }
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // handleChange = (event) => {
  //   let inputForm = {
  //     ...this.state.formSetting,
  //   };

  //   inputForm[event.target.name].value = event.target.value;
  //   let isValidatedCheck = this.checkInputValidation(
  //     this.state.validate,
  //     event.target.name,
  //     event.target.value
  //   );

  //   inputForm["username"].error = isValidatedCheck.usernameError;
  //   inputForm["email"].error = isValidatedCheck.emailError;
  //   inputForm["password"].error = isValidatedCheck.passwordError;

  //   this.setState({
  //     validate: isValidatedCheck,
  //   });

  //   if (
  //     inputForm["email"].error.noError === false ||
  //     inputForm["password"].error.noError === false ||
  //     inputForm["username"].error.noError === false
  //   ) {
  //     this.setState({
  //       canSubmit: true,
  //     });
  //     return;
  //   }

  //   if (
  //     inputForm["email"].error.noError === true &&
  //     inputForm["password"].error.noError === true &&
  //     inputForm["username"].error.noError
  //   ) {
  //     this.setState({
  //       canSubmit: false,
  //     });
  //     return;
  //   } else {
  //     this.setState({
  //       ...this.state,
  //       formConfig: inputForm,
  //     });
  //     return;
  //   }
  // };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, profession, city, expertise } = this.state;
    const values = { firstName, lastName, email, password, profession, city, expertise };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      case 5:
        return <Login />;
      default:
       
    }
  }
}

export default UserForm;
