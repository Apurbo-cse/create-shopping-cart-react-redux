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
          পণ্যের নাম
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="নাম লিখুন"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="" className="text-muted mt-2">
          ক্যাটাগরি
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="ক্যাটাগরি লিখুন"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="" className="text-muted mt-2">
          ছবি
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="ছবি লিংক লিখুন"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="d-flex justify-content-between">
          <div className="col-6">
            <label htmlFor="" className="text-muted mt-2">
              মূল্য
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
              পরিমাণ
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
          সংরক্ষণ করুন
        </button>
      </form>
    </div>
  );
};

export default Create;
