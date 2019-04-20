import React, { Component } from 'react';


class Services extends Component {
	
constructor(props) {
    super(props);
    this.state={
      cusname:'',
      servname:'',
      phone:'',
      ondate:'',
      address:''
    }
  }

 onNameChange = (event) => {
    this.setState({cusname: event.target.value})
 }
 onAddressChange = (event) => {
    this.setState({address: event.target.value})
 }
 onServiceChange = (event) => {
    this.setState({servname: event.target.value})
 }
 onPhoneChange = (event) => {
    this.setState({phone: event.target.value})
 }
 onDateChange = (event) => {
    this.setState({ondate: event.target.value})
 }
onSubmitService = () =>{
    if(this.props.userEmail){
    fetch('https://obscure-lowlands-61077.herokuapp.com/saveservice',{
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email:this.props.userEmail,
        cusname:this.state.cusname,
        address:this.state.address,
        phone:this.state.phone,
        ondate:this.state.ondate,
        servname: this.state.servname,
        fullname: this.state.fullname
      })
    }).then(response => response.json())
    .then(res => {
        if (res === 'servicesaved'){
            alert('Service Saved');
        }
        else{
            alert('Service DID NOT save. Please try Again');    
        }
    })
}
else{
    alert('You Must login First. Thank You');
    this.props.onRouteChange('login');
}
}



    render(){

     return(
<div>
<section class="about-sec parallax-section py-lg-5 py-4" id="services">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3"/>
             
        </div>
</section>      

   <section class="banner-bottom-wthree py-md-5 py-3" id="services">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <h3 class="tittle text-center mb-lg-5 mb-3">
                    <span data-blast="color">Our</span>Services</h3>
                       
                <div class="row choose-main my-lg-4 my-3">
                    <div class="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div class="galsses-grid-left">
                            <figure class="effect-lexi">
                                <img src="/images/s1.jpg" alt="" class="img-fluid"/>
                           
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6 galsses-grid-right mt-4">

                        <h3 class="post mt-3">Playtime Service</h3>
                        <div class="line" data-blast="bgColor"></div>
                        <p class="mt-3">Our customers lead a very busy life and cannot play with their furry friends. 
                            Our dog handlers can spend some time with your pets and keep them energized. </p>
                        <div class="log-in mt-md-4 mt-3">
                            <a class="btn text-uppercase" data-blast="bgColor" href="#book">
                             Book Now</a>
                        </div>

                    </div>
                </div>
               
                <div class="row choose-main mt-lg-4 mt-3">
                    <div class="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div class="galsses-grid-left">
                            <figure class="effect-lexi">
                                <img src="/images/s2.jpg" alt="" class="img-fluid"/>
                               
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6 galsses-grid-right mt-4 last-gd">

                        <h3 class="post mt-3">Take My Dog To A Vet Service</h3>
                        <div class="line" data-blast="bgColor"></div>
                       <p class="mt-3">Your pet needs their monthly doctor visits.
                                Our dog handlers will assist you in taking your pet to that important appointment. </p>
                        <div class="log-in mt-md-4 mt-3">
                            <a class="btn text-uppercase" data-blast="bgColor" href="#">
                             Book Now</a>
                        </div>

                    </div>
                </div>
                
                
                 <div class="row choose-main mt-lg-4 mt-3">
                    <div class="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div class="galsses-grid-left">
                            <figure class="effect-lexi">
                                <img src="/images/s1.jpg" alt="" class="img-fluid"/>
                               
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6 galsses-grid-right mt-4 last-gd">

                        <h3 class="post mt-3">Dog Walking Service</h3>
                        <div class="line" data-blast="bgColor"></div>
                       <p class="mt-3">Our expert dog handlers will assist you in walking you dog. On booking this service. 
                                They will be at your doorstep at scheduled time.</p>
                        <div class="log-in mt-md-4 mt-3">
                            <a class="btn text-uppercase" data-blast="bgColor" href="#">Book Now</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    


   
    <section class="about-sec parallax-section py-lg-5 py-4" id="book">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <div class="choose-main" style= {{'text-align': 'center'}}>
                    <div style= {{'display': 'inline-block'}}>
                    <div id="search_form" class="search_top text-center">
                        <div class="booking-form row">
                            <div class="col-md-3 banf">
                                <input onChange={this.onNameChange} class="form-control" type="text" name="Name" placeholder="Name" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onAddressChange} class="form-control" type="text" name="Address" placeholder="Address" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onDateChange} class="form-control"  type="text" name="Date" placeholder="Date" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <input onChange={this.onPhoneChange} class="form-control" type="text" name="phone" placeholder="Phone" required=""/>
                            </div>
                            <div class="col-md-3 banf">
                                <select onChange={this.onServiceChange} id="country13" class="form-control">
                                    <option value=''>  </option>
                                    <option value='Puppy Program'>Puppy Program</option>
                                    <option value='Dog Walking'>Dog Walking</option>
                                    <option value='Pet Sitting'>Pet Sitting</option>
                                </select>
                            </div>
                            <div class="col-md-3 banf" style = {{'margin':'0 auto','color': 'orange'}}>
                                <input onClick={this.onSubmitService} onclass="form-control" color= "orange" type="submit" value="Book Now"/>
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