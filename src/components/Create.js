import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/actions";

const Create = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(title));
    setTitle();
  }

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
        <button type="submit" className="btn  btn-warning w-50 mt-3">Save</button>
      </form>
    </div>

  );
};

export default Create;
