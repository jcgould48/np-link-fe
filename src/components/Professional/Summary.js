
// import React from 'react'
// import { connect } from "react-redux";
// import { Field, reduxForm } from 'redux-form'
// import validate from '../shared/Validate'
// import renderField from '../shared/RenderField'
// import ButtonGroup from "../shared/ButtonGroup";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

 



//  const Summary = props => {
//   const { handleSubmit, previousPage,handle } = props
//   // console.log("Prof", {handleSubmit})
  
//   // console.log("Professional3", this.state)
//   handle=(values)=>{
//     console.log("Professional2")
//   }
//   return (
//     <>
// <h1>
//   Test</h1>

//   <ButtonGroup
//             buttonStyle="form-button"
//             title="Sign up"
//             onClick={this.handle}
//           />
//     </>
//   )
// }

// const mapStateToProps = state => ({
//   authUser: state.authUser,
//   form: state.formReducer,
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     // ...
//   })
  
//   Summary = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Summary)


// export default reduxForm({
//     form: 'professional', //Form name is same
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//     validate
//     })(Summary)