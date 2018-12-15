import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
class about extends Component{
    render() {
        return(
            <BrowserRouter>
            <div className='mainpage'>
            <h1>About</h1>
            <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
            
            </div>
            </BrowserRouter>
        )
    }
}


export default about;