import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./productsSlice";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    products.length < 1 && dispatch(loadProducts());
  }, []);

  return (
    <>
      <div className="row">
        {products.length > 0
          ? products.map((item, index) => <Product key={index} item={item} />)
          : ""}
      </div>
    </>
  );
}

export default Products;
