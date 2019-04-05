import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/style.css';
import './css/util.css';
import './css/main.css';
import './css/signup.css';
import './css/font-awesome.css';
import './css/lightbox.css';
import './css/blast.min.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Admin from './Components/Admin/Admin';
class App extends Component {
  

  constructor(){
   super();
   this.state = {
    route:'login',
    user:{
      email:''
    }
   }
 }

loadUser = (data) =>{
  this.setState({user:{
    email:data.email
  }})
}




/*
componentDidMount() {
fetch('https://obscure-lowlands-61077.herokuapp.com/')
.then(response => response.json())
.then(console.log)

}
*/

onRouteChange = (route) => {
this.setState({route:route});
}


  render() {
    return (
      <div className="App">
    <head>
  <title>CanisNinja</title>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  
</head>
<body>
    <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
</button>
            
            <a className="navbar-brand logo" href="#" onClick={()=> this.onRouteChange('home')}><img src ="/images/logo.jpg" alt="Logo" /></a> 
            <a className="navbar-brand mx-auto" href="#" onClick={()=> this.onRouteChange('home')}>Canis <span data-blast="color">Ninja</span></a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"> <a className="nav-link" onClick={() => this.onRouteChange('home')} data-blast="color"><strong>Home</strong> <span className="sr-only">(current)</span></a> </li>
                    <li className="nav-item"> <a className="nav-link"  href="#" onClick={() => this.onRouteChange('services')}><strong>Services</strong></a> </li>
                    
                    <li className="nav-item"> <a className="nav-link" href="#" onClick={() => this.onRouteChange('login')}><strong>Login</strong></a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#" onClick={() => this.onRouteChange('admin')}><strong>Admin</strong></a> </li>
                </ul>
            </div>
        </div>
    </nav>
 
{this.state.route === 'home'?<Home />:(this.state.route === 'login' ?<Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> : (this.state.route === 'signup' ? <Signup loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>:(this.state.route === 'services'?<Services userEmail= {this.state.user.email} onRouteChange ={this.onRouteChange}/>:(this.state.route=='admin'?<Admin />:<Error />))))}





  <footer className="action-sec py-lg-5 py-3">
    <div className="text-center center-block copyright mt-md-5 mt-4">
          <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social"></i></a>
          <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social"></i></a>
          <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social"></i></a>
          <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social"></i></a>
  
    
        <p>© 2019 Canis Ninja . All Rights Reserved | Design by Team 26</p>
  
      </div>
      </footer>

  <script src="js/main.js"></script>
</body>        







      </div>
    );
  }
}

export default App;
