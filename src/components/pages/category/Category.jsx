import React, { useState } from "react";
import API_BASE_URL from "../../../config/api";
import axios from "axios";
import { useEffect } from "react";
import CategoryCard from "../../ui/categoryCard/CategoryCard";
import "./Category.scss";
import { useParams } from "react-router-dom";
const Category = () => {
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  async function getCategory() {
    let res = await axios.get(`${API_BASE_URL}/ru/house/`);
    setCategory(res.data);
  }
  useEffect(() => {
    getCategory();
  }, []);

  console.log(category);
  const filteredCategory = category.filter(
    (el) => el.category.id == categoryId
  );
  console.log(filteredCategory);

  return (
    <div id="category">
      <div className="container">
        <div className="category">
          {filteredCategory.map((el) => (
            <CategoryCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
