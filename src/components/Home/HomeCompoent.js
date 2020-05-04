import React, { Component } from 'react'

import './HomeComponent.css'
import App from '../../App'
import { Redirect } from 'react-router-dom';
export class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.istoken = (localStorage.getItem("Token") === undefined ? null : (localStorage.getItem('Token') === '' ? null : localStorage.getItem('Token')));
            console.log("home constructor::",this.istoken,(this.istoken === null))
    }
    render() {
        if(this.istoken === null ){
            return <Redirect to="/" />
        }
        return (
            <React.Fragment>
            <App />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>What is React JS</h2>
                        <ul>
                            <li>React is a javascript library for building user interface.</li>
                            <li>It is not a framework. React knows only one thing that is to create an awesome UI</li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <h2>History of React</h2>
                        <ul>
                            <li>React was first designed by Jordan walke who was part of the Facebook team.</li>
                            <li>It was first deployed for Facebook’s news feed around 2011.</li>
                            <li> In 2013, React was open sourced at JS conference.</li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <h2>ReactJS Advantages</h2>
                        <ul>
                            <li>React uses a declarative approach.</li>
                            <li>Reusable code.</li>
                            <li>Component Based Approach.</li>
                            <li>DOM updates are handled gracefully.</li>
                            <li>React is designed for speed, speed of implementing the application, simplicity and scalability.</li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <h2>How create React JS Project ?</h2>
                        <ul>Step 1:- Firstly install npm <a href="https://nodejs.org/en/download/" target="blank">Node.js</a></ul>
                        <ul>step 2:- Then open terminal/command prompt and run command <b>npx create-react-app my-react-app</b></ul>
                        <ul>step 3:- To run project using command <b>npm start</b></ul>

                    </div>
                    
                </div>
            </div>
            </React.Fragment>
            )
    }
}

export default HomeComponent