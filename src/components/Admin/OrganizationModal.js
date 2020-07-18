import React, { Component } from "react";
import { connect } from "react-redux";
// import { parseISO } from "date-fns";
// import DatePicker from "react-datepicker";

import ChipInput from "material-ui-chip-input";
import Modal from "react-modal";

// import addDays from "date-fns/addDays";
// import setMinutes from "date-fns/setMinutes";
// import setHours from "date-fns/setHours";

import ButtonGroup from "../shared/ButtonGroup";
// import {
//   sendBirthdayTextNow,
//   sendScheduledBirthdayText,
// } from "../../../redux/actions/birthdayAction";
import { successToast, failureToast } from "../Toastify/Toast"
// import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: 400,
    width: "85%",
  },
};

class OrganizationModal extends Component {

  render() {
    const {
    isOpen,
    onModalClose,
    orgName,
    pitch,
    description,
    email,
    helpNeeded,
    keyWords,
    chipInput,
    _id,
    } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onModalClose} style={customStyles}>
        <span onClick={onModalClose} style={{ float: "right" }}>
          X
        </span>
        <table>
          <tbody>
            <tr>
            <th>Organization Name</th>
            <th>Pitch</th>
            <th>Email</th>
            <th>Help Needed</th>
            <th>Description</th>
            <th>Interests Tags</th>
              <th>Schedule</th>
              <th>Send Now</th>
            </tr>
            <tr key={_id}>
              <td>{orgName}</td>
              <td>{pitch}</td>
              {/* <td>
                <DatePicker
                  className="birthday--input-date-list"
                  selected={parseISO(birthday)}
                  disabled
                />
              </td> */}
              <td>{email}</td>
              <td>{helpNeeded}</td>
              <td>
                <ChipInput
                  className="birthday--chip"
                  value={keyWords}
                  disabled
                />
              </td>
              {/* <td>
                <DatePicker
                  className="birthday--input-date-list"
                  selected={this.state.scheduleDateAndTime}
                  onChange={this.handleScheduleChange}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 30)}
                  minTime={setMinutes(new Date(), new Date().getMinutes())}
                  maxTime={setHours(setMinutes(new Date(), 59), 23)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={1}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  locale="en"
                />
              </td>
              <td>
                <ButtonGroup
                  title="Send Message"
                  buttonStyle="form-button edit-button"
                  disabled={false}
                  onClick={this.handleSubmitSchedule}
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </Modal>
    );
  }
}

export default connect(null, {
  
})(OrganizationModal);
