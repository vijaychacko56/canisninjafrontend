import React, { Component } from 'react';
import '../../css/signup.css';


class  Signup extends Component {

   constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      repeatPassword:'',
      username:'',
      fullname:''
    }
  }

 onEmailChange = (event) => {
    this.setState({email: event.target.value})
 }
 onPasswordChange = (event) => {
    this.setState({password: event.target.value})
 }
 onRepeatPasswordChange = (event) => {
    this.setState({repeatPassword: event.target.value})
 }
 onUsernameChange = (event) => {
    this.setState({username: event.target.value})
 }
  onNameChange = (event) => {
    this.setState({fullname: event.target.value})
 }


onSubmitSignup = () => {
        if(this.state.password != this.state.repeatPassword){
            alert("Passwords dont match");
        }
        else{

     fetch('https://obscure-lowlands-61077.herokuapp.com/register',{
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
      }
    })

        }

    
}

    render(){
        const {onRouteChange} = this.props;

        return(
            <div class="container-login100">
            
                <div className="login100-more" style={{backgroundImage: "url(" +"/images/banner.jpg" + ")",marginLeft: '5%' , width: '550px' }} ></div>
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <div className="login100-form validate-form" style={{'padding-top': '90px'}}>
                            <span className="login100-form-title p-b-59">
                                SIGN UP
                            </span>
        
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <input onChange={this.onNameChange} className="input100" type="text" name="name" placeholder="Name..."/>
                                <span className="focus-input100"></span>
                            </div>
        
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