import React, { useState, Component } from 'react';
import { connect } from "react-redux";
import {likedOrganization} from "../../../../../redux/actions/selectorActions"


export class Like extends Component {

  handleLiked= async(item)=>{
    try{
      // console.log("handle like", this.props.selector.likedOrgs)
        await this.props.likedOrganization(item)
    } catch(e){
      console.log(e)
    }
  }

  render(){
    const {organization} = this.props
    // console.log("Like user id", organization)
    
    return (
      <div>
         <button
    type="button"
    onClick={() => this.handleLiked(organization)}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selector: state.selector
})


export default connect(mapStateToProps, {likedOrganization})(Like)

