import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddComment = () => {
    const { id } = useParams('id');
    const [comment, setComment] = useState({
        blog_id: id,
        comment: '',
        token: localStorage.getItem('token')
    })

    const addComment = async () => {
        const res = await axios.post('http://127.0.0.1:8000/api/comment/addcomment', comment);
        console.log(res);
        if (res.data.err) {
            console.log(res.data.message);
        }
        else {
            console.log("You added a new comment");
            setComment({ comment: '', id: comment.blog_id, token: localStorage.getItem('token') });
        }

    }
    const handleChange = (e) => {
        setComment({
            comment: e.target.value,
            blog_id: comment.blog_id,
            token: localStorage.getItem('token')
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment();
        // console.log(comment);s
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-input" onChange={handleChange} name="comment" value={comment.comment} style={{ "width": "100%", "height": "80px" }} />
                </div>
                <div className="col-md-4">
                    <form method="post" onSubmit={handleSubmit}>
                        <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddComment