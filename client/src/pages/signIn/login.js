import React, { Component } from 'react';
import './login.css'



class logIn extends Component {
    state = {
        email: '',
        password: ''

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
         <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="inputBox">
                <input type="emailt" id="email" name="" required="" onChange={this.handleChange}/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                <input type="password" id="password" name="" required="" onChange={this.handleChange}/>
                <label>password</label>
            </div>
            <button className="buttonOne">Submit</button>
            <p className="message"> Not Registered? <a href="/signup">Register</a></p>
        </form>
      </div>

      

      
       )
       
     }
     
}

  
  export default logIn;
