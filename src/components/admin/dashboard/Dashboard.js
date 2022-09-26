import React, { Component } from "react";
import { connect } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      labels: ["Chrome", "Firefox", "Edge", "Other",],
      datasets: [
        {
          label: "# of Votes",
          data: [292, 196, 114, 300,],
          backgroundColor: [
            "rgba(0, 73, 255, 0.2)",
            "rgba(255, 255, 0, 0.2)",
            "rgba(255, 18, 0, 0.2)",
            "rgba(1, 1, 0, 0.2)",

          ],
          borderColor: [
            "rgba(0, 73, 255, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(255, 18, 0, 1)",
            "rgba(1, 1, 0, 1)",

          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <div className="container mt-4">
        <div className="row mb-3 offset-sm-4 offset-md-5 offset-lg-3">
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse card-success">
              <div className="card-block  text-center pt-3">
                <div className="rotate">
                  <i className="fa fa-user fa-2x"></i>
                </div>
                <h6 className="text-uppercase">Members</h6>
                <h1 className="fs-4">768</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mb-lg-2">
            <div className="card card-inverse card-danger">
              <div className="card-block text-center pt-3">
                <div className="rotate">
                  <i className="fa fa-list fa-2x"></i>
                </div>
                <h6 className="text-uppercase">Products</h6>
                <h1 className="fs-4">{this.props.products.length}</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse card-info">
              <div className="card-block  text-center pt-3">
                <div className="rotate">
                  <i className="fa fa-twitter fa-2x"></i>
                </div>
                <h6 className="text-uppercase">Social Media Tracker</h6>
                <h1 className="fs-4">125</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card card-inverse card-warning">
              <div className="card-block text-center pt-3">
                <div className="rotate">
                  <i className="fa fa-share fa-2x"></i>
                </div>
                <h6 className="text-uppercase">INFLUENCER SHARES</h6>
                <h1 className="fs-4">36</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 offset-sm-4 offset-md-5 offset-lg-3">
          <div className="col-xl-3 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Earnings</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-dollar-sign align-middle"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mt-1 mb-3">$3.300</h1>
                <div className="mb-0">
                  <span className="badge badge-success-light">
                    {" "}
                    <i className="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                  </span>
                  <span className="text-muted"> Since last week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 mb-lg-2">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Sales</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-truck align-middle"
                      >
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mt-1 mb-3">382</h1>
                <div className="mb-0">
                  <span className="badge badge-primary-light">
                    {" "}
                    <i className="mdi mdi-arrow-bottom-right "></i> -3.65%{" "}
                  </span>
                  <span className="text-muted"> Since last week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Orders</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-cart align-middle"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mt-1 mb-3">34</h1>
                <div className="mb-0">
                  <span className="badge badge-primary-light">
                    {" "}
                    <i className="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                  </span>
                  <span className="text-muted"> Since last week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Visitors</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users align-middle"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mt-1 mb-3">812</h1>
                <div className="mb-0">
                  <span className="badge badge-success-light">
                    {" "}
                    <i className="mdi mdi-arrow-bottom-right"></i> 5.25%{" "}
                  </span>
                  <span className="text-muted"> Since last week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 offset-sm-4 offset-md-5 offset-lg-3">
          <div className="col-12 col-md-4 col-xxl-3 d-flex order-1 order-xxl-3">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <div className="card-actions float-end">
                  <div className="dropdown position-relative">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-more-horizontal align-middle"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Don't look here!
                      </a>
                      <a className="dropdown-item" href="#">
                        Please, don't look here!
                      </a>
                      <a className="dropdown-item" href="#">
                        Okey, nevermind...
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-0">Browser Usage</h5>
              </div>
              <div className="card-body d-flex pb-0">
                <div className="align-self-center w-100">
                  <div className="py-3">
                    <Doughnut data={data}/>
                  </div>

                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa fa-circle text-primary fa-fw"></i>{" "}
                          Chrome{" "}
                          <span className="badge badge-success-light">
                            +12%
                          </span>
                        </td>
                        <td className="text-end">292</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-circle text-warning fa-fw"></i>{" "}
                          Firefox{" "}
                          <span className="badge badge-danger-light">-3%</span>
                        </td>
                        <td className="text-end">196</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-circle text-danger fa-fw"></i>{" "}
                          Edge
                        </td>
                        <td className="text-end">114</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-circle text-dark fa-fw"></i> Other
                        </td>
                        <td className="text-end">300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xxl-9  order-1 order-xxl-3">
            <div className="card ps-2">
              <div className="card-header text-center">
                <h5 className="card-title my-2 fw-semibold">Best Customers</h5>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Date of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        width="48"
                        height="48"
                        className="rounded-circle me-2"
                        alt="Avatar"
                      />{" "}
                      Vanessa Tucker
                    </td>
                    <td>864-348-0485</td>
                    <td>June 21, 1961</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://randomuser.me/api/portraits/men/49.jpg"
                        width="48"
                        height="48"
                        className="rounded-circle me-2"
                        alt="Avatar"
                      />{" "}
                      William Harris
                    </td>
                    <td>914-939-2458</td>
                    <td>May 15, 1948</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://randomuser.me/api/portraits/women/28.jpg"
                        width="48"
                        height="48"
                        className="rounded-circle me-2"
                        alt="Avatar"
                      />{" "}
                      Sharon Lessman
                    </td>
                    <td>704-993-5435</td>
                    <td>September 14, 1965</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://randomuser.me/api/portraits/women/60.jpg"
                        width="48"
                        height="48"
                        className="rounded-circle me-2"
                        alt="Avatar"
                      />{" "}
                      Christina Mason
                    </td>
                    <td>765-382-8195</td>
                    <td>April 2, 1971</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://randomuser.me/api/portraits/women/57.jpg"
                        width="48"
                        height="48"
                        className="rounded-circle me-2"
                        alt="Avatar"
                      />{" "}
                      Lucy Luly
                    </td>
                    <td className="mt-2">842-972-6195</td>
                    <td>May 22, 1981</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
