import axios from "axios";
import React, { useState } from "react";

const AddBlog = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    author: "",
  });

  const inputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/blog/", inputs);
    console.log(res);
    if (res) {
      setInputs({
        title: "",
        description: "",
        author: "",
      });
      props.history.push({
        pathname: "/",
      });
    }
  };
  return (
    <div className="container mt-4 ">
      <div className="row bg-light p-5 shadow">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className="text-center">Add New Blog</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="title"
              className="form-control mt-3"
              placeholder="title"
              onChange={inputHandler}
              value={inputs.name}
            />
            <input
              type="text"
              name="description"
              className="form-control mt-3"
              placeholder="description"
              onChange={inputHandler}
              value={inputs.description}
            />
            <input
              type="text"
              name="author"
              className="form-control mt-3"
              placeholder="author"
              onChange={inputHandler}
              value={inputs.author}
            />
            <button
              type="submit"
              className="btn btn-block btn-outline-primary mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBlog;
