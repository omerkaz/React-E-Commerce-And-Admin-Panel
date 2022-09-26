import React, { Component } from "react";
import { connect } from "react-redux";
import ProductAdd from "./ProductAdd";
import ProductRemove from "./ProductRemove";
import "./product.css";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  bestProduct() {
    return (
      <div className="col-12 col-md-12 col-xxl-12  order-1 order-xxl-3 mt-4">
        <div className="card">
          <div className="card-header bg text-center">
            <h5 className="card-title text-white fw-semibold">Best Products</h5>
          </div>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Sales Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.products[10] && this.props.products[10].id}</td>
                  <td>{this.props.products[10] && this.props.products[10].title}</td>
                  <td>{this.props.products[10] && this.props.products[10].price}</td>
                  <td>{this.props.products[10] && this.props.products[10].rating.rate}</td>
                  <td>{Math.floor(Math.random() * (150 - 100) + 100)}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{this.props.products[4] && this.props.products[4].id}</td>
                  <td>{this.props.products[4] && this.props.products[4].title}</td>
                  <td>{this.props.products[4] && this.props.products[4].price}</td>
                  <td>{this.props.products[4] && this.props.products[4].rating.rate}</td>
                  <td>{Math.floor(Math.random() * (100 - 80) + 80)}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>{this.props.products[7] && this.props.products[7].id}</td>
                  <td>{this.props.products[7] && this.props.products[7].title}</td>
                  <td>{this.props.products[7] && this.props.products[7].price}</td>
                  <td>{this.props.products[7] && this.props.products[7].rating.rate}</td>
                  <td>{Math.floor(Math.random() * (80 - 60) + 60)}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>{this.props.products[9] && this.props.products[9].id}</td>
                  <td>{this.props.products[9] && this.props.products[9].title}</td>
                  <td>{this.props.products[9] && this.props.products[9].price}</td>
                  <td>{this.props.products[9] && this.props.products[9].rating.rate}</td>
                  <td>{Math.floor(Math.random() * (60 - 50) + 50)}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>{this.props.products[1] && this.props.products[1].id}</td>
                  <td>{this.props.products[1] && this.props.products[1].title}</td>
                  <td>{this.props.products[1] && this.props.products[1].price}</td>
                  <td>{this.props.products[1] && this.props.products[1].rating.rate}</td>
                  <td>{Math.floor(Math.random() * (50 - 45) + 45)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row offset-sm-4 offset-md-5 offset-lg-3">
            {!this.props.add && !this.props.remove ? this.bestProduct() : null}
            {this.props.add ? <ProductAdd /> : null}
            {this.props.remove ? <ProductRemove /> : null}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.list,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
