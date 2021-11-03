import React from "react";
import { Route } from "react-router";
import Home from "./Home";
import Contact from "./Home/Contact";
import Paper from "./Paper/Paper";
import Team from "./Home/Team";
import Employee from "./Home/Employee";


const Body = () =>{
    return(
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/paper' exact component={Paper} />
            <Route path='/employee' exact component={Employee} />
            <Route path='/team' exact component={Team} />
            <Route path='/contact' exact component={Contact} />
        </div>
    )
}

export default Body;