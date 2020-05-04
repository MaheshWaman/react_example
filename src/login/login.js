import React, { Component} from 'react'
import './login.css'
import { Link, Redirect} from 'react-router-dom'
import axios from 'axios';

export class LoginComponent extends Component {
	constructor (props){
		
		super(props);
		this.state ={
			userName : '',
			password :''
		}
		this.token = (localStorage.getItem('Token') === undefined ? null : (localStorage.getItem('Token') === '' ? null : localStorage.getItem('Token')));
	}
	loginClick = (e) => {
		e.preventDefault();
		
		axios.post("http://localhost:3000/loginuser",{name : this.state.userName,password :this.state.password})
        .then(
            res => {
                console.log("Login Response ::",res);
				localStorage.setItem('Name',res.data.result.name);
				localStorage.setItem('Token',res.data.token);
		this.props.history.push('/Home');
				
			})
			
        .catch(err =>{
            console.log(err)
		})
		
	}
	isloggedIn = ()=>{
		console.log("isloggedIn",this.token)
	}
    render() {
		if(this.token !== null){
			return <Redirect to="/Home" />
		}
        return (
			<div className="bg">

            <div className="container " >
	<div className="d-flex  justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			</div>
			<div className="card-body">
				<form >
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" value={this.state.userName} onChange={e=> this.setState({userName : e.target.value})} className="form-control" placeholder="username" />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" value={this.state.password} onChange={e=> this.setState({
            password : e.target.value
        })} className="form-control" placeholder="password" />
					</div>
					
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn" onClick={this.loginClick} />
						{/* <Route path="/Home" component={HomeComponent}/> */}
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#"><Link to="/Registration">Sign Up</Link></a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

            )
    }
}

export default LoginComponent
