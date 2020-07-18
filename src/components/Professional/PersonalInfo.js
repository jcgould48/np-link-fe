import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import validate from '../shared/Validate'
import renderField from '../shared/RenderField'

let Personal = props => {
    const { handleSubmit } = props
    
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
    authUser: state.authUser,
  form: state.formReducer,
  })
  
  const mapDispatchToProps = dispatch => ({
    // ...
  })
  
  Personal = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Personal)
  

export default reduxForm({
  form: 'professional', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Personal)