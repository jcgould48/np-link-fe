import React, { Component } from "react";
import { connect } from "react-redux";

// import DatePicker from "react-datepicker";
import ChipInput from "material-ui-chip-input";
// import { parseISO } from "date-fns";
// import ButtonGroup from "../shared/ButtonGroup";
import Button from '@material-ui/core/Button';
import { getAllOrganizations } from "../../redux/actions/organizationAction";
import OrganizationModal from "./OrganizationModal"
import "./AuthOrg.css"
export class EditOrganizations extends Component {
  state = {
    isOpen: false,
    item: null,
  };

  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      await this.props.getAllOrganizations();
    }
  }

  onModalOpen = (item) => {
    this.setState({
      isOpen: true,
      item,
    });
  };

  onModalClose = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState,
      };
    });
  };

  handleDelete = async (item) => {
    try {
    } catch (e) {}
  };

  render() {
    const { isOpen, item } = this.state;

    return (
      <>
        <hr />
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <th>Organization</th>
                <th>Email</th>
                <th>Help Needed</th>
              </tr>
              {this.props.organization.organizations.map((item) => {
                const {
                  orgName,
                  email,
                  helpNeeded,
                  _id,
                } = item;
                return (
                  <tr key={_id}>
                    <td >{orgName}</td>
                    <td>{email}</td>
                    <td >{helpNeeded}</td>
                    <td>
                      <Button
                         color="primary"
                         variant="contained"
                        onClick={() => this.onModalOpen(item)}
                      >
                        Edit
                      </Button>
                    </td>
                    {/* <td>
                      <ButtonGroup
                        title="Delete"
                        buttonStyle="form-button form-button-delete edit-button"
                        disabled={false}
                        onClick={() => this.handleDelete(item)}
                      />
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {isOpen ? (
            <OrganizationModal
              isOpen={isOpen}
              onModalClose={this.onModalClose}
              {...item}
            />
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    organization: state.organization,
    authUser: state.authUser,
});

export default connect(mapStateToProps, { getAllOrganizations })(
    EditOrganizations
);
