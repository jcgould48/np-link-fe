import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {withAuth} from 'react-devise';
import { Field, reduxForm } from 'redux-form';
import { signup } from "../../redux/actions/authUserAction";

const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    // if (!values.age) {
    //   errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //   errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //   errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors
  }
  
  // const warn = values => {
  //   const warnings = {}
  //   if (values.age < 19) {
  //     warnings.age = 'Hmm, you seem a bit young...'
  //   }
  //   return warnings
  // }
  
  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
 

  class SimpleForm extends Component {
    handleSubmit(data) {
       console.log('Submission received!', data);
     } 
     render() {
       const { handleSubmit, pristine, reset, submitting } = this.props
       return (
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field
                name="email"
                component={renderField}
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
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
            </div>
          </div>
          <div>
            <label>Profession</label>
            <div>
              <Field
                name="profession"
                component="input"
                type="text"
                placeholder="Profession"
              />
            </div>
          </div>
          <div>
            <label>Areas of Expertise</label>
            <div>
              <Field name="expertise" component="select">
                <option />
                <option value="law">Law</option>
                <option value="marketing">Marketing</option>
                <option value="fundraising">Fundraising</option>
                <option value="mentalHealth">Mental Health</option>
                <option value="research">Research</option>
                <option value="accounting">Accounting</option>
                <option value="administration">Administration</option>
              </Field>
            </div>
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
            <label>Comments</label>
            <div>
              <Field name="comments" component="textarea" />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting} onClick={handleSubmit}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
      )
    }
  }


SimpleForm = reduxForm({
  form: 'simple',
  validate,
  // warn // a unique name for this form
})(SimpleForm);


const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, {signup})(SimpleForm);