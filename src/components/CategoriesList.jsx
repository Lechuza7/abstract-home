import { useState, useEffect } from "react";
import "./CategoriesList.css";
import categoriesData from "../data/categories.json";
import Category from "./Category";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCategories(categoriesData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (categories.length === 0) {
    return <div>Loading...please wait</div>;
  }

  return (
    <div className="categories-container">
      {categories.map((category, i) => {
        return <Category key={i} {...category} />;
      })}
    </div>
  );
}
