import React, { Component } from 'react';
import '../../css/signup.css';

/**
 * Signup class that shows the signup form
 * and handles data validation of the form fields
 */
class  Signup extends Component {
    /** class constructor
     * intiliazes class variables
     */
   constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      repeatPassword:'',
      username:'',
      fullname:'',
      signupError:false
    }
  }
 /**
  * function called when email input field is changed
  */
 onEmailChange = (event) => {
    this.setState({email: event.target.value})
 }
  /**
  * function called when password input field is changed
  */
 onPasswordChange = (event) => {
    this.setState({password: event.target.value})
 }
  /**
  * function called when confirm password input field is changed
  */
 onRepeatPasswordChange = (event) => {
    this.setState({repeatPassword: event.target.value})
 }
  /**
  * function called when username input field is changed
  */
 onUsernameChange = (event) => {
    this.setState({username: event.target.value})
 }
  /**
  * function called when name input field is changed
  */
  onNameChange = (event) => {
    this.setState({fullname: event.target.value})
 }

/**
 * function called when the sign up form is submitted
 * handles the validation of entered input fields
 * when successful subscries the user and saves details in the database
 */
onSubmitSignup = () => {
        const {email, password, username, fullname} = this.state;
        if(this.state.password != this.state.repeatPassword){
            this.setState({signupError: false})
            alert("Passwords dont match"); /** error message */

        }
        else{

    if(email && password && username && fullname){
         this.setState({signupError: false})
     fetch('https://obscure-lowlands-61077.herokuapp.com/register',{ /** end point to save the user details in the database */
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        username: this.state.username,
        fullname: this.state.fullname
      })
    })
    .then(response => response.json())
    .then(user =>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        alert("Signup Failed. Try Again Please");
         this.setState({signupError: true})
      }
    })

        }
        else{
                this.setState({signupError: true})
        }
    }

    
}
/**
 * function to display the HTNL elements in the browser
 * contains sign up form
 * and background image
 *
 */

    render(){
        const {onRouteChange} = this.props;

        return(
            <div class="container-login100">
            
                <div className="login100-more" style={{backgroundImage: "url(" +"/images/banner.jpg" + ")",marginLeft: '5%' , width: '550px' }} ></div>
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <div className="login100-form validate-form" style={{'padding-top': '90px'}}>
                            <span className="login100-form-title p-b-59">
                                SIGN UP {/** title for the form */}
                            </span>
                                {/** container for displaying the error messge */}
                                <div style={{ 'display':this.state.signupError?'block':'none', 'background-color':'red', 'text-align':'center','padding':'1%', 'margin':'5% auto'}}>
                                     <p style={{'color':'white'}}> Woff!! Please enter all fields to Register!!</p>
                                </div>
                                { /** container for input field  name */}
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <input onChange={this.onNameChange} className="input100" type="text" name="name" placeholder="Name..."/>
                                <span className="focus-input100"></span>
                            </div>
                            {  /** container for input field  email */}
                            <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                
                                <input onChange={this.onEmailChange} className="input100" type="text" name="email" placeholder="Email addess..."/>
                                <span className="focus-input100"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                               
                                <input onChange={this.onUsernameChange} className="input100" type="text" name="username" placeholder="Username..."/>
                                <span className="focus-input100"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                
                                <input onChange={this.onPasswordChange} className="input100" type="password" name="pass" placeholder="Password"/>
                                <span className="focus-input100"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate = "Repeat Password is required">
                                
                                <input onChange={this.onRepeatPasswordChange} className="input100" type="password" name="repeat-pass" placeholder="Confirm Password"/>
                                <span className="focus-input100"></span>
                            </div>
        
                            <div className="flex-m w-full p-b-33">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label className="label-checkbox100" for="ckb1">
                                        <span className="txt1">
                                            I agree to the
                                            <a href="#" className="txt2 hov1">
                                                Terms of User
                                            </a>
                                        </span>
                                    </label>
                                </div>
        
                                
                            </div>
        
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button onClick={this.onSubmitSignup} className="login100-form-btn">
                                        Sign Up
                                    </button>
                                </div>

                            </div>
                </div>

             </div>
             </div>


        );

    }
	
}
export default Signup;