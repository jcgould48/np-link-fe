import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import validate from '../shared/Validate'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)


let Terms = props => {
    const onSubmit = values =>{
        alert(JSON.stringify(values))
    }
    console.log("here")
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Next
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
    // ...
  })
  
  const mapDispatchToProps = dispatch => ({
    // ...
  })
  
  Terms = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Terms)

export default reduxForm({
  form: 'professional', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Terms)