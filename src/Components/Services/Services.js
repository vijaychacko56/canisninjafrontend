import React, { Component } from 'react';


class Services extends Component {
	
constructor(props) {
    super(props);
    this.state={
      cusname:'',
      servname:'',
      phone:'',
      ondate:'',
      address:'',
      error: false,
      success:false
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
    const {cusname, address, phone, ondate, servname} = this.state;
    if(this.props.userEmail){
     if(cusname && address && phone && ondate && servname)   {
        this.setState({error: false});
    fetch('https://obscure-lowlands-61077.herokuapp.com/saveservice',{
      method: 'post',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        email:this.props.userEmail,
        cusname:this.state.cusname,
        address:this.state.address,
        phone:this.state.phone,
        ondate:this.state.ondate,
        servname: this.state.servname
      })
    }).then(response => response.json())
    .then(res => {
        if (res === 'servicesaved'){
            this.setState({success: true});
            
        }
        else{
            alert('Service DID NOT save. Please try Again');    
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



    render(){

     return(
<div>
<section className="about-sec parallax-section py-lg-5 py-4" id="services">
        <div className="container">
            <div className="inner-sec-w3layouts py-md-5 py-3"/>
             
        </div>
</section>      

   <section className="banner-bottom-wthree py-md-5 py-3" id="services">
        <div className="container">
            <div className="inner-sec-w3layouts py-md-5 py-3">
                <h3 className="tittle text-center mb-lg-5 mb-3">
                    <span data-blast="color">Our</span>Services</h3>
                       
                <div className="row choose-main my-lg-4 my-3">
                    <div className="col-lg-6 galsses-grid-right mt-lg-4 hover14">
                        <div className="galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="/images/s1.jpg" alt="" className="img-fluid"/>
                           
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 galsses-grid-right mt-4">

                        <h3 className="post mt-3">Playtime Service</h3>
                        <div className="line" data-blast="bgColor"></div>
                        <p className="mt-3">Our customers lead a very busy life and cannot play with their furry friends. 
                            Our dog handlers can spend some time with your pets and keep them energized. </p>
                        <div className="log-in mt-md-4 mt-3">
                            <a className="btn text-uppercase" data-blast="bgColor" href="#book">
                             Book Now</a>
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
                    <div className="col-lg-6 galsses-grid-right mt-4 last-gd">

                        <h3 className="post mt-3">Pet Sitting Service</h3>
                        <div className="line" data-blast="bgColor"></div>
                       <p className="mt-3">Your busy schedule may result in you leaving your pets alone at home. But count on us  
                       to show your pet that you still do care!! </p>
                        <div className="log-in mt-md-4 mt-3">
                            <a className="btn text-uppercase" data-blast="bgColor" href="#">
                             Book Now</a>
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
                        <div className="log-in mt-md-4 mt-3">
                            <a className="btn text-uppercase" data-blast="bgColor" href="#">Book Now</a>
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

   
   <section className="about-sec parallax-section py-lg-5 py-4" id="book">

        <div className="container">

            <div className="inner-sec-w3layouts py-md-5 py-3">
            
                <div className="choose-main" style= {{'text-align': 'center'}}>

                    <div className= {{'display': 'inline-block'}}>
                    <div id="search_form" className="search_top text-center">

                        <div className="booking-form row">
                            <div className="form-group  col-md-3 banf">
                                <input onChange={this.onNameChange} className="form-control" type="alpabet" name="Name" placeholder="Name" required=""/>
                            </div>
                            <div className="form-group  col-md-3 banf">
                                <input onChange={this.onAddressChange} className="form-control" type="address" name="Address" placeholder="Address" required=""/>
                            </div>
                            <div className="form-group  col-md-3 banf">
                                <input onChange={this.onDateChange} className="form-control"  type="date" name="Date" placeholder="Date" required=""/>
                            </div>
                            <div className="form-group  col-md-3 banf">
                                <input onChange={this.onPhoneChange} className="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="Phone" required=""/>
                            </div>
                            <div className="form-group  col-md-3 banf">
                                <select type="services" onChange={this.onServiceChange} id="country13" className="form-control">
                                    <option value=''>  </option>
                                    <option value='Puppy Program'>Playtime Service</option>
                                    <option value='Dog Walking'>Dog Walking</option>
                                    <option value='Pet Sitting'>Pet Sitting</option>
                                </select>
                            </div>
                            <div className="form-group  col-md-3 banf" style = {{'margin':'0 auto','color': 'orange'}}>
                                <input onClick={this.onSubmitService} onclassName="form-control" color= "orange" type="submit" value="Book Now"/>
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