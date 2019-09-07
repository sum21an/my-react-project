import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegister = () => {
    const { username, email, password, passwordConfirm } = this.state;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      console.log("fill all value");
    } else {
      console.log("filled");
    }
  };

  render() {
    const { username, email, password, passwordConfirm } = this.state;

    return (
      <div className="container">
        <form className="form">
          <h1 className="title is-1">Register</h1>
          <div className="form-group">
            <label className="label">User Name:</label>
            <input
              id="username"
              onChange={this.handleChange}
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter a username.."
              value={username}
            />
          </div>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              id="email"
              onChange={this.handleChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter an email.."
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              id="password"
              onChange={this.handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter a password.."
              value={password}
            />
          </div>
          <div className="form-group">
            <label className="label">Confirm Password:</label>
            <input
              id="passwordConfirm"
              onChange={this.handleChange}
              name="passwordConfirm"
              type="password"
              className="form-control"
              placeholder="Confirm password.."
              value={passwordConfirm}
            />
          </div>
          <div className="field">
            <button onClick={this.handleRegister} className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="field">
            <p>
              Already have an account? <Link to="/login">click here</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
