import React, { Component } from 'react';
/**
 * Footer class that contains external links to
 * facebook, twitter, etc
 * also contains the copyright message
 */
class Footer extends Component {
    /**
     * render function displays the
     * HTML elements in the browser
     */
    render() {

        return (
            <footer className="action-sec py-lg-5 py-3 " >
                <div className="text-center center-block copyright mt-md-5 mt-4">
                {/**
                    link to facebook website
                */}
                    <a href="https://www.facebook.com"><i className="fa fa-facebook-square fa-3x social"></i></a>
                {/**
                    link to twitter website
                */}
                    <a href="https://twitter.com"><i className="fa fa-twitter-square fa-3x social"></i></a>
                 {/**
                    link to google website
                */}
                    <a href="https://plus.google.com"><i className="fa fa-google-plus-square fa-3x social"></i></a>
                 {/**
                    link to the gmail website
                */}
                    <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social"></i></a>
                {/**
                    copyright message
                */}
                    <p>© 2019 Canis Ninja . All Rights Reserved | Design by Team 26</p>
  
                </div>
            </footer>
        );
    }
}

export default Footer;