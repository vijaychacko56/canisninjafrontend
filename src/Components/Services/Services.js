import React, { Component } from 'react';

/**
 * Services class
 * contains information about services offered and
 * the book now user form
 */
class Services extends Component {
/**
 * 
 * @param {*} props 
 * construction initializes variables to hold entered 
 * form input fields
 */
constructor(props) {
    super(props);
    this.state={
      cusname:'',
      servname:'',
      phone:'',
      ondate:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      error: false,
      success:false
    }
  }
/**
 * function called when name input field is changed
 */
 onNameChange = (event) => {
    this.setState({cusname: event.target.value})
 }
 /**
 * function called when address input field is changed
 */
 onAddressChange = (event) => {
    this.setState({address: event.target.value})
 }
 /**
 * function called when service name dropbox input field is changed
 */
 onServiceChange = (event) => {
    this.setState({servname: event.target.value})
 }
 /**
 * function called when phone input field is changed
 */
 onPhoneChange = (event) => {
    this.setState({phone: event.target.value})   
 }
/**
 * function called when the focus is out of the phone input field
 * handles validation of phone number field using regex
 * allows 10 digit numeric disits only
 */
 onPhoneEnter = (event) => {
    var phonePattern = /^\d{10}$/;
    var checkMatch = (event.target.value).match(phonePattern);
    if(!checkMatch) {
        alert("Woof! - Please check the phone number, only 10 numeric digits are allowed!");
        this.setState({phone: ''});
    }
 }
 /**
 * function called when zip input field is changed
 */
 onZipChange = (event) => {
     this.setState({zip: event.target.value});
 }
 /**
 * function called when the focus is out of the zip input field
 * handles validation of zip number field using regex
 * allows 5 digit numeric disits only
 */
 onZipEnter = (event) => {
    var zipPattern = /^\d{5}$/;
     var zipMatch = (event.target.value).match(zipPattern);
     if(!zipMatch) {
        alert("Woof! - Please check the zip, only 5 numeric digits are allowed!"); /**error message displayed when zip number is wrong */
        this.setState({zip: ''});
     }
 }
 /**
 * function called when date input field is changed
 */
 onDateChange = (event) => {
    this.setState({ondate: event.target.value})
 }
/**
 * function called when city input field is changed
 */
 onCityChange = (event) => {
    this.setState({city: event.target.value})

 }
 /**
 * function called when state input field is changed
 */
 onStateChange = (event) => {
    this.setState({state: event.target.value})

 }
 
/**
 * function called when user hits the book now button
 * handles form data validation
 * displays error message
 * saves the service details in the database
 */
onSubmitService = () =>{
    const {cusname, address, phone,city,state,zip,ondate, servname} = this.state;
    if(this.props.userEmail){
     if(cusname && address && phone && ondate && servname)   {
        this.setState({error: false});
    fetch('https://obscure-lowlands-61077.herokuapp.com/saveservice',{ /** end point */
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email:this.props.userEmail,
        cusname:this.state.cusname,
        address:this.state.address + ' ' + this.state.city + ' ' + this.state.state+' ' + this.state.zip,
        phone:this.state.phone,
        ondate:this.state.ondate,
        servname: this.state.servname
      })
    }).then(response => response.json())
    .then(res => { /** validation for the service */
        if (res === 'servicesaved'){
            this.setState({success: true});
            
        }
        else{
            alert('Service DID NOT save. Please try Again');    /** error meesage */
        }
    })
}
else{
    this.setState({error: true})
    this.setState({success: false});
}
}
else{
    alert('You Must login First. Thank You');
    this.props.onRouteChange('login');
}
}


/**
 * render function contains the HTML element
 * to be shown in the browser
 * and the style of button and input fields
 */
    render(){
        var buttonStyle = {
            'width': '20%'
           };

        var inputStyle = {
            "height": "40px"
        };
     return(
<div>
    {/** container for the services page */}
<section className="about-sec parallax-section py-lg-5 py-4" id="services">
        <div className="container">
            <div className="inner-sec-w3layouts py-md-5 py-3"/>
             
        </div>
</section>      
{/** container to show information about services offered */}
   <section className="banner-bottom-wthree py-md-5 py-3" id="services">
        <div className="container">
            <div className="inner-sec-w3layouts py-md-5 py-3">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                    <span data-blast="color">Our</span>Services</h3>
                       
                <div class="row choose-main my-lg-4 my-3">
                    <div class="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div class="galsses-grid-left">
                            <figure class="effect-lexi">
                                <img src="/images/5.jpg" alt="" class="img-fluid"/>
                           
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 galsses-grid-right mt-4">

                        <h3 className="post mt-3">Playtime Service</h3>
                        <div className="line" data-blast="bgColor"></div>
                        <p className="mt-3">Our customers lead a very busy life and cannot play with their furry friends. 
                            Our dog handlers can spend some time with your pets and keep them energized. </p>
                            <p><b>Price: $25.00</b></p>
                        <div class="log-in mt-md-4 mt-3">
                            <a data-target="#book" style={{backgroundColor: 'white', padding: '0em 0em'}}href='#'><button className="login100-form-btn" style={buttonStyle} data-blast="bgColor">
                             Book Now</button></a>
                        </div>

                    </div>
                </div>
               
                <div className="row choose-main mt-lg-4 mt-3">
                    <div className="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div className="galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="/images/s2.jpg" alt="" className="img-fluid"/>
                               
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6 galsses-grid-right mt-4 last-gd">

                        <h3 class="post mt-3">Take My Dog To A Vet Service</h3>
                        <div class="line" data-blast="bgColor"></div>
                       <p class="mt-3">Your pet needs their monthly doctor visits.
                                Our dog handlers will assist you in taking your pet to that important appointment. </p>
                                <p><b>Price: $45.00</b></p>
                        <div class="log-in mt-md-4 mt-3">
                        <a data-target="#book" style={{backgroundColor: 'white', padding: '0em 0em'}}href='#'><button className="login100-form-btn" style={buttonStyle} data-blast="bgColor">
                             Book Now</button></a>
                        </div>

                    </div>
                </div>
                
                
                 <div className="row choose-main mt-lg-4 mt-3">
                    <div className="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div className="galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="/images/s1.jpg" alt="" className="img-fluid"/>
                               
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 galsses-grid-right mt-4 last-gd">

                        <h3 className="post mt-3">Dog Walking Service</h3>
                        <div className="line" data-blast="bgColor"></div>
                       <p className="mt-3">Our expert dog handlers will assist you in walking you dog. On booking this service. 
                                They will be at your doorstep at scheduled time.</p>
                                <p><b>Price: $15.00</b></p>
                        <div class="log-in mt-md-4 mt-3">
                        <a data-target="#book" style={{backgroundColor: 'white', padding: '0em 0em'}}href='#'><button className="login100-form-btn" style={buttonStyle} data-blast="bgColor">
                             Book Now</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    
<div style={{ 'display': this.state.error? 'block':'none', 'background-color':'red', 'text-align':'center','padding':'1%'}}>
                 <p style={{'color':'white'}}> Woff!! Please enter all fields</p>
            </div>
<div style={{ 'display': this.state.success? 'block':'none', 'background-color':'green', 'text-align':'center','padding':'1%'}}>
                 <p style={{'color':'white'}}> Yipee!!! Service successfully saved in database </p>
</div>

   
    <section class="about-sec parallax-section py-lg-5 py-4" id="book">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
           
                <div class="choose-main" style= {{'text-align': 'center'}}>
                    <div style= {{'display': 'inline-block'}}>
                    <div id="search_form" class="search_top text-center">
                        <div class="booking-form row" id='booking' style = {{'margin':'2% auto'}}>
                            <div class="col-md-3 banf">
                                <input onChange={this.onNameChange} className="form-control" type="text" name="Name" placeholder="Name" required=""/>
                            </div>
                            <div className="col-md-3 banf">
                                <input onChange={this.onDateChange} className="form-control"  type="date" name="Date" placeholder="Date" required=""/>
                            </div>
                            <div className="col-md-3 banf">
                                <input onChange={this.onPhoneChange} onBlur={this.onPhoneEnter} className="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="Phone" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <select onChange={this.onServiceChange} id="country13" className="form-control">
                                    <option value=''>Select a Service</option>
                                    <option value='Dog Walking'>Dog Walking: Price $15.00</option>
                                    <option value='Puppy Program'>Playtime Service: Price $25.00</option>
                                    <option value='Visit a Vet'>Visit a Vet: Price $45.00</option>
                                </select>
                            </div>
                            </div>
                            <div className="booking-form row" style = {{'margin':'2% auto'}}>
                            <div class="col-md-3 banf">
                                <input onChange={this.onAddressChange} class="form-control" type="text" name="address" placeholder="Address" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onCityChange} class="form-control" type="text" name="city" placeholder="City" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onStateChange} class="form-control" type="text" name="state" placeholder="State" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onZipChange} class="form-control" type="text" name="zip" placeholder="Zip" required=""/>
                            </div>
                            </div>
                            <div className="row">
                            <div class="col-md-3 banf" style = {{'margin':'2% auto','color': 'orange'}}>
                                <button onClick={this.onSubmitService} className="login100-form-btn" onclass="form-control" color= "orange" type="submit">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</div>
        );


    }



        

   
} 


export default Services;