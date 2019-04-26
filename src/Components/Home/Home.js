import React, { Component } from 'react';
import '../../css/banner.css';
import { Slide } from 'react-slideshow-image';
/**
 * array to store the image path
 * these images are used in the slider in the homw page
 */
const slideImages = [
    'images/1new.jpg',
    'images/2.jpg'
];

/**
 * variable to hold the proprties of the 
 * image slider
 */
const properties = {
    duration: 5000, /** time - the image is shown in the slider */
    transitionDuration: 500, /** tranition time in ms */
    infinite: true,
    //indicators: true,
    arrows: true /** arrows - horizontal show is set to true */
  }

const Home = () =>{
	return(
        
	<div> 	
        {/**Image Slider */}
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </div>
            </div>
        </Slide>

    {/** About us section of the home page */}
    <section class="about-sec parallax-section py-lg-5 py-4" id="about">
    {/** container for the row
        the row contains three columns
    */}
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <div class="row choose-main">
                    <div class="col-lg-3">
                        <h3><small>Canis Ninja</small>About US</h3> {/** 1st column Header for the website name and About us */}
                    </div>
                    <div class="col-lg-4 "> { /** 2nd column for about us */}
                        <p class = "about-us-font">Canis Ninja is a service launched by four dog lovers in 1992. The motive of the founders was to provide busy people with the means that ensured their beloved pet is well-taken care off irrespective of the hustle and bustle of daily life. </p>
                    </div>
                    <div class="col-lg-4"> { /** 3rd column for about us */}
                        <p class = "about-us-font"> Our team of Ninja hopes to make having a pet easier and more manageable by providing services to complement the schedule of the different customer segments.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/** about us section ends */}
    
    {/*
        Our values section
        talks about the core values of canis ninja website
    */}
    <section class="grids-bottom-w3ls bg-light py-md-5 py-3">
        <div class="container">
        {/** thhe container consists of one row that contains 4 columns */}
            <div class="row">
               <span class="form-title"><h2>Our Values</h2></span> {/** heading */}
                <div class="col-lg-3 about-in text-left">    {/** column 1 starts */}
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-home" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title">Home Service</h5> {/** value 1 */}
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Our Ninja come right to your home at the time of your convenience. 
                            </p> {/** value 1 description */}
                        </div>
                    </div>

                </div> {/** column 1 ends  */}
                <div class="col-lg-3 about-in text-left"> {/** column 1 starts */}
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-cubes" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title"> Fast and Reliable</h5> {/** value 2 */}
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3"> Our Ninjas are quick, fast and work around your schedule.
                            </p> {/** value 2 description */}
                        </div>
                    </div>

                </div> {/** column 2 ends  */}
                <div class="col-lg-3 about-in text-left"> {/** column 3 starts */}
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-heart-o" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title"> Love and Care</h5> {/** value 3 */}
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Our Ninjas are well trained dog handlers and gentle care takers.
                            </p> {/** value 3 description */}
                        </div>
                    </div>

                </div> {/** column 3 ends */}
                <div class="col-lg-3 about-in text-left"> {/** column 4 starts */}
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-calendar" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title">Easy Booking</h5> {/** value 4 */}
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Book a Ninja with ease.
                            </p> {/** value 4 description */}
                        </div>
                    </div>

                </div> {/** column 4 ends */}
                
            </div>
        </div>
    </section> {/**our values section ends */}
    {/** gallery setion 
        consists of several photos from our customers 
        and ninjas
    */}
    <section class="banner-bottom-wthree py-md-5 py-3" id="gallery">
        <div class="container"> {/** container for the gallery */}
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <h3 class="tittle text-center mb-lg-5 mb-3"> {/** title for the section */}
                    <span data-blast="color">Latest</span> Photos</h3> 
                <div class="row gallery_grid-more project-grids"> {/** row for the gallery */}
                    <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 personal_gallery_grid1 hover14 column"> {/** column 1 */}
                        <div class="personal_gallery_effect"> {/** container for the image 1 */}
                            <a href="/images/g1.jpg" data-lightbox="example-set" data-title="image1">
                                <figure>
                                    <img src="./images/g1.jpg" alt=" " class="img-fluid" /> {/** image 1 */}
                                </figure>
                            </a> {/** image is a link and no clicking the image the image shows up on the screen */}
                        </div>
                    </div>
                    <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 personal_gallery_grid1 hover14 column"> {/** column 2 */}
                        <div class="personal_gallery_effect"> {/** container for the image 2 */}
                            <a href="/images/g2.jpg" data-lightbox="example-set" data-title="image2">
                                <figure>
                                    <img src="/images/g2.jpg" alt=" " class="img-fluid" /> {/** image 2 */}
                                </figure>
                            </a> {/** image is a link and no clicking the image the image shows up on the screen */}
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 personal_gallery_grid1 hover14 column"> {/**column 3 */}
                        <div class="personal_gallery_effect"> {/** container for the image 3 */}
                            <a href="/images/g3.jpg" data-lightbox="example-set" data-title="image3">
                                <figure>
                                    <img src="/images/g3.jpg" alt=" " class="img-fluid" /> {/** image 3 */}
                                </figure>
                            </a> {/** image is a link and no clicking the image the image shows up on the screen */}
                        </div>
                    </div>
                </div>
                <div class="row gallery_grid-more"> {/** row 2 */}
                    <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 personal_gallery_grid1 view_gallery_grid1 hover14 column"> {/** column 1 */}
                        <div class="personal_gallery_effect"> {/** container for the image 4 */}
                            <a href="/images/g4.jpg" data-lightbox="example-set" data-title="image4">
                                <figure>
                                    <img src="/images/g4.jpg" alt=" " class="img-fluid" /> {/** image 4 */}
                                </figure>
                            </a> {/** image is a link and no clicking the image the image shows up on the screen */}
                        </div>
                    </div>
                    <div class="col-md-3 pt-2 pl-2 p-0 col-sm-3 col-6 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g5.jpg" data-lightbox="example-set" data-title="image5">
                                <figure>
                                    <img src="/images/g5.jpg" alt=" " class="img-fluid" style={{'height': '370px'}}/>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 pt-2 pl-2 p-0 col-sm-3 col-6 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href='/images/g6.jpg' data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                                <figure>
                                    <img src='/images/g6.jpg' alt=" " class="img-fluid" style={{'height': '370px'}}/>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>

            </div>
        </div>
    </section>
  </div>

		);
}
export default Home ;