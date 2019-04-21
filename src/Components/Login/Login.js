import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      loginEmail:'',
      loginPassword:'',
      loginError: false
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
        this.setState({loginError:false})
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        this.setState({loginError:true})
      }
    })
}

 render(){

  const { onRouteChange } = this.props;
  return(

    <div className="limiter">
    <div className="container-login100">
    <div className="login100-more" style={{backgroundImage: "url(" +"/images/banner.jpg" + ")",marginLeft: '5%' , width: '550px' }} ></div>
               
      <div className="wrap-login100">
        <div className="login100-form validate-form">
          <span className="login100-form-title p-b-34">
            Account Login
          </span>
           
          <div style={{ 'display':this.state.loginError?'block':'none', 'background-color':'red', 'text-align':'center','padding':'1%', 'margin':'5% auto'}}>
                 <p style={{'color':'white'}}> Woff!! Invalid Credentials. Please Try Again </p>
            </div>


          <div  className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
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
          <div><p style={{"marginTop": "2%"}}> Don't Have a Username? Please be our member and Signup Now!</p></div>
          <div style={{"marginTop": "2%"}} className="container-login100-form-btn">
            <button onClick={()=> onRouteChange('signup')} className="login100-form-btn">SignUp</button>
          </div> 
          
        </div>
      </div>
    </div>
  </div>
  );
 }
}
  export default Login;
