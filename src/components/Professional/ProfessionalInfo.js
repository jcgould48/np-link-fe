import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import validate from '../shared/Validate'
import renderField from '../shared/RenderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

let Professional = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
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
  
  Professional = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Professional)

export default reduxForm({
  form: 'professional', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Professional)