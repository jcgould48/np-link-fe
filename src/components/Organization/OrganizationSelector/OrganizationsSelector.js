import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './SelectorComponents/Header';
import OrganizationCard from './SelectorComponents/OrganizationCard';
import Empty from './SelectorComponents/Empty';
// import data from '../../../data.json';
import {getRelevantOrganizations, likedOrganization} from "../../../redux/actions/selectorActions"
import './OrganizationSelector.css';


export class OrganizationSelector extends Component {
  state = {
    // people: [],
    // likedOrgs:[],
    // disLikedOrgs:[],
    activeUser : 0
  };
  
 
 async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      // console.log("Tinder Swiper")
      // await this.props.getRelevantOrganizations();
      await this.props.getRelevantOrganizations();

    }
  }


  render(){
    const {relevantOrgs, likedOrgs}= this.props.selector
  return (
    <div className="app">
      <br/>
      <Header />
      
      {relevantOrgs[1] ? (
        <OrganizationCard
          key={relevantOrgs[1].id}
          organization={relevantOrgs[1]}
          // handleLiked={this.props.handleLiked}
          // likedOrgs={likedOrgs}
        />
      ) : (
        // <div>DONE</div>
        <Empty
          // activeUserImage={relevantOrgs[0].image}
          likedOrgs={likedOrgs}
        />
      )}
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  selector: state.selector,
  authUser: state.authUser,
});
export default connect(mapStateToProps, { getRelevantOrganizations, likedOrganization})(
  OrganizationSelector
);