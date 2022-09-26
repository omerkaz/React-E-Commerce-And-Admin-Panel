import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Checkout from "../checkout/Checkout";
import Cartitem from "./Cartitem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.list);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartItems.length}</h5>
                </div>
                <div className="card-body">
                  {cartItems.length > 0 &&
                    cartItems.map((item, index) => (
                      <Cartitem key={index} item={item}></Cartitem>
                    ))}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">
                    {moment().format("DD.MM.YYYY")} -{" "}
                    {moment().add(2, "days").format("DD.MM.YYYY")}
                  </p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{totalPrice.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{totalPrice.toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block "
                      data-bs-toggle="modal"
                      data-bs-target="#checkoutModal"
                    >
                      Go to checkout
                    </button>
                    <div
                      className="modal fade"
                      id="checkoutModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <Checkout></Checkout>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
