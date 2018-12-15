import React, { Component } from 'react';
// import './signup.css'



class signIn extends Component {

state = {
    email: '',
    password: '',
    FirstName: '',
    LastName: ''

}
handleChange = (e) => {
    this.setState({

        [e.target.id]: e.target.value

    })


}
handleSubmit = (e) => {
   e.preventDefault();
   console.log(this.state);
}

     render() {
       return (
         <div className="box">
         <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="inputBox">
                <input type="email" id="email" name="" required="" onChange={this.handleChange}/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                <input type="password" id="password" name="" required="" onChange={this.handleChange}/>
                <label>password</label>
            </div>
            <div className="inputBox">
                <input type="text" id="firstname" name="" required="" onChange={this.handleChange}/>
                <label>First Name</label>
            </div>
            <div className="inputBox">
                <input type="text" id="lastname" name="" required="" onChange={this.handleChange}/>
                <label>Last Name</label>
            </div>
            
            <button className="buttonOne">LOGIN</button>
            <p className="message"> Already Registered? <a href="login">Log In</a></p>
        </form>
      </div>
       )
     }
}
  
  export default signIn;
