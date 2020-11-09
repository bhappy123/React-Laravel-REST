import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

const Blog = (props) => {
  let [blog, setBlog] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const getBlogs = async (pagenumber = 1) => {
    // Fetch All Data
    const res = await axios.get(
      `http://127.0.0.1:8000/api/blog?page=${pagenumber}`
    );
    console.log(res);
    // Adding the data to  blog state
    if (res) {
      setBlog((blog = res.data));
      setIsLoading(false);
      // console.log(blog);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // Delete Blog Function
  const deleteBlog = async (id) => {
    const res = await axios.delete(`http://127.0.0.1:8000/api/blog/${id}`);
    if (res.data.status === 200) {
      getBlogs();
      props.history.push("/");
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    const { data, current_page, per_page, total } = blog;
    return (
      <div className="container">
        <div className="jumbotron">
          {data.length > 0 ? (
            data.map((post) => (
              <div key={post.id} className="p-3 mt-3 bg-light row ">
                <div className="col-md-8">
                  <h2>{post.title}</h2>
                  <Link to={`/${post.id}`}>View</Link>
                </div>
                <div className="col-md-4">
                  <Link
                    to={`/update/${post.id}`}
                    className="btn btn-primary d-block mb-2 float-right btn-block"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger d-block mt-2 btn-block"
                    onClick={() => {
                      deleteBlog(`${post.id}`);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>No Blogs Yet!!!</h2>
          )}
        </div>
        <div className="mt-4">
          <Pagination
            activePage={current_page}
            totalItemsCount={total}
            itemsCountPerPage={per_page}
            onChange={(pagenumber) => getBlogs(pagenumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
          />
        </div>
      </div>
    );
  }
};

export default Blog;
