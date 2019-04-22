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

/*
  reactjs fuction to reneder the HTML code
*/
render(){

  /*
    variable to style the users and services table
  */
  var tableStyle = {
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": "1%",
    "width": '800px'
 };

  /*
    variable to style the table header for both users and services table
  */
 var headerStyle = {
  "padding": "10px",
  "text-align": "center"
 };

 /*
    variable to style the table rows for both users and services table
  */
 var rowStyle = {
  "padding": "10px"
 };

return(
  /**
   * HTML elements that are to be shown in the broswer and other devices
   */
      <div style={{'marginTop': '100px', 'textAlign': 'center'}}>
        <h3 style={{'marginTop': '100px'}}>Welcome, Admin!</h3>
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
          {/**
            condition to check if the class variable users is not empty
            if the variable is not null, then the HTML code after the condition
            is renedered in the browser.
          */}
          {this.state.users != null &&      
      <div class="limiter">
    <div class="container-table100">
      <div class="wrap-table100">
      {/**
        User table starts
        shows fields feteched from the database
      */}
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
              {/**
                class variable users key value pair
                is iterated using the map
              */}
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
          {/**
            condition to check class variable services
            is not null and if it is not null then HTML code below 
            the condition to show the services table is shown
          */}
{this.state.services != null &&      
      <div class="limiter">
    <div class="container-table100">
      <div class="wrap-table100">
      {/**
        Services table with fields
        fetched from the database
      */}
        <div class="table100">
          <table>
            <thead>
              <tr class="table100-head">
                <th class="column1">S No</th>
                <th class="column2">Service Name</th>
                <th class="column2">Customer Name</th>
              </tr>
            </thead>
            {/**
              mapper to iterate the services variable
            */}
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