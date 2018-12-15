import React, { Component } from 'react';
import './login.css'



class logIn extends Component {
     render() {
       return (
         <div className="box">
         <h2>Login</h2>
        <form>
            <div class="inputBox">
                <input type="text" name="" required=""/>
                <label>username</label>
            </div>
            <div class="inputBox">
                <input type="password" name="" required=""/>
                <label>password</label>
            </div>
            <button className="buttonOne">Submit</button>
            <p class="message"> Not Registered? <a href="#">Register</a></p>
        </form>
      </div>

      

      
       )
       
     }
     
}

  
  export default logIn;
