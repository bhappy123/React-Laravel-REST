import React, { useState } from 'react'
import axios from 'axios'


const SignUp = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    })

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const createUser = async () => {
        const res = await axios.post('http://127.0.0.1:8000/api/user/signup', input);
        if (res.status === 200) {
            console.log("user created");
        }
        else {
            console.log("something wrong happened");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        createUser();
    }


    return (
        <div className="container p-5">
            <form className="p-5" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text"
                        name="name" className="form-control"
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        value={input.name}
                        onChange={inputHandler}
                    />
                </div>
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

export default SignUp

