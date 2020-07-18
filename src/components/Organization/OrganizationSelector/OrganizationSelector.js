import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllOrganizations, interestedOrg, notInterestedOrg} from "../../../redux/actions/organizationAction";
import { successToast, failureToast } from "../../Toastify/Toast";
import ButtonGroup from "../../SharedGroup/ButtonGroup";




class OrganizationSelector extends Component {
  
  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      await this.props.getAllOrganizations();
    }
  }
  handleInterested = async (item) => {
    try{
      
      // this.setState({
      //   availability: false
      // })
      // console.log("####$$$", item)
      await this.props.interestedOrg(item);
      successToast("Item Rented")
    } catch (e) {
        failureToast(e);
      };
    }

   
  handleNotInterested = async (item) => {
    try {
      // console.log("is this button working")
      await this.props.notInterestedOrg(item);
      successToast("Wait Listed!");
    } catch (e) {
      failureToast(e);
    }
  };
  render() {
    // const { itemCard } = this.state;
    // console.log("####", this.props);
    return (
      <div className="background-page">
      <br></br>
      <div className="logo-header">
      <img  className="main-logo" src="" alt="Main Logo" />
        </div>
        <hr />
        <div className="table-container">
          {this.props.organization.organizations.length > 0
            ? this.props.organization.organizations.map((orgCard) => {
                const {
                //   itemName,
                //   rentAmount,
                //   description,
                //   availability,
                //   _id
                } = orgCard;
                // console.log("ITEMCARD", itemCard);
                return (
        <div className="card" key={_id}>
            <img className="card-img-top" src="/images/logo.png" alt="Card image cap" style={{width:"210px", justifyContent:"center"}} />
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">Weekly Price: ${rentAmount}</p>
                <p className="card-text">Description: {description}</p>
                
                <ButtonGroup
                buttonStyle="form-button-rent"
                className="btn btn-outline-primary"
                title="Rent Now!"
                onClick={() => this.handleInterested(orgCard)}
              />
              
              <ButtonGroup
                buttonStyle="form-button-wait"
                className="btn btn-primary"
                title="Waiting List"
                onClick={() => this.handleNotInterested(orgCard)}
              />
                
            </div>
            </div>
                )
        }):
        null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    organization: state.organization,
    authUser: state.authUser,
  });
  export default connect(mapStateToProps, { getAllOrganizations, notInterestedOrg, interestedOrg })(
    OrganizationSelector
  );
