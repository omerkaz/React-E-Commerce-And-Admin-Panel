import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import "./product.css";


function Ratestar() {
  return <i className="fa fa-star"></i>;
}

function Product({ item }) {
  const dispatch = useDispatch();

  function rateStar() {
    let starArr = [];
    for (let i = 0; i <= Math.floor(item.rating.rate); i++) {
      starArr.push(<Ratestar key={i}></Ratestar>);
    }
    return starArr;
  }
  function Modal() {
    let idArr = ["#"];
    idArr.push(item.id);
    return `${idArr[0]}a${idArr[1]}`;
  }
  function Modalid() {
    return `a${item.id}`;
  }
  return (
    <>
      <div className="col-md-4 col-xl-3 mt-2 offset-3 offset-md-0 mb-2">
        <div className="card" style={{ maxWidth: "35vw", maxHeight: "55vh" }}>
          <div className="card-body">
            <div className="card-img-actions d-flex justify-content-center align-items-center">
              <img
                src={item.image}
                className="card-img img-fluid"
                style={{
                  maxWidth: "12vw",
                  maxHeight: "24vh",
                  minWidth: "12vw",
                  minHeight: "24vh",
                }}
                alt=""
              />
            </div>
          </div>

          <div className="card-body bg-light text-center rounded">
            <div className="mb-2">
              <h6 className="font-weight-semibold mb-2">
                <a
                  href="#"
                  className="text-default mb-2 three-dots"
                  data-abc="true"
                >
                  {item.title}
                </a>
              </h6>

              <a href="#" className="text-muted" data-abc="true">
                {item.category}
              </a>
            </div>

            <h3 className="mb-0 fw-smaller fs-5">{item.price} $</h3>

            <div>{rateStar()}</div>

            <div className="text-muted mb-3">{item.rating.count} reviews</div>

            <button
              onClick={() => dispatch(addItem(item))}
              type="button"
              className="btn btn-primary bg-cart"
            >
              <i className="fa fa-cart-plus mr-2"></i> Add to cart
            </button>
            <button
              type="button"
              className="btn btn-primary ms-1 mt-lg-1 mt-xxl-0"
              data-bs-toggle="modal"
              data-bs-target={Modal()}
            >
              <i className="fa fa-info-circle " aria-hidden="true"></i> Quick View
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={Modalid()}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-danger">
            <div className="container my-2">
              <div className="row ">
                <div className="col">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="images p-3 ">
                          <div className="text-center p-4">
                            {" "}
                            <img
                              id="main-image"
                              src={item.image}
                              width="250"
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product p-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              {" "}
                              <button
                                type="button"
                                className="btn p-0"
                                data-bs-dismiss="modal"
                              >
                                <i
                                  className="fa fa-window-close fa-lg"
                                  aria-hidden="true"
                                ></i>
                              </button>{" "}
                            </div>{" "}
                            <i className="fa fa-shopping-cart fa-lg text-muted"></i>
                          </div>
                          <div className="mt-3 mb-3">
                            {" "}
                            <span className="text-uppercase text-muted">
                              {item.category}
                            </span>
                            <hr></hr>
                            <h5 className="text-uppercase">{item.title}</h5>
                            <div className="price d-flex flex-row align-items-center">
                              {" "}
                              <span className="act-price">{item.price}$</span>
                              <div className="ms-2">
                                {" "}
                                <small className="dis-price">
                                  {((item.price / 6) * 10).toFixed(2)}$
                                </small>{" "}
                                <small className="ms-1 text-danger">
                                  40% OFF
                                </small>{" "}
                              </div>
                            </div>
                          </div>
                          <hr></hr>
                          <p className="about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque luctus rhoncus velit, rutrum vehicula
                            metus maximus faucibus. Nam pellentesque rhoncus
                            diam vel varius. Duis rutrum massa et tortor pretium
                            scelerisque. Vestibulum et lobortis enim, in
                            faucibus lacus. Integer vestibulum lectus justo,
                            vitae porta ex porttitor quis.
                          </p>
                          <hr></hr>
                          <div
                            className={
                              item.category !== "electronics"
                                ? "sizes mt-5"
                                : "sizes mt-5 d-none"
                            }
                          >
                            <h6 className="text-uppercase">Size</h6>{" "}
                            <label className="radio">
                              {" "}
                              <input type="radio" name="size" /> <span>S</span>{" "}
                            </label>{" "}
                            <label className="radio">
                              {" "}
                              <input type="radio" name="size" /> <span>M</span>{" "}
                            </label>{" "}
                            <label className="radio">
                              {" "}
                              <input type="radio" name="size" /> <span>L</span>{" "}
                            </label>{" "}
                            <label className="radio">
                              {" "}
                              <input type="radio" name="size" /> <span>XL</span>{" "}
                            </label>{" "}
                            <label className="radio">
                              {" "}
                              <input type="radio" name="size" />{" "}
                              <span>XXL</span>{" "}
                            </label>
                          </div>
                          <div className="cart mt-4 align-items-center">
                            {" "}
                            <button
                              onClick={() => dispatch(addItem(item))}
                              className="btn btn-danger text-uppercase mr-2 px-4"
                            >
                              Add to cart
                            </button>{" "}
                            <i className="ms-2 fa fa-heart text-muted"></i>{" "}
                            <i className="ms-1 fa fa-share-alt text-muted"></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
