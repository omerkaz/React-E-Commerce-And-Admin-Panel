import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../products/productsSlice";
import { loginError, loginStart, loginSuccess } from "./adminSlice";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.products.length < 1 && this.props.loadProducts();
  }

  onEnter = (event) => {
    if (event.key === "Enter") {
      this.onSubmit();
    }
  };
  onUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    this.props.loginStart();
    if (
      this.state.password === this.props.admin.password &&
      this.state.userName === this.props.admin.id
    ) {
      this.props.loginSuccess();
    } else {
      this.props.loginError({
        payload: "Please enter a correct id and password.",
      });
    }
  };

  render() {
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeTextX"
                        className="form-control form-control-lg"
                        onChange={this.onUserNameChange}
                        onKeyPress={this.onEnter}
                        placeholder="ID"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={this.onPasswordChange}
                        onKeyPress={this.onEnter}
                        placeholder="Password"
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={this.onSubmit}
                    >
                      Login
                    </button>

                    {this.props.admin.status === "false" && (
                      <>
                        <p className="mt-5">
                          {this.props.admin.errorMessage.payload}
                        </p>
                        <p>{"ID: admin Password: admin"}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin,
  products: state.products.list,
});
const mapDispatchToProps = {
  loginStart: loginStart,
  loginSuccess: loginSuccess,
  loginError: loginError,
  loadProducts: loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
