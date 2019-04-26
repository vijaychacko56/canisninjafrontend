import React, { Component } from 'react';
import { Table } from 'reactstrap';

/*
  Admin class that shows admin user details about
  all the users and the services availed by the users.
*/
class  Admin extends Component {


/* 
  Contructor of class Admin
  initializes class variables users and services to null
*/
constructor(props) {
    super(props);
    this.state={
     users: null,
     services: null
    }
  }


/* 
  Function that calls the endpoint to fetch
  all the users and their details from the database
*/

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
    this.setState({users: users});		/*Initializes the class variable users with the fetched json data*/ 
  })
}


/* 
  Function that calls the endpoint to fetch
  all the services availed till date from the database
*/
onGetServices = ()=> {  
  fetch('https://obscure-lowlands-61077.herokuapp.com/getservices')
  .then(services => services.json())
  .then(services =>{ 
    this.setState({services: services});  /*Initializes the class variable services with the fetched json data*/
    console.log(services);  
  })
}


/* render this section on the main page

On each button click, check is the state is set, ex- user state and service state
If yes, perform a GET call, and render all the values in a dynamic table

*/
render(){
  

return(
      <div class = "top">
        <h3 class="marginTopH3">Welcome, Admin!</h3>
        <div class = "divTop">
          <p>Please select an operation you want to perform.</p>
        </div>
        
        <div class = "divTop">
            <button onClick={this.onGetUsers} className="login100-form-btn buttonClick">
              Get Users
            </button>
        </div>
        <br />
        <br />
      <div>
    {/* Check the user state and display the table*/}
      {this.state.users != null &&      
      <div class="limit">
    <div class="container-t">
      <div class="wrap-t">
        <div class = "user">

          <table>
            <thead>
              <tr class="table-head">
                <th class="columnB">S No</th>
                <th class="columnB">Name</th>
                <th class="columnB">Email</th>
                <th class="columnB">User Name</th>
                <th class="columnB">Member Since</th>
              </tr>
            </thead>
             {/* Render all the json object from REST call into the table*/}

              {/**
                class variable users key value pair
                is iterated using the map
              */}
              {Object.keys(this.state.users).map((key) => (
              <tbody>
                <tr>
                  <td class="columnB">{this.state.users[key].id}</td>
                  <td class="columnB">{this.state.users[key].fullname}</td>
                  <td class="columnB">{this.state.users[key].email}</td>
                  <td class="columnB">{this.state.users[key].username}</td>
                  <td class="columnB">{this.state.users[key].joined}</td>
                </tr>
                </tbody> 
                ))}
            
          </table>
        </div>
      </div>
    </div>
  </div> 
}
<br />
<br />
        </div>
         {/* Get services results and display in this table*/}
        <div class = "top">
          <button onClick={this.onGetServices} className="login100-form-btn buttonClick">
            Get Services
          </button>
        </div>  
        <br />
        <br /> 
        <div>
          {/**
            condition to check class variable services
            is not null and if it is not null then HTML code below 
            the condition to show the services table is shown
          */}
{this.state.services != null &&      
      <div class="limit">
    <div class="container-t">
      <div class="wrap-t">
        <div class = "service">

          <table>
            <thead>
              <tr class="table-head">
                <th class="columnB">S No</th>
                <th class="columnB">Service Name</th>
                <th class="columnB">Customer Name</th>
                <th class="columnB">Phone</th>
                <th class="columnB">Date</th>
              </tr>
            </thead>

            {/**
              mapper to iterate the services variable
            */}
                {Object.keys(this.state.services).map((key) => (
              <tbody>
                <tr>
                  <td class="columnB">{this.state.services[key].id}</td>
                  <td class="columnB">{this.state.services[key].servname}</td>
                  <td class="columnB">{this.state.services[key].cusname}</td>
                  <td class="columnB">{this.state.services[key].phone}</td>
                  <td class="columnB">{this.state.services[key].ondate}</td>
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
// The above section is used to get the web forms for both user and services of admin page

}

export default Admin;