import React, { Component } from 'react';



class  Admin extends Component {


constructor(props) {
    super(props);
    this.state={
     users: null,
     services: null
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
    console.log(services);  
  })
}

render(){
  var tableStyle = {
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": "1%"
 };

 var headerStyle = {
  "padding": "10px",
  "text-align": "center"
 };

 var rowStyle = {
  "padding": "10px"
 };

return(
      <div style={{'marginTop': '120px', 'textAlign': 'center'}}>
        <h3>Welcome, Admin!</h3>
        
			   <div style={{'marginTop': '50px'}} >
            <button onClick={this.onGetUsers} style={{"width": '150px', "margin": "auto"}} className="login100-form-btn">
              Get Users
            </button>
        </div>
                       
        <div>
          {this.state.users != null &&
            <div>
              <table style={tableStyle} cellPadding="30">
              <caption style={{'textAlign': 'center'}}>List of All Users</caption>
              <thead>
                <tr>
                  <th style={headerStyle}>SNo.</th>
                  <th style={headerStyle}>Name</th>
                  <th style={headerStyle}>Email</th>
                  <th style={headerStyle}>Username</th>
                  <th style={headerStyle}>Member Since</th>
                </tr>
              </thead>
                {Object.keys(this.state.users).map((key) => (
              <tbody>
                <tr>
                  <td style={rowStyle}>{this.state.users[key].id}</td>
                  <td style={rowStyle}>{this.state.users[key].fullname}</td>
                  <td style={rowStyle}>{this.state.users[key].email}</td>
                  <td style={rowStyle}>{this.state.users[key].username}</td>
                  <td style={rowStyle}>{this.state.users[key].joined}</td>
                </tr>
                </tbody> 
                ))}
                
              </table>
            </div>
        }
        </div>

        <div style={{'marginBottom': '60px', 'marginTop': '70px'}} >
          <button onClick={this.onGetServices} style={{"width": '150px', "margin": "auto"}} className="login100-form-btn">
            Get Services
          </button>
        </div>   
        <div>
        {this.state.services != null &&
            <div>
              <table style={tableStyle} cellPadding="30">
              <caption style={{'textAlign': 'center'}}>List of All Services Availed</caption>
              <thead>
                <tr>
                  <th style={headerStyle}>SNo.</th>
                  <th style={headerStyle}>Service Name</th>
                  <th style={headerStyle}>Customer Name</th>
                </tr>
              </thead>
                {Object.keys(this.state.services).map((key) => (
              <tbody>
                <tr>
                  <td style={rowStyle}>{this.state.services[key].id}</td>
                  <td style={rowStyle}>{this.state.services[key].servname}</td>
                  <td style={rowStyle}>{this.state.services[key].cusname}</td>
                </tr>
                </tbody> 
                ))}
                
              </table>
            </div>
        }
        </div>

    </div>       
		);
}


}

export default Admin;