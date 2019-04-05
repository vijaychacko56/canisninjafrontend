import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      loginEmail:'',
      loginPassword:''
    }
  }

 onEmailChange = (event) => {
    this.setState({loginEmail: event.target.value})
 }
 onPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value})
 }
 onSubmitLogin = () => {
    fetch('https://obscure-lowlands-61077.herokuapp.com/signin',{
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email:this.state.loginEmail,
        password:this.state.loginPassword
      })
    })
    .then(response => response.json())
    .then(user =>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        alert("Wrong credentials");
      }
    })
}

 render(){

  const { onRouteChange } = this.props;
  return(

    <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-form validate-form">
          <span className="login100-form-title p-b-34">
            Account Login
          </span>
           
          <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
            <input onChange={this.onEmailChange} id="email" className="input100" type="text" name="email" placeholder="Email"/>
            <span className="focus-input100"></span>
          </div>
          <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
            <input onChange={this.onPasswordChange} id="pass" className="input100" type="password" name="pass" placeholder="Password"/>
            <span className="focus-input100"></span>
          </div>
          
          <div className="container-login100-form-btn">
            <button onClick ={this.onSubmitLogin} className="login100-form-btn">LOGIN</button>
          </div>

          <div className="w-full text-center p-t-27 p-b-239">
            <span className="txt1">
             
            </span>

            <a href="#" className="txt2">
             
            </a>
          </div>
            <div className="container-login100-form-btn">
            <button onClick={()=> onRouteChange('signup')} className="login100-form-btn">SignUp</button>
          </div> 
          
        </div>


       

       <div className="login100-more" style={{backgroundImage: "url(" +"/images/banner.jpg" + ")"}}></div>
       
      </div>
    </div>
  </div>
  


    );
 }

  
}
  export default Login;
