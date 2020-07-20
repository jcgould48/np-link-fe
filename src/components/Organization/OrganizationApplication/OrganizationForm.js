import React, { Component } from 'react';
import validator from "validator";
import FormOrganizationDetails from './FormOrganizationDetails';
import FormDescription from './FormDescription';
import FormHelpNeeded from './FormHelpNeeded';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
  state = {
    step: 1,
    formSetting: {
      orgName: {
        name: "orgName",
        type: "text",
        placeholder: "Enter Organization's Name",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      orgName: {
        name: "poc",
        type: "text",
        placeholder: "Enter Organization's Point of Contact",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      pitch: {
        name: "pitch",
        type: "text",
        placeholder: "Enter 1-2 sentence pitch ",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      description: {
        name: "description",
        type: "text",
        placeholder: "Describe your organization",
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
        placeholder: "Enter Email",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
      zip: {
        name: "zip",
        type: "zip",
        placeholder: "Enter Zip Code of Business",
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
  
      helpNeeded: {
        name: "helpNeeded",
        type: "text",
        placeholder: "What sort of professional help are you seeking?",
        // valueArray: [],
        handleOnChange: {
          inputOnChange: this.handleOnChange,
        },
        value: "",
        error: {
          message: "",
          noError: null,
        },
      },
     
      chipInput: {
        name: "chipInput",
        type: "chipInput",
        placeholder: "Enter Tags",
        value: "",
        valueArray: [],
        handleOnChange: {
          inputOnChange: {
            handleAddChip: this.handleAddChip,
            handleDeleteChip: this.handleDeleteChip,
          },
        },
        error: {
          message: "",
          noError: null,
        },
      },
    },
    validate: {
      orgNameError: {
        noError: null,
        message: "",
      },
      descriptionError: {
        noError: null,
        message: "",
      },
      emailError: {
        noError: null,
        message: "",
      },
      pitchError: {
        noError: null,
        message: "",
      },
      helpNeededError: {
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
      case "orgName":
        let validatedOrgName;
        validatedOrgName = validator.isEmpty(inputValue);

        if (validatedOrgName) {
          errorState.orgNameError.noError = false;
          errorState.orgNameError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.orgNameError.noError = true;
          errorState.orgNameError.message = "";
          return errorState;
        }

      case "pitch":
        let validatedPitch;
        validatedPitch = validator.isEmpty(inputValue);

        if (validatedPitch) {
          errorState.pitchError.noError = false;
          errorState.pitchError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.pitchError.noError = true;
          errorState.pitchError.message = "";
          return errorState;
        }
      case "description":
        let validatedDescription;
        validatedDescription = validator.isEmpty(inputValue);

        if (validatedDescription) {
          errorState.descriptionError.noError = false;
          errorState.descriptionError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.descriptionError.noError = true;
          errorState.descriptionError.message = "";
          return errorState;
        }
      case "email":
        let validatedEmail;
        validatedEmail = validator.isEmail(inputValue);

        if (!validatedEmail) {
          errorState.emailError.noError = false;
          errorState.emailError.message = "Please enter a valid email";
          return errorState;
        } else {
          errorState.emailError.noError = true;
          errorState.emailError.message = "";
          return errorState;
        }
      // case "helpNeeded":
      //   let validatedHelpNeeded;
      //   validatedHelpNeeded = validator.isEmpty(inputValue);

      //   if (!validatedHelpNeeded) {
      //     errorState.helpNeededError.noError = false;
      //     errorState.helpNeededError.message = "Can not be empty";
      //     return errorState;
      //   } else {
      //     errorState.helpNeededError.noError = true;
      //     errorState.helpNeededError.message = "";
      //     return errorState;
      //   }
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
    const { orgName,poc, email, helpNeeded,pitch, description, zip, chipInput } = this.state;
    const values = { orgName,poc, email, helpNeeded,pitch, description, zip, chipInput };

    switch (step) {
      case 1:
        return (
          <FormOrganizationDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormDescription
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormHelpNeeded
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
       
    }
  }
}

export default UserForm;
