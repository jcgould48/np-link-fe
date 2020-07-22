// import React, { Component } from "react";
// import { connect } from "react-redux";
// import validator from "validator";
// import ButtonGroup from "../shared/ButtonGroup";

// import MultiInputGroup from "../shared/MultiInputGroup";
// import { createOrganization } from "../../redux/actions/organizationAction";
// import { successToast, failureToast } from "../Toastify/Toast";

// export class CreateOrganization extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       canSubmit: true,
//       formSetting: {
//         orgName: {
//           name: "orgName",
//           type: "text",
//           placeholder: "Enter Organization's Name",
//           handleOnChange: {
//             inputOnChange: this.handleOnChange,
//           },
//           value: "",
//           error: {
//             message: "",
//             noError: null,
//           },
//         },
//         pitch: {
//           name: "pitch",
//           type: "text",
//           placeholder: "Enter 1-2 sentence pitch ",
//           handleOnChange: {
//             inputOnChange: this.handleOnChange,
//           },
//           value: "",
//           error: {
//             message: "",
//             noError: null,
//           },
//         },
//         description: {
//           name: "description",
//           type: "text",
//           placeholder: "Describe your organization",
//           handleOnChange: {
//             inputOnChange: this.handleOnChange,
//           },
//           value: "",
//           error: {
//             message: "",
//             noError: null,
//           },
//         },
//         email: {
//           name: "email",
//           type: "email",
//           placeholder: "Enter Email",
//           handleOnChange: {
//             inputOnChange: this.handleOnChange,
//           },
//           value: "",
//           error: {
//             message: "",
//             noError: null,
//           },
//         },
    
//         // helpNeeded: {
//         //   name: "helpNeeded",
//         //   type: "text",
//         //   placeholder: "What sort of professional help are you seeking?",
//         //   // valueArray: [],
//         //   handleOnChange: {
//         //     inputOnChange: this.handleOnChange,
//         //   },
//         //   value: "",
//         //   error: {
//         //     message: "",
//         //     noError: null,
//         //   },
//         // },
       
//         chipInput: {
//           name: "chipInput",
//           type: "chipInput",
//           placeholder: "Enter Tags",
//           value: "",
//           valueArray: [],
//           handleOnChange: {
//             inputOnChange: {
//               handleAddChip: this.handleAddChip,
//               handleDeleteChip: this.handleDeleteChip,
//             },
//           },
//           error: {
//             message: "",
//             noError: null,
//           },
//         },
//       },
//       validate: {
//         orgNameError: {
//           noError: null,
//           message: "",
//         },
//         descriptionError: {
//           noError: null,
//           message: "",
//         },
//         emailError: {
//           noError: null,
//           message: "",
//         },
//         pitchError: {
//           noError: null,
//           message: "",
//         },
//         helpNeededError: {
//           noError: null,
//           message: "",
//         },
  
//       },
//     };
//   }

//   checkInputValidation = (errorState, inputName, inputValue) => {
//     switch (inputName) {
//       case "orgName":
//         let validatedOrgName;
//         validatedOrgName = validator.isEmpty(inputValue);

//         if (validatedOrgName) {
//           errorState.orgNameError.noError = false;
//           errorState.orgNameError.message = "Cannot be empty";
//           return errorState;
//         } else {
//           errorState.orgNameError.noError = true;
//           errorState.orgNameError.message = "";
//           return errorState;
//         }

//       case "pitch":
//         let validatedPitch;
//         validatedPitch = validator.isEmpty(inputValue);

//         if (validatedPitch) {
//           errorState.pitchError.noError = false;
//           errorState.pitchError.message = "Cannot be empty";
//           return errorState;
//         } else {
//           errorState.pitchError.noError = true;
//           errorState.pitchError.message = "";
//           return errorState;
//         }
//       case "description":
//         let validatedDescription;
//         validatedDescription = validator.isEmpty(inputValue);

//         if (validatedDescription) {
//           errorState.descriptionError.noError = false;
//           errorState.descriptionError.message = "Cannot be empty";
//           return errorState;
//         } else {
//           errorState.descriptionError.noError = true;
//           errorState.descriptionError.message = "";
//           return errorState;
//         }
//       case "email":
//         let validatedEmail;
//         validatedEmail = validator.isEmail(inputValue);

//         if (!validatedEmail) {
//           errorState.emailError.noError = false;
//           errorState.emailError.message = "Please enter a valid email";
//           return errorState;
//         } else {
//           errorState.emailError.noError = true;
//           errorState.emailError.message = "";
//           return errorState;
//         }
//       // case "helpNeeded":
//       //   let validatedHelpNeeded;
//       //   validatedHelpNeeded = validator.isEmpty(inputValue);

//       //   if (!validatedHelpNeeded) {
//       //     errorState.helpNeededError.noError = false;
//       //     errorState.helpNeededError.message = "Can not be empty";
//       //     return errorState;
//       //   } else {
//       //     errorState.helpNeededError.noError = true;
//       //     errorState.helpNeededError.message = "";
//       //     return errorState;
//       //   }
//       default:
//         return errorState;
//     }
//   };

//   handleOnChange = (event) => {
//     let inputForm = {
//       ...this.state.formSetting,
//     };

//     inputForm[event.target.name].value = event.target.value;

//     let isValidatedCheck = this.checkInputValidation(
//       this.state.validate,
//       event.target.name,
//       event.target.value
//     );

//     inputForm["orgName"].error = isValidatedCheck.orgNameError;
//     inputForm["pitch"].error = isValidatedCheck.pitchError;
//     inputForm["description"].error = isValidatedCheck.descriptionError;
//     inputForm["email"].error = isValidatedCheck.emailError;
//     // inputForm["helpNeeded"].error = isValidatedCheck.helpNeededError;

//     this.setState({
//       ...this.state,
//       formSetting: inputForm,
//     });

//     if (
//       inputForm["orgName"].error.noError === false ||
//       inputForm["pitch"].error.noError === false ||
//       inputForm["description"].error.noError === false ||
//       inputForm["email"].error.noError === false 
//       // inputForm["helpNeeded"].error.noError === false
//     ) {
//       this.setState({
//         canSubmit: true,
//       });
//       return;
//     }

//     if (
//       inputForm["orgName"].error.noError === true &&
//       inputForm["pitch"].error.noError === true &&
//       inputForm["description"].error.noError === true &&
//       inputForm["email"].error.noError === true 
//       // inputForm["helpNeeded"].error.noError === true
//     ) {
//       this.setState({
//         canSubmit: false,
//       });
//       return;
//     } else {
//       this.setState({
//         ...this.state,
//         formSetting: inputForm,
//       });
//       return;
//     }
//   };


//   handleAddChip = (chip) => {
//     let inputForm = {
//       ...this.state.formSetting,
//     };

//     let newArray = [...inputForm["chipInput"].valueArray, chip];

//     inputForm["chipInput"].valueArray = newArray;

//     this.setState({
//       ...this.state,
//       formSetting: inputForm,
//     });
//   };

//   handleDeleteChip = (deletingChip, index) => {
//     let inputForm = {
//       ...this.state.formSetting,
//     };

//     let newArray = inputForm["chipInput"].valueArray.filter(
//       (chip) => chip !== deletingChip
//     );

//     inputForm["chipInput"].valueArray = newArray;

//     this.setState({
//       ...this.state,
//       formSetting: inputForm,
//     });
//   };

//   handleApplicationSubmit = async (e) => {
//     e.preventDefault();
//     console.log("HERE")
//     try {
//       const {
//         chipInput,
//         orgName,
//         pitch,
//         description,
//         // helpNeeded,
//         email,
//       } = this.state.formSetting;

//       let userObj = {
//         orgName: orgName.value,
//         pitch: pitch.value,
//         description: description.value,
//         hashTags: chipInput.valueArray,
//         // helpNeeded: helpNeeded.value,
//         email: email.value,
//         approved: false,
//       };
//       console.log("userObj", userObj)

//       await this.props.createOrganization(userObj);

//       let inputForm = {
//         ...this.state.formSetting,
//       };

//       inputForm["orgName"].value = "";
//       inputForm["pitch"].value = "";
//       inputForm["description"].value = "";
//       // inputForm["helpNeeded"].value = "";
//       inputForm["chipInput"].valueArray = [];
//       inputForm["email"].value = "";

//       this.setState({
//         ...this.state,
//         formSetting: inputForm,
//         canSubmit: false,
//       });
//     } catch (e) {
//       failureToast(e);
//     }
//   };

//   render() {
//     const { canSubmit, formSetting } = this.state;
//     let inputArray = [];

//     for (let key in formSetting) {
//       inputArray.push({
//         formSetting: formSetting[key],
//       });
//     }
//     return (
//       <div className="birthday">
//         <div className="birthday--input-container">
//           <form className="signup-form" onSubmit={this.handleApplicationSubmit}>
//             {inputArray.map((element) => {
//               const {
//                 formSetting: {
//                   name,
//                   type,
//                   value,
//                   handleOnChange,
//                   placeholder,
//                   error,
//                   startDate,
//                   valueArray,
//                 },
//               } = element;

//               return (
//                 <MultiInputGroup
//                   type={type}
//                   value={value}
//                   handleOnChange={handleOnChange}
//                   placeholder={placeholder}
//                   error={error}
//                   name={name}
//                   key={name}
//                   startDate={startDate}
//                   valueArray={valueArray}
//                 />
//               );
//             })}
//             <br />
//             <ButtonGroup
//               buttonStyle="form-button"
//               title="Submit"
//               disabled={canSubmit}
//             //   variant="contained"
//             // color="primary"
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(null, { createOrganization })(CreateOrganization);
