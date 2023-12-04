import React from "react";
import { increaseCart } from "../Redux/Reducer/Reducer";
import { useDispatch } from "react-redux";
import { decreaseCart } from "../Redux/Reducer/Reducer";

import JsonData from "../Data/JsonData";
const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div className="row">
          {JsonData.products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card m-1"
                style={{ width: "18rem", height: "25rem", textAlign: "center" }}
              >
                <img
                  className="card-img-top"
                  style={{ width: "15rem", height: "20rem" }}
                  src={product.src}
                ></img>
                <p className="card-title">
                  {product.name} | ${product.price}
                </p>

                <div className="card-body">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch(
                        increaseCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    {" "}
                    Add
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch(
                        decreaseCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    {" "}
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
