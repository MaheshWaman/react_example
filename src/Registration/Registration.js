import React, { Component } from 'react'
import './Registration.css'
import axios from 'axios';
export class RegistrationComponent extends Component {
	constructor(props){
		super(props)
		this.state={
			name:'',
			email:'',
			roleType:'User',
			password:'',
			confirmPassword :''
		}

	}
	
	submitClick = (e) => {
		e.preventDefault();
		if(this.state.password === this.state.confirmPassword){
			axios.post("http://localhost:3000/registerUser",{name : this.state.name,password :this.state.password,email:this.state.email,role:this.state.roleType})
        .then(
            res => {
				alert("Register Successfully");
                console.log("register Response ::",res);
				
		this.props.history.push('/');
				
            })
        .catch(err =>{
            console.log(err)
		})
			// this.props.history.push('/Home');

		}
		else{

		}
	}
    render() {
        return (
			<div className="bg">

            <div className="container " >
	<div className="d-flex  justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Registration</h3>
				{/* <div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div> */}
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username" value={this.state.name} onChange={e=> this.setState({name : e.target.value})} />
						
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fas fa-at"></i></span>
						</div>
						<input type="email" className="form-control" placeholder="email Id" value={this.state.email} onChange={e=> this.setState({email : e.target.value})} />
						
					</div>
                    
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={e=> this.setState({password : e.target.value})}/>
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="confirm password" value={this.state.confirmPassword} onChange={e=> this.setState({confirmPassword : e.target.value})}/>
					</div>
					
					<div className="form-group">
						<input type="submit" value="Submit" className="btn float-right login_btn" onClick={this.submitClick} />
						{/* <Route path="/Home" component={HomeComponent}/> */}
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</div>

            )
    }
}

export default RegistrationComponent
