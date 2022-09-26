import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-body">
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-8">
                  <div className="card">
                    <div className="card-body p-md-5">
                      <div>
                        <h4>Select payment method</h4>
                        <p className="text-muted pb-2">
                          Please make the payment to start enjoying all the fun.
                        </p>
                      </div>

                      <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <span
                            className="rounded fa fa-credit-card"
                            width="60"
                          />
                          <div className="d-flex flex-column ms-4">
                            <span className="small text-muted">
                              CHANGE PLAN
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <sup className="dollar font-weight-bold text-muted">
                            $
                          </sup>
                          <span className="h2 mx-1 mb-0">
                            {totalPrice.toFixed(2)}
                          </span>

                        </div>
                      </div>

                      <h4 className="mt-5">Payment details</h4>

                      <div className="mt-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="https://i.imgur.com/qHX7vY1.webp"
                            className="rounded"
                            width="70"
                          />
                          <div className="d-flex flex-column ms-3">
                            <span className="h5 mb-1">Credit Card</span>
                            <span className="small text-muted">
                              1234 XXXX XXXX 2570
                            </span>
                          </div>
                        </div>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="CVC"
                            style={{ width: "70px" }}
                          />
                        </div>
                      </div>

                      <div className="mt-2 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="https://i.imgur.com/qHX7vY1.webp"
                            className="rounded"
                            width="70"
                          />
                          <div className="d-flex flex-column ms-3">
                            <span className="h5 mb-1">Credit Card</span>
                            <span className="small text-muted">
                              2344 XXXX XXXX 8880
                            </span>
                          </div>
                        </div>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="CVC"
                            style={{ width: "70px" }}
                          />
                        </div>
                      </div>

                      <h6 className="mt-4 mb-3 text-primary text-uppercase">
                        ADD PAYMENT METHOD
                      </h6>

                      <div className="form-outline">
                        <input
                          type="text"
                          id="formControlLg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formControlLg">
                          Email address
                        </label>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn btn-lg btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button className="btn btn-primary btn-block btn-lg float-end">
                          Proceed to payment{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
