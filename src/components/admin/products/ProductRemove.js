import React, { Component } from "react";
import { connect } from "react-redux";
import { productRemove } from "../../products/productsSlice";

export class ProductsRemove extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  productRemoveHandler(id) {
    this.props.productRemove(id);
    console.log(id);
  }

  render() {
    return (
      <>
        <div className="col mt-4">
          <div className="table-responsive rounded">
            <table className="table table-striped text-center">
              <thead>
                <tr className="table-head">
                  <th scope="col">ID</th>
                  <th scope="col">Category</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((item, index) => {
                  return (
                    <tr key={index} className="table-light">
                      <th scope="row">{item.id}</th>
                      <td>{item.category}</td>
                      <td>{item.title}</td>
                      <td>{item.price}$</td>
                      <td>{Math.floor(item.rating.rate)}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => this.productRemoveHandler(item.id)}
                        >
                          <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.list,
});
const mapDispatchToProps = {
  productRemove: productRemove,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsRemove);
