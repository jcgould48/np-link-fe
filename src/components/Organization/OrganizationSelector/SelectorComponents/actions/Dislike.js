import React, { useState, Component } from 'react';
import { connect } from "react-redux";
import {dislikedOrganization} from "../../../../../redux/actions/selectorActions"


export class Dislike extends Component {

  handleDisliked= async(item)=>{
    try{
      console.log("handle dislike", item)
        await this.props.dislikedOrganization(item)
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
    onClick={() => this.handleDisliked(organization)}
  >
    <img src="images/misc/dislike.png" alt="Dislike User" />
  </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selector: state.selector
})


export default connect(mapStateToProps, {dislikedOrganization})(Dislike)

