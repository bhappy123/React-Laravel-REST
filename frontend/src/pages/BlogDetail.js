import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import AddComment from './AddComment';
import ShowComment from './ShowComment';


const BlogDetail = (props) => {
    let { id } = useParams();
    // console.log(id)
    let [blog, setBlog] = useState({
        title: '',
        description: '',
        author: '',
        comments: {},
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const getBlog = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`);
        // console.log(res.data.comment);
        if (res.status === 200) {
            setBlog(prevBlog => {
                return {
                    title: res.data.blog.title,
                    description: res.data.blog.description,
                    author: res.data.blog.author,
                    comments: res.data.comment
                }
            });
            setIsLoading(false);
        }
    }

    const checkAuthentication = () => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
        }
    }

    useEffect((() => {
        getBlog();
        checkAuthentication();
    }), [])
    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }
    else {
        return (console.log(blog.comments),
            <>
                <div className="container jumbotron">
                    <h2 className="text-center text-primary">{blog.title}</h2>
                    <p>{blog.description}</p>
                    <h6 className="text-grey float-right">{blog.author}</h6>
                </div>
                <ShowComment allcomment={blog.comments} />
                {isLoggedIn && <AddComment />}
            </>)
    }
}
export default BlogDetail
