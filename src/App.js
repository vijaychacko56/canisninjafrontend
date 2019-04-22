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
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';


class App extends Component {
  

  constructor(){
   super();
   this.toggleNavbar = this.toggleNavbar.bind(this);
   this.state = {
    route:'login',
    collapsed: true,
    user:{
      email:'',
      fullname:''
    },
    urls:['http://localhost:3000/https://canisninja.herokuapp.com/#', 'http://localhost:3000/', 'localhost:3000','https://canisninja.herokuapp.com/','https://canisninja.herokuapp.com/https://canisninja.herokuapp.com/#']
   }
 }


 toggleNavbar() {
 this.setState({
 collapsed: !this.state.collapsed,
 });
 }

loadUser = (data) =>{
  this.setState({user:{
    email:data.email,
    fullname: data.fullname
  }})
}



/*

componentDidMount() {

if(this.state.user.email){
  this.setState({route:'home'});
}
fetch('https://obscure-lowlands-61077.herokuapp.com/')
.then(response => response.json())
.then(console.log)

}

*/

onRouteChange = (route) => {
this.setState({route:route});
}


  render() {

     const collapsed = this.state.collapsed;
 const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
 const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    if(!(this.state.urls.includes(window.location.href)))
    {
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
                    <button onClick={this.toggleNavbar} className={`${classTwo}`}   type="button" data-toggle="collapse" data-target="https://canisninja.herokuapp.com/#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </button>
            
                    <a className="navbar-brand logo" href="https://canisninja.herokuapp.com/#" onClick={()=> this.onRouteChange('home')}><img src ="/images/logo.jpg" alt="Logo" /></a> 
                    <a className="navbar-brand mx-auto" href="https://canisninja.herokuapp.com/#" onClick={()=> this.onRouteChange('home')}>Canis <span data-blast="color">Ninja</span></a>
                    <div  className={`${classOne}`}  id="navbarCollapse1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"> <a className="nav-link" onClick={() => this.onRouteChange('home')} href="https://canisninja.herokuapp.com/#" data-blast="color"><strong>Home</strong> <span className="sr-only">(current)</span></a> </li>
                            <li className="nav-item"> <a className="nav-link"  href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('services')}><strong>Services</strong></a> </li>

                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('login')}><strong>Login/ Signup</strong></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('user')}><strong>User</strong></a> </li>                            

                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('admin')}><strong>Admin</strong></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('testimonial')}><strong>Testimonial</strong></a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
    
<Error />

  <Footer />

  <script src="js/main.js"></script>
</body>        
      </div>



            );
    }
    else{

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
                    <button onClick={this.toggleNavbar} className={`${classTwo}`}   type="button" data-toggle="collapse" data-target="https://canisninja.herokuapp.com/#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </button>
            
                    <a className="navbar-brand logo" href="https://canisninja.herokuapp.com/#" onClick={()=> this.onRouteChange('home')}><img src ="/images/logo.jpg" alt="Logo" /></a> 
                    <a className="navbar-brand mx-auto" href="https://canisninja.herokuapp.com/#" onClick={()=> this.onRouteChange('home')}>Canis <span data-blast="color">Ninja</span></a>
                    <div  className={`${classOne}`}  id="navbarCollapse1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"> <a className="nav-link" onClick={() => this.onRouteChange('home')} href="https://canisninja.herokuapp.com/#" data-blast="color"><strong>Home</strong> <span className="sr-only">(current)</span></a> </li>
                            <li className="nav-item"> <a className="nav-link"  href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('services')}><strong>Services</strong></a> </li>

                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('login')}><strong>Login/ Signup</strong></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('user')}><strong>User</strong></a> </li>                            

                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('admin')}><strong>Admin</strong></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="https://canisninja.herokuapp.com/#" onClick={() => this.onRouteChange('testimonial')}><strong>Testimonial</strong></a> </li>
                        </ul>
                    </div>
                </div>
            </nav> 
    

{this.state.route === 'home'?<Home />:
(this.state.route === 'login' ?<Login email={this.state.user.email} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> : 
  (this.state.route === 'signup' ? <Signup loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>:
    (this.state.route === 'services'?<Services userEmail= {this.state.user.email} onRouteChange ={this.onRouteChange}/>:
      (this.state.route==='admin'?<Admin userEmail= {this.state.user.email} onRouteChange ={this.onRouteChange} />:
        (this.state.route=='user'?<User userEmail= {this.state.user.email} fullname = {this.state.user.fullname} onRouteChange ={this.onRouteChange}/>:
        <Error />)))))}

  <br />
  <br />
  <br />
  <Footer />

  <script src="js/main.js"></script>
</body>        
      </div>
    );
  }
  }
}

export default App;
