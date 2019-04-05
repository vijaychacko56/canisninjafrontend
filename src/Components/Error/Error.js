import React, { Component } from 'react';


const Error = () =>{
	return(
<div style={{'width':'100%', 'margin':'0 auto','padding-top': '10%', 'height':'50%'}}>
			
				<section class="error-container">
					<span><span>4</span></span>
					<span><img src="/images/rotatingDog.gif" alt="Sad Dog Face" style={{'border-radius':'100%', 'width':'50%'}} /></span>
					<span><span>4</span></span>
				</section>
			<div class="link-container">
				<h6 style={{'padding-top': '35px'}} >Page Not Found!!I'm just going around in circles here. Please take me Home</h6>
				<a target="_blank" href="index.html" class="more-link">Home</a>
			</div>
			</div>
		);
}

export default Error;





