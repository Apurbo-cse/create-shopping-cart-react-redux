import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/actions";

const Create = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [qty, setQty] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(title,category,image,qty));
    setTitle();
    setCategory();
    setImage();
    setQty();

  };

  return (
    <div class="col-md-3 mb-3">
      <form class="card w-100 p-3" onSubmit={submitHandler}>
        <label htmlFor="" className="text-muted">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a title"
          value={title}
          onChange={handleInput}
        />

        <label htmlFor="" className="text-muted mt-2">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a category"
          value={category}
          onChange={handleCategory}
        />

        <label htmlFor="" className="text-muted mt-2">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a image"
          value={image}
          onChange={handleImage}
        />

        <label htmlFor="" className="text-muted mt-2">
          QTY
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter a qty"
          value={qty}
          onChange={handleQty}
        />

        <button type="submit" className="btn  btn-warning w-50 mt-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default Create;
