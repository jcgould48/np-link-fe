import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ChipInputGroup from '../../shared/ChipInputGroup'
import classnames from "classnames";
import ChipInput from "material-ui-chip-input";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  constructor(props) {
        super(props);
        this.state = {
          canSubmit: true,
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
        
            // helpNeeded: {
            //   name: "helpNeeded",
            //   type: "text",
            //   placeholder: "What sort of professional help are you seeking?",
            //   // valueArray: [],
            //   handleOnChange: {
            //     inputOnChange: this.handleOnChange,
            //   },
            //   value: "",
            //   error: {
            //     message: "",
            //     noError: null,
            //   },
            // },
           
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
      }
  
  
 
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Type Of Professional Help Needed" />
            <TextField
              placeholder="Enter Type Of Professional Help Needed"
              label="Help Needed"
              onChange={handleChange('helpNeeded')}
              defaultValue={values.helpNeeded}
              margin="normal"
              fullWidth
            />
            <br />
            <ChipInput
        className="chipInput"
        placeholder="Interest Tags"
        value={values.chipInput}
        onAdd={(chip) => this.handleAddChip(chip)}
        onDelete={(chip, index) =>
          this.handleDeleteChip(chip, index)
        }
        //dataSource={["food", "drinks"]}
      />
            {/* <TextField
              placeholder="Enter Tags Related To The Organization"
              label="Hash Tags"
              onChange={handleChange('chipInput')}
              defaultValue={values.chipInput}
              margin="normal"
              fullWidth
            /> */}
          
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;