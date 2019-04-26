import React, { Component } from 'react';

/**
 * Login class that renders the
 * login form to the browser
 */
class Login extends Component {
  /**
   * 
   * class constructor
   * intilializes variable email, password, and error
   */
  constructor(props) {
    super(props);
    this.state={
      loginEmail:'', /**email class variable */
      loginPassword:'', /**password class variable */
      loginError: false /** error class variable */
    }
  }
 /**
  * function called when email input field is changed
  */
 onEmailChange = (event) => {
    this.setState({loginEmail: event.target.value})
 }
 /**
  * function called when password input field is changed
  */
 onPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value})
 }
 /**
  * Submit function is called when user hits the LOGIN form button
  * handles the validation of the input fields
  * calls the end point for the validation
  */
 onSubmitLogin = () => {
    fetch('https://obscure-lowlands-61077.herokuapp.com/signin',{ /**end point  */
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({ /** initializes the class variables */
        email:this.state.loginEmail,
        password:this.state.loginPassword
      })
    })
    .then(response => response.json())
    .then(user =>{
      if(user.id){
        this.setState({loginError:false}) /**set error variable to false if user exists */
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        this.setState({loginError:true}) /**** set error variable to true if user does not exists in the database * */
      }
    })
}

/**
 * render function that contains the
 * HTML elements and displays the login form in the browser
 */
 render(){

  const { onRouteChange } = this.props;
  
  return(
    
    <div className="limiter">
    
    <div className="container-login100">
    {/** background image */}
    <div className="login100-more" style={{backgroundImage: "url(" +"/images/banner.jpg" + ")",marginLeft: '5%' , width: '550px' }} ></div>
               
      <div className="wrap-login100">
        <div className="login100-form validate-form">
          <span className="login100-form-title p-b-34">
            Account Login {/** header for the login  page */}
          </span>
           {/** container to display the error messages when the validation fails */}
          <div style={{ 'display':this.state.loginError?'block':'none', 'background-color':'red', 'text-align':'center','padding':'1%', 'margin':'5% auto'}}>
                 <p style={{'color':'white'}}> Woff!! Invalid Credentials. Please Try Again </p>
            </div>

          {/**container for Username input field (email address) */}
          <div  className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
            <input onChange={this.onEmailChange} id="email" className="input100" type="text" name="email" placeholder="Email"/>
            <span className="focus-input100"></span>
          </div>
           {/** container for password input field */}
          <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
            <input onChange={this.onPasswordChange} id="pass" className="input100" type="password" name="pass" placeholder="Password"/>
            <span className="focus-input100"></span>
          </div>
          {/** container for login/submit button */}
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
