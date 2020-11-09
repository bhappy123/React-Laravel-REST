import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
function UpdateBlog() {
    // Geting the id from params
    const { id } = useParams();

    // Blog Data For Updating
    let [blog, setBlog] = useState({
        title: '',
        description: '',
        author: '',
    });

    // Loading or Not
    const [isLoadiing, setIsLoadiing] = useState(true);


    // Function to get data for updating using axios
    const getBlogData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`);
        if (res) {
            setBlog(prevBlog => {
                return {
                    title: res.data.title,
                    description: res.data.description,
                    author: res.data.author,
                }
            });
            setIsLoadiing(false);
        }
    };

    // Update Database
    const updateDatabase = async () => {
        const res = await axios.put(`http://127.0.0.1:8000/api/blog/${id}`, blog);
        if (res) {
            console.log(res);
            setIsLoadiing(false);
        }
        else {
            console.log("couldn't able to update");
        }
    };


    // Use Effect to get the data for editing
    useEffect((() => {
        getBlogData();
    }), []);

    // Input Changes
    const inputHandler = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    // Handle Submit
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoadiing(true);
        updateDatabase();
    }

    if (isLoadiing) {
        return <h2>Loadingg....</h2>
    }
    else {
        return (
            <div>
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
                                    value={blog.title}
                                />
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control mt-3"
                                    placeholder="description"
                                    onChange={inputHandler}
                                    value={blog.description}
                                />
                                <input
                                    type="text"
                                    name="author"
                                    className="form-control mt-3"
                                    placeholder="author"
                                    onChange={inputHandler}
                                    value={blog.author}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-block btn-outline-primary mt-3">
                                    Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateBlog
