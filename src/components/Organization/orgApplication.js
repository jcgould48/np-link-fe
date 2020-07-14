import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import ButtonGroup from "../../shared/ButtonGroup";

import MultiInputGroup from "../../shared/MultiInputGroup";
import { createBirthday } from "../../../redux/actions/birthdayAction";
import { successToast, failureToast } from "../../Toastify/Toast";

import "./CreateBirthday.css";

export class CreateBirthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: true,
      formSetting: {
        firstName: {
          name: "firstName",
          type: "text",
          placeholder: "Enter first Name",
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
          placeholder: "Enter Last Name",
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
        phone: {
          name: "phone",
          type: "phone",
          placeholder: "Enter Mobile",
          handleOnChange: {
            inputOnChange: this.handleOnChange,
          },
          value: "",
          error: {
            message: "",
            noError: null,
          },
        },
        dateInput: {
          name: "dateInput",
          type: "dateInput",
          startDate: new Date(),
          value: "",
          handleOnChange: {
            inputOnChange: this.handleOnDateChange,
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
        firstNameError: {
          noError: null,
          message: "",
        },
        lastNameError: {
          noError: null,
          message: "",
        },
        emailError: {
          noError: null,
          message: "",
        },
        phoneError: {
          noError: null,
          message: "",
        },
      },
    };
  }

  checkInputValidation = (errorState, inputName, inputValue) => {
    switch (inputName) {
      case "firstName":
        let validatedFirstName;
        validatedFirstName = validator.isEmpty(inputValue);

        if (validatedFirstName) {
          errorState.firstNameError.noError = false;
          errorState.firstNameError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.firstNameError.noError = true;
          errorState.firstNameError.message = "";
          return errorState;
        }

      case "lastName":
        let validatedLastName;
        validatedLastName = validator.isEmpty(inputValue);

        if (validatedLastName) {
          errorState.lastNameError.noError = false;
          errorState.lastNameError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.lastNameError.noError = true;
          errorState.lastNameError.message = "";
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
      case "phone":
        let validatedNumber;
        validatedNumber = validator.isMobilePhone(inputValue);

        if (!validatedNumber) {
          errorState.phoneError.noError = false;
          errorState.phoneError.message = "Please enter a real number";
          return errorState;
        } else {
          errorState.phoneError.noError = true;
          errorState.phoneError.message = "";
          return errorState;
        }
      default:
        return errorState;
    }
  };

  handleOnChange = (event) => {
    let inputForm = {
      ...this.state.formSetting,
    };

    inputForm[event.target.name].value = event.target.value;

    let isValidatedCheck = this.checkInputValidation(
      this.state.validate,
      event.target.name,
      event.target.value
    );

    inputForm["firstName"].error = isValidatedCheck.firstNameError;
    inputForm["lastName"].error = isValidatedCheck.lastNameError;
    inputForm["email"].error = isValidatedCheck.emailError;
    inputForm["phone"].error = isValidatedCheck.phoneError;

    this.setState({
      ...this.state,
      formSetting: inputForm,
    });

    if (
      inputForm["firstName"].error.noError === false ||
      inputForm["lastName"].error.noError === false ||
      inputForm["email"].error.noError === false ||
      inputForm["phone"].error.noError === false
    ) {
      this.setState({
        canSubmit: true,
      });
      return;
    }

    if (
      inputForm["firstName"].error.noError === true &&
      inputForm["lastName"].error.noError === true &&
      inputForm["email"].error.noError === true &&
      inputForm["phone"].error.noError === true
    ) {
      this.setState({
        canSubmit: false,
      });
      return;
    } else {
      this.setState({
        ...this.state,
        formSetting: inputForm,
      });
      return;
    }
  };

  handleOnDateChange = (date) => {
    let inputForm = {
      ...this.state.formSetting,
    };

    inputForm["dateInput"].startDate = date;

    this.setState({
      ...this.state,
      formSetting: inputForm,
    });
  };

  handleAddChip = (chip) => {
    let inputForm = {
      ...this.state.formSetting,
    };

    let newArray = [...inputForm["chipInput"].valueArray, chip];

    inputForm["chipInput"].valueArray = newArray;

    this.setState({
      ...this.state,
      formSetting: inputForm,
    });
  };

  handleDeleteChip = (deletingChip, index) => {
    let inputForm = {
      ...this.state.formSetting,
    };

    let newArray = inputForm["chipInput"].valueArray.filter(
      (chip) => chip !== deletingChip
    );

    inputForm["chipInput"].valueArray = newArray;

    this.setState({
      ...this.state,
      formSetting: inputForm,
    });
  };

  handleBirthdaySubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        chipInput,
        dateInput,
        firstName,
        lastName,
        email,
        phone,
      } = this.state.formSetting;

      let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        birthday: dateInput.startDate,
        interests: chipInput.valueArray,
        mobile: phone.value,
        email: email.value,
      };

      await this.props.createBirthday(userObj);

      let inputForm = {
        ...this.state.formSetting,
      };

      inputForm["firstName"].value = "";
      inputForm["lastName"].value = "";
      inputForm["dateInput"].startDate = new Date();
      inputForm["chipInput"].valueArray = [];
      inputForm["email"].value = "";
      inputForm["phone"].value = "";

      this.setState({
        ...this.state,
        formSetting: inputForm,
        canSubmit: false,
      });
    } catch (e) {
      failureToast(e);
    }
  };

  render() {
    const { canSubmit, formSetting } = this.state;
    let inputArray = [];

    for (let key in formSetting) {
      inputArray.push({
        formSetting: formSetting[key],
      });
    }
    return (
      <div className="birthday">
        <div className="birthday--input-container">
          <form className="signup-form" onSubmit={this.handleBirthdaySubmit}>
            {inputArray.map((element) => {
              const {
                formSetting: {
                  name,
                  type,
                  value,
                  handleOnChange,
                  placeholder,
                  error,
                  startDate,
                  valueArray,
                },
              } = element;

              return (
                <MultiInputGroup
                  type={type}
                  value={value}
                  handleOnChange={handleOnChange}
                  placeholder={placeholder}
                  error={error}
                  name={name}
                  key={name}
                  startDate={startDate}
                  valueArray={valueArray}
                />
              );
            })}
            <br />
            <ButtonGroup
              buttonStyle="form-button"
              title="Submit"
              disabled={canSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createBirthday })(CreateBirthday);
