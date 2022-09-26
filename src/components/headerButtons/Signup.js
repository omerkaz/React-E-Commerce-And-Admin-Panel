import React from "react";

function Signup() {
  return (
    <>
      <div className="float-end ">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-secondary ms-xl-2 buttons fw-semibold"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          <span className="fa fa-user-plus"></span> Register
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          aria-labelledby="registerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="registerModalLabel">
                  Register
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 offset-5"
                  >
                    Sign up
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-facebook"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-twitter"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
