import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched === true ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.touched === true ? (
          <div className="ui error message"> <b> {meta.error} </b> </div>
        ) : null}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter the stream name"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter the description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";
  return errors;
};

export default reduxForm({ form: "Streamy", validate })(StreamCreate);
