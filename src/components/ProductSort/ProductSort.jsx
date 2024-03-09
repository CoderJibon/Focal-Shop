import React from "react";

const ProductSort = () => {
  return (
    <>
      <p className="mb-0 d-block" style={{ width: "100px" }}>
        Sort By:
      </p>
      <select name="" className="form-control form-select" id="">
        <option value="manual">Featured</option>
        <option value="best-selling">Best selling</option>
        <option value="title-ascending" selected="selected">
          Alphabetically, A-Z
        </option>
        <option value="title-descending">Alphabetically, Z-A</option>
        <option value="price-ascending">Price, low to high</option>
        <option value="price-descending">Price, high to low</option>
        <option value="created-ascending">Date, old to new</option>
        <option value="created-descending">Date, new to old</option>
      </select>
    </>
  );
};

export default ProductSort;
