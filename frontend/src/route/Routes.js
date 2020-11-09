import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import AddBlog from '../pages/AddBlog'
import Nav from '../components/Nav'
import Prac from '../pages/Prac'
import UpdateBlog from '../pages/UpdateBlog'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import LogOut from '../pages/LogOut'
const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path='/addblog' exact component={AddBlog} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/login' exact component={LogIn} />
                <Route path='/logout' exact component={LogOut} />
                <Route path='/update/:id' exact component={UpdateBlog} />
                <Route path='/prac' exact component={Prac} />
                <Route path="/:id" exact component={BlogDetail} />
            </Switch>
        </Router>
    )
}

export default Routes
