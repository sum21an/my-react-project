import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const customInitialValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: ""
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!")
});
class Register extends React.Component {
  handleCreateUser = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center my-5">Registration Form</h2>
        <Formik
          initialValues={customInitialValues}
          validate={validationSchema}
          onSubmit={this.handleCreateUser}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleReset
          }) => (
            <Form>
              <FormGroup>
                <Label for="username">User Name</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter User Name"
                  valid={!errors}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={touched.username && !!errors.username}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  id="email"
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Email Password</Label>
                <Input type="text" placeholder="Enter Password" id="password" />
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="passwordConfirm">Confirm Password</Label>
                <Input
                  type="text"
                  placeholder="Confirm Password"
                  id="passwordConfirm"
                />
                <FormFeedback>{errors.passwordConfirm}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Button
                  color="danger"
                  className="mr-1"
                  type="reset"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button type="submit" color="success">
                  Submit
                </Button>
              </FormGroup>
              <FormGroup>
                <p>
                  Already have an account? <Link to="/login">click here</Link>
                </p>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Register;
