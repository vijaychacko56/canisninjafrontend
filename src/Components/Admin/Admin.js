import React, { Component } from 'react';



class  Admin extends Component {


constructor(props) {
    super(props);
    this.state={
     users: '',
     services:''
    }
  }






onGetUsers = ()=> {
	fetch('https://obscure-lowlands-61077.herokuapp.com/users')
	.then(users => users.json())
	.then(users =>{	
		this.setState({users: users});		
})

}
onGetServices = ()=> {  
  fetch('https://obscure-lowlands-61077.herokuapp.com/getservices')
  .then(services => services.json())
  .then(services =>{ 
    this.setState({services: services});    
})

}




render(){
	return(
<div>
			 <div style={{'marginTop': '162px'}} >
                                     <button onClick={this.onGetUsers} className="login100-form-btn">
                                        Get Users
                                     </button>
                       </div>

					


             <div style={{'marginBottom': '60px', 'marginTop': '30px'}} >
                                     <button onClick={this.onSubmitSignup} className="login100-form-btn">
                                        Get Services
                                     </button>
                       </div>   

                       </div>       
		);
}


}

export default Admin;