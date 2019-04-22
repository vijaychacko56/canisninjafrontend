import React, { Component } from 'react';
import { Table } from 'reactstrap';


class  User extends Component {


constructor(props) {
    super(props);
    this.state={
    userEmail: this.props.userEmail,
     users: null,
     services: null,
     name: this.props.fullname
    }
  }


componentDidMount() {
  if(this.props.userEmail){
      fetch('https://obscure-lowlands-61077.herokuapp.com/getuserservice',{
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.userEmail
      })
    })
  
  .then(users => users.json())
  .then(users =>{ 
    this.setState({users: users});
    console.log(users);    
  })
  }
  else{
    alert("Login first")
    this.props.onRouteChange('login')
  }

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
      
        <h3 style={{'marginTop': '150px'}}>Welcome, {this.state.name}!</h3>
        <div style={{'marginTop': '50px'}}>
          <p>Service History</p>
        </div>
        
         <div style={{'marginTop': '50px'}} >
            
        </div>

      {this.state.users != null &&      
      <div class="limit">
    <div class="container-t">
      <div class="wrap-t">
        <div class = "localUser">
          <table>
            <thead>
              <tr class="table-head">
                <th class="columnA">Name</th>
                <th class="columnB">Service Name</th>
                <th class="columnB">Date</th>
                <th class="columnB">Address</th>
              </tr>
            </thead>
            
              {Object.keys(this.state.users).map((key) => (
              <tbody>
                <tr>
                  <td class="columnA">{this.state.users[key].cusname}</td>
                  <td class="columnB">{this.state.users[key].servname}</td>
                  <td class="columnB">{this.state.users[key].ondate}</td>
                  <td class="columnB">{this.state.users[key].address}</td>
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
    );
}


}

export default User;