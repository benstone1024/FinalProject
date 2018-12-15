import React, { Component } from 'react';
// import './signup.css'



class signIn extends Component {
     render() {
       return (
         <div className="box">
         <h2>Sign Up</h2>
        <form>
            <div className="inputBox">
                <input type="text" name="" required=""/>
                <label>username</label>
            </div>
            <div className="inputBox">
                <input type="password" name="" required=""/>
                <label>password</label>
            </div>
            <div className="inputBox">
                <input type="Email" name="" required=""/>
                <label>Email</label>
            </div>
            
            <button className="buttonOne">Submit</button>
            <p className="message"> Already Registered? <a href="#">Log In</a></p>
        </form>
      </div>
       )
     }
}
  
  export default signIn;
