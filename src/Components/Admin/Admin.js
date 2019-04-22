import React, { Component } from 'react';
import { Table } from 'reactstrap';


class  Admin extends Component {


constructor(props) {
    super(props);
    this.state={
     users: null,
     services: null
    }
  }


componentDidMount() {
  if(!this.props.userEmail){
    alert("Login first")
    this.props.onRouteChange('login');  
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
    "margin-top": "1%",
    "width": '800px'
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
        <h3 style={{'marginTop': '150px'}}>Welcome, Admin!</h3>
        <div style={{'marginTop': '50px'}}>
          <p>Please select an operation you want to perform.</p>
        </div>
        
			   <div style={{'marginTop': '50px'}} >
            <button onClick={this.onGetUsers} style={{"width": '150px', "margin": "auto"}} className="login100-form-btn">
              Get Users
            </button>
        </div>
         <br />
         <br />              
        <div>
          {this.state.users != null &&      
      <div class="limiter">
    <div class="container-table100">
      <div class="wrap-table100">
        <div class="table100">
          <table>
            <thead>
              <tr class="table100-head">
                <th class="column1">S No</th>
                <th class="column2">Name</th>
                <th class="column2">Email</th>
                <th class="column2">User Name</th>
                <th class="column2">Member Since</th>
              </tr>
            </thead>
            
              {Object.keys(this.state.users).map((key) => (
              <tbody>
                <tr>
                  <td class="column1">{this.state.users[key].id}</td>
                  <td class="column2">{this.state.users[key].fullname}</td>
                  <td class="column2">{this.state.users[key].email}</td>
                  <td class="column2">{this.state.users[key].username}</td>
                  <td class="column2">{this.state.users[key].joined}</td>
                </tr>
                </tbody> 
                ))}
            
          </table>
        </div>
      </div>
    </div>
  </div> 
}
        </div>

        <div style={{'marginBottom': '60px', 'marginTop': '70px'}} responsive="sm" >
          <button onClick={this.onGetServices} style={{"width": '150px', "margin": "auto"}} className="login100-form-btn">
            Get Services
          </button>
        </div>   
        <div>
{this.state.services != null &&      
      <div class="limiter">
    <div class="container-table100">
      <div class="wrap-table100">
        <div class="table100">
          <table>
            <thead>
              <tr class="table100-head">
                <th class="column1">S No</th>
                <th class="column2">Service Name</th>
                <th class="column2">Customer Name</th>
              </tr>
            </thead>
                {Object.keys(this.state.services).map((key) => (
              <tbody>
                <tr>
                  <td class="column1">{this.state.services[key].id}</td>
                  <td class="column2">{this.state.services[key].servname}</td>
                  <td class="column2">{this.state.services[key].cusname}</td>
                </tr>
                </tbody> 
                ))}
                
              </table>
            </div>
          </div>
        </div>
      </div>
    }
  </div>

  </div>       
  );
}


}

export default Admin;