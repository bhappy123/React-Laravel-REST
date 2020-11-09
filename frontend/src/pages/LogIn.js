import React, { useState } from 'react'
import axios from 'axios'
const LogIn = (props) => {

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = async () => {
        const res = await axios.post("http://127.0.0.1:8000/api/user/login", input);
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            // console.log(res.data.token);
            props.history.push({ pathname: "/", });
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser();
    }

    return (
        <div className="container p-5">
            <form className="p-5" onSubmit={submitHandler}>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" v className="form-control" name="email"
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={input.email}
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control"
                        id="exampleInputPassword1" placeholder="Password"
                        value={input.password}
                        onChange={inputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LogIn
