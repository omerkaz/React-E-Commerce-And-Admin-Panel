import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "./adminSlice";
import "./admin.css";
import Dashboard from "./dashboard/Dashboard";
import Charts from "./charts/Charts";
import Products from "./products/Products";

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: true,
      products: false,
      add: false,
      remove: false,
      charts: false,
    };
  }
  showDashboard = (event) => {
    this.setState({
      dashboard: true,
      products: false,
      charts: false,
      add: false,
      remove: false,
    });
  };
  showProducts = (event) => {
    this.setState({
      products: true,
      dashboard: false,
      charts: false,
      add: false,
      remove: false,
    });
    console.log(this.state);
  };
  productsAdd = (event) => {
    this.setState({
      add: true,
      products: true,
      dashboard: false,
      charts: false,
      remove: false,
    });
    console.log(this.state);
  };

  productsRemove = (event) => {
    this.setState({
      add: false,
      products: true,
      dashboard: false,
      charts: false,
      remove: true,
    });
  };
  showCharts = (event) => {
    this.setState({
      charts: true,
      products: false,
      dashboard: false,
      add: false,
      remove: false,
    });
  };

  handleProductsAddCurrent() {
    if (this.state.products && this.state.add) {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold current text-center`;
    } else if (this.state.products) {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold text-center`;
    } else {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold d-none`;
    }
  }
  handleProductsRemoveCurrent() {
    if (this.state.products && this.state.remove) {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold current`;
    } else if (this.state.products) {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold `;
    } else {
      return `nav-link text-light px-3 py-0 sidebar-link fw-semibold d-none`;
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md d-block navbar-light">
          <button
            className="navbar-toggler ml-auto mb-2 bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="myNavbar">
            <div className="container-fluid mb-5">
              <div className="container">
                <div className="row">
                  {/* <!-- sidebar navbar --> */}
                  <div className="d-block col-lg-3 col-xl-2 col-md-4 sidebar fixed-top">
                    <div className="border-bottom pb-3 mt-4"></div>
                    <ul className="navbar-nav flex-column mt-4">
                      <li className="nav-item pt-3">
                        <a
                          href="#"
                          className={
                            this.state.dashboard
                              ? `nav-link text-light p-3 mb-2 fw-semibold current`
                              : `nav-link text-light p-3 mb-2 fw-semibold `
                          }
                          onClick={this.showDashboard}
                        >
                          {" "}
                          <i
                            className="fa fa-home text-light fa-lg me-3"
                            aria-hidden="true"
                          ></i>{" "}
                          Analytics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className={
                            this.state.products
                              ? `nav-link text-light p-3 sidebar-link fw-semibold current`
                              : `nav-link text-light p-3 sidebar-link fw-semibold `
                          }
                          onClick={this.showProducts}
                        >
                          {" "}
                          <i
                            className="fa fa-shopping-cart text-light fa-lg me-3"
                            aria-hidden="true"
                          ></i>{" "}
                          Products
                        </a>
                      </li>

                      <div className="row g-0">
                        <div className="col-5">
                          <div className="d-flex justify-content-center">
                            <li className="nav-item m-1 text-center">
                              <a
                                href="#"
                                className={this.handleProductsAddCurrent()}
                                onClick={this.productsAdd}
                              >
                                {" "}
                                <i
                                  className="fa fa-plus text-light fa-lg me-2"
                                  aria-hidden="true"
                                ></i>{" "}
                                Add
                              </a>
                            </li>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="d-flex justify-content-center">
                            <li className="nav-item m-1 text-center">
                              <a
                                href="#"
                                className={this.handleProductsRemoveCurrent()}
                                onClick={this.productsRemove}
                              >
                                {" "}
                                <i
                                  className="fa fa-remove text-light fa-lg me-3"
                                  aria-hidden="true"
                                ></i>{" "}
                                Remove
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                      <li className="nav-item">
                        <a
                          href="#"
                          className={
                            this.state.charts
                              ? `nav-link text-light p-3 mb-2 sidebar-link fw-semibold current`
                              : `nav-link text-light p-3 mb-2 sidebar-link fw-semibold `
                          }
                          onClick={this.showCharts}
                        >
                          {" "}
                          <i
                            className="fa fa-area-chart text-light fa-lg me-3"
                            aria-hidden="true"
                          ></i>{" "}
                          Charts
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- end sidebar --> */}

                  {/* <!--  top nav--> */}
                  <div className="col-lg-12 col-xl-12 col-md-12 ms-auto bg-dark fixed-top py-2 top-navbar">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h4 className="text-light text-uppercase mb-0">
                          Dashboard
                        </h4>
                      </div>
                      <div className="col-md-5">
                        <form>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="search-input"
                              placeholder="Search here"
                              style={{ placeholderColor: "white" }}
                            />
                            <button
                              type="button"
                              className="btn btn-light ms-4"
                              id="search-button"
                            >
                              <i className="fa fa-search text-muted"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-3">
                        <ul className="navbar-nav">
                          <li className="nav-item icon-parent ms-auto">
                            <a href="#" className="nav-link icon-bullet ">
                              <i className="fa fa-comments text-muted fa-lg"></i>
                            </a>
                          </li>
                          <li className="nav-item icon-parent float-end">
                            <a href="#" className="nav-link icon-bullet">
                              <i className="fa fa-bell text-muted fa-lg"></i>
                            </a>
                          </li>
                          <li className="nav-item ">
                            <NavLink to={"/"} className="nav-link ">
                              <i className="fa fa-sign-out text-danger fa-lg"></i>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end nav --> */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {this.state.dashboard && <Dashboard />}
        {this.state.charts && <Charts />}
        {this.state.products && (
          <Products add={this.state.add} remove={this.state.remove} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
