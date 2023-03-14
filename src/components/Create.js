import React from "react";

const Create = () => {
  return (
    <div class="col-md-3 mb-3">
      <form class="card w-100 p-3">
        <label htmlFor="" className="text-muted">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a title"
        />
        <button className="btn  btn-warning w-50 mt-3">Save</button>
      </form>
    </div>
  );
};

export default Create;
