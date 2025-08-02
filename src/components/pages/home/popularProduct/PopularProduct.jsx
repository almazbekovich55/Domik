/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./PopularProduct.scss";
import ProductCard from "../../../ui/productCard/ProductCard";
import { useEffect } from "react";
import { getProduct } from "../../../../redux/CreateProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import API_BASE_URL from "../../../../config/api";

const PopularProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.product);

  async function getAllProduct() {
    try {
      let res = await axios.get(`${API_BASE_URL}/ru/house`);
      dispatch(getProduct(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div id="popular">
      <div className="container">
        <h1>Популярное в каталоге</h1>
        <div className="popular">
          {product?.slice(0, 9).map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
        <div className="popular--btn">
          <button>Перейти в каталог</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
