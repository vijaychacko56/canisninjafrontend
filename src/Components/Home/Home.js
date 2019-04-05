import React, { Component } from 'react';

const Home = () =>{
	return(
	<div>	
		      <div class="swiper-container main-slider" id="myCarousel" data-blast="bgColor">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide slider-bg-position" style={{'background':'url('+'/images/1.jpg'+')'}} data-hash="slide1">
                           
                        </div>
                        <div class="swiper-slide slider-bg-position" style={{'background':'url('+'/images/2.jpg'+')'}} data-hash="slide2">
                           
                        </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    
                </div>







    <section class="about-sec parallax-section py-lg-5 py-4" id="about">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <div class="row choose-main">
                    <div class="col-lg-3">
                        <h3><small>Canis Ninja</small>About US</h3>
                    </div>
                    <div class="col-lg-4 ">
                        <p class = "about-us-font">Canis Ninja is a service launched by four dog lovers in 1992. The motive of the founders was to provide busy people with the means that ensured their beloved pet is well-taken care off irrespective of the hustle and bustle of daily life. </p>
                    </div>
                    <div class="col-lg-4">
                        <p class = "about-us-font"> Our team of Ninja hopes to make having a pet easier and more manageable by providing services to complement the schedule of the different customer segments.</p>
                        <div class="log-in mt-md-4 mt-3">
                            <a class="btn text-uppercase" data-blast="bgColor" href="#">
                             Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    

    <section class="grids-bottom-w3ls bg-light py-md-5 py-3">
        <div class="container">
            <div class="row">
               <span class="form-title"><h2>Our Values</h2></span>
                <div class="col-lg-3 about-in text-left">
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-home" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title">Home Service</h5>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Our Ninja come right to your home at the time of your convenience.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 about-in text-left">
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-cubes" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title"> Fast and Reliable</h5>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3"> Our Ninjas are quick, fast and work around your schedule.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 about-in text-left">
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-heart-o" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title"> Love and Care</h5>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Our Ninjas are well trained dog handlers and gentle care takers.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 about-in text-left">
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-calendar" aria-hidden="true" data-blast="color"></i>
                            <h5 class="card-title">Easy Booking</h5>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="card-text mt-3">Book a Ninja with ease.
                            </p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </section>


   
    
    
    <section class="banner-bottom-wthree py-md-5 py-3" id="gallery">
        <div class="container">
            <div class="inner-sec-w3layouts py-md-5 py-3">
                <h3 class="tittle text-center mb-lg-5 mb-3">
                    <span data-blast="color">Latest</span> Photos</h3>
                <div class="row gallery_grid-more project-grids">
                    <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g1.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                                <figure>
                                    <img src="./images/g1.jpg" alt=" " class="img-fluid" />
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g2.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                                <figure>
                                    <img src="/images/g2.jpg" alt=" " class="img-fluid" />
                                </figure>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g3.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                                <figure>
                                    <img src="/images/g3.jpg" alt=" " class="img-fluid" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row gallery_grid-more">
                    <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 personal_gallery_grid1 view_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g4.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                                <figure>
                                    <img src="/images/g4.jpg" alt=" " class="img-fluid" />
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 pt-2 pl-2 p-0 col-sm-3 col-6 personal_gallery_grid1 hover14 column">
                        <div class="personal_gallery_effect">
                            <a href="/images/g5.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
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