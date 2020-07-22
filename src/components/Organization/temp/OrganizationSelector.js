import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllOrganizations,getRelevantOrganizations, interestedOrg, notInterestedOrg} from "../../../redux/actions/organizationAction";
import { successToast, failureToast } from "../../Toastify/Toast";
import ButtonGroup from "../../shared/ButtonGroup";



class OrganizationSelector extends Component {
  
  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      console.log("step1")
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
  handleTest = async (item) => {
    try{
      
      // this.setState({
      //   availability: false
      // })
      console.log("####$$$", item)
      await this.props.getRelevantOrganizations(item);
      // successToast("Item Rented")
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
                  orgName,
                  pitch,
                  description,
                  helpNeeded,
                  _id
                } = orgCard;
                console.log("ITEMCARD", orgCard);
                return (
        <div className="card" key={_id}>
            <img className="card-img-top" src="/images/logo.png" alt="Card image cap" style={{width:"210px", justifyContent:"center"}} />
            <div className="card-body">
                <h5 className="card-title">{orgName}</h5>
                <p className="card-text">{pitch}</p>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Help Needed: {helpNeeded}</p>
                
                <ButtonGroup
                buttonStyle="form-button-rent"
                className="btn btn-outline-primary"
                title="Interested!"
                onClick={() => this.handleInterested(orgCard)}
              />
              
              <ButtonGroup
                buttonStyle="form-button-wait"
                className="btn btn-primary"
                title="Not Interested"
                onClick={() => this.handleNotInterested(orgCard)}
              />
              <ButtonGroup
                buttonStyle="form-button-wait"
                className="btn btn-primary"
                title="TEST"
                onClick={() => this.handleTest(orgCard)}
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
  export default connect(mapStateToProps, { getAllOrganizations,getRelevantOrganizations, notInterestedOrg, interestedOrg })(
    OrganizationSelector
  );
