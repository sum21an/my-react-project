import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/Action/LoginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: ""
    };
  }

  handleUserChangeData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginUser = () => {
    const { loginData } = this.props;
    const { userid, password } = this.state;
    const requestData = {
      userid,
      password
    };
    loginData(requestData);
  };

  render() {
    const { userid, password } = this.state;
    return (
      <div className="container">
        <h2>Login</h2>
        <form className="form mt-4">
          <div className="form-group">
            <label htmlFor="userid">User ID</label>
            <input
              type="email"
              name="userid"
              className="form-control"
              placeholder="examples@gmail.com"
              value={userid}
              onChange={this.handleUserChangeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="suman123"
              value={password}
              onChange={this.handleUserChangeData}
            />
          </div>
          <button className="btn btn-success" onClick={this.handleLoginUser}>
            Login
          </button>
        </form>
        <div className="d-flex mt-4">
          <p>Don't have an Account?</p>
          <Link to="/register" className="pl-2">
            click here
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginData: data => dispatch(loginUser(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
