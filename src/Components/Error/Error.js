import React, { Component } from 'react';

/**
 * Error function to handle the
 * 404 message when a link that does not
 * exists is accessed
 */
const Error = () =>{
	return(
<div style={{'width':'50%', 'margin':'0 auto','padding-top': '10%', 'text-align':'center' }}>
			{/**
				container to display the error message
				contains the stylin of the HTML elements
				and displays a sad dog image
			*/}
				<section class="error-container">
					<span><span style ={{'width':'25%', 'font-size': '1000%'}}>4</span></span>
					<span><img src="/images/rotatingDog.gif" alt="Sad Dog Face" style={{'border-radius':'100%', 'width':'50%'}} /></span>
					<span><span  style ={{'width':'25%', 'font-size': '1000%'}}>4</span></span>
				</section>
			<div class="link-container">
			{/**
				heading to show the error message
			*/}
				<h6 style={{'padding-top': '5%'}} >Page Not Found!!I'm just going around in circles here. Please take me Home</h6>
				<a  class="more-link" href="https://canisninja.herokuapp.com/#">

					<div class="col-md-3 banf" style={{'margin': '2% auto', 'background-color': 'orange','width': '10%','padding': '2%'}}>
                               <button type="button">Home</button>
                            </div>



				</a>
				
			</div>
			</div>
		);
}

export default Error;





