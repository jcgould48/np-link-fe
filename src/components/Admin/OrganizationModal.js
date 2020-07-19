import React, { Component } from "react";
import { connect } from "react-redux";
import ChipInput from "material-ui-chip-input";
import Modal from "react-modal";

import ButtonGroup from "../shared/ButtonGroup";
import { deleteOrganization,  approveOrganization } from "../../redux/actions/organizationAction";
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
  
  handleDelete = async () => {
    try {
        // console.log("Next step", this.props._id)
        await this.props.deleteOrganization(this.props._id);

      successToast("Item Deleted!");
    } catch (e) {
      failureToast(e);
    }
}
// handleEdit= async (e) => {
//   e.preventDefault();
//   console.log("HERE")
//   try {
//     const {
//       chipInput,
//       orgName,
//       pitch,
//       description,
//       // helpNeeded,
//       email,
//     } = this.state.formSetting;

//     let userObj = {
//       orgName: orgName.value,
//       pitch: pitch.value,
//       description: description.value,
//       hashTags: chipInput.valueArray,
//       // helpNeeded: helpNeeded.value,
//       email: email.value,
//     };
//     console.log("userObj", userObj)

//     await this.props.editOrganization(userObj);

   
//   } catch (e) {
//     failureToast(e);
//   }
// };
  handleApprove = async (item) => {
    let orgObj = {
      _id: this.props._id,
    };
    console.log("module", orgObj)
    try{
      
      await this.props.approveOrganization(orgObj);
      successToast("Organization Approved")
    } catch (e) {
        failureToast(e);
      };
    }


  render() {
    const {
    isOpen,
    onModalClose,
    orgName,
    pitch,
    description,
    email,
    helpNeeded,
    hashTags,
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
            {/* <th>Description</th> */}
            <th>Interests Tags</th>
            </tr>
            <tr key={_id}>
              <td>{orgName}</td>
              <td>{pitch}</td>
              <td>{email}</td>
              <td>{helpNeeded}</td>
              <td>
                <ChipInput
                  className="birthday--chip"
                  value={hashTags}
                  disabled
                />
              </td>
              <td>
                      <ButtonGroup
                        title="Approve"
                        style={{ backgroundColor: "blue" }}
                        buttonStyle="form-button edit-button"
                        disabled={false}
                        onClick={this.handleApprove}
                      />
                    </td>
              <td>
                      <ButtonGroup
                        title="Edit"
                        style={{ backgroundColor: "blue" }}
                        buttonStyle="form-button edit-button"
                        disabled={false}
                        onClick={this.handelEdit}
                      />
                    </td>
                    <td>
                      <ButtonGroup
                        title="Delete"
                        buttonStyle="form-button form-button-delete edit-button"
                        disabled={false}
                        onClick={this.handleDelete}
                      />
                    </td>
            </tr>
          </tbody>
        </table>
      </Modal>
    );
  }
}

export default connect(null, {
  deleteOrganization, approveOrganization
})(OrganizationModal);
