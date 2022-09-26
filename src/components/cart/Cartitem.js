import { useState } from "react";
import { useDispatch } from "react-redux";
import { totalPricePlus, totalPriceMinus, removeItem } from "./cartSlice";

function Cartitem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const quantityPlusHandle = () => {
    setQuantity(quantity + 1);
    dispatch(totalPricePlus(item.price));
  };
  const quantityMinusHandle = () => {
    if (quantity !== 1) setQuantity(quantity - 1);
    if (quantity !== 1) dispatch(totalPriceMinus(item.price));
  };
  const inputOnChangeHandle = (e) => {
    if (e.target.value >= 0) setQuantity(Number(e.target.value));
    dispatch(totalPriceMinus(item.price * quantity));
    console.log(quantity, item.price);
  };

  const removeItemHandler = () => {
    dispatch(removeItem({ id: item.id, price: quantity * item.price }));
  };

  return (
    <>
      {/* <!-- Single item --> */}
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          {/* <!-- Image --> */}
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={item.image} className="w-100" alt={item.description} />
            <a href="#!">
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                }}
              ></div>
            </a>
          </div>
          {/* <!-- Image --> */}
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Data --> */}
          <p>
            <strong>{item.title}</strong>
          </p>

          <button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            title="Remove item"
            onClick={() => removeItemHandler()}
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip"
            title="Move to the wish list"
          >
            <i className="fa fa-heart"></i>
          </button>
          {/* <!-- Data --> */}
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Quantity --> */}
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <button
              onClick={() => quantityMinusHandle()}
              className="btn btn-primary px-3 me-2"
            >
              <i className="fa fa-minus"></i>
            </button>

            <div className="form-outline">
              <input
                id="form1"
                name="quantity"
                value={quantity}
                onChange={inputOnChangeHandle}
                className="form-control text-center"
              />
              <label className="form-label" htmlFor="form1">
                Quantity
              </label>
            </div>

            <button
              onClick={() => quantityPlusHandle()}
              className="btn btn-primary px-3 ms-2"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          {/* <!-- Quantity --> */}

          {/* <!-- Price --> */}
          <p className="text-start text-md-center">
            <strong>{(item.price * quantity).toFixed(2)}$</strong>
          </p>
          {/* <!-- Price --> */}
        </div>
      </div>
      {/* <!-- Single item --> */}
      <hr className="my-4" />
    </>
  );
}

export default Cartitem;
