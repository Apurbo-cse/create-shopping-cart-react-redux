import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/actions";

const Create = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(title, category, image, price, qty));
    setTitle("");
    setCategory("");
    setImage("");
    setPrice("");
    setQty("");
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
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="" className="text-muted mt-2">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="" className="text-muted mt-2">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="d-flex justify-content-between">
          <div className="col-6">
            <label htmlFor="" className="text-muted mt-2">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="" className="text-muted mt-2">
              QTY
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn  btn-warning w-50 mt-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default Create;
