import React, { Component } from "react";
import { connect } from "react-redux";
import {productAdd} from "../../products/productsSlice"

export class ProductsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      price: "",
      title: "",
      description: "",
      image: "",
      id: this.props.products.length + 1,
      rating: {
        rate: 0,
        count: 0,
      }
    };
  }

  productAdd() {
    const newProductData = this.state
    this.props.productAdd(newProductData)
    console.log(this.state)
  }

  render() {

    return (
      <>
        <div className="col-lg-12 mt-4">
          <div className="card-header bg text-center rounded py-3">
            <h5 className="card-title text-white fw-semibold">Product Add</h5>
          </div>
          <form className="bg-light rounded p-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <select className="form-select" onChange={(e)=> this.setState({category : e.target.value})} aria-label="Large select">
                    <option defaultValue="">Select product category</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                    placeholder="Price"
                    onChange={(e)=> this.setState({price : e.target.value})}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="productTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="productTitle"
                aria-describedby="productTitle"
                placeholder="Example Mens Casual Slim Fit"
                onChange={(e)=> this.setState({title : e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                name="textaria"
                id="productDescription"
                cols="30"
                rows="5"
                onChange={(e)=> this.setState({description : e.target.value})}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Image Url
              </label>
              <input
                type="url"
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Örn:https://im.ge/"
                onChange={(e)=> this.setState({image : e.target.value})}
              />
            </div>
            <div className="d-grid col-2 m-auto">
              <button className="btn btn-add p-2 text-white" type="button" onClick={()=> this.productAdd()}>
                Add
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.list,
});
const mapDispatchToProps = {
  productAdd : productAdd
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdd);
