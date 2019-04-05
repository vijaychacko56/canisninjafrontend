import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="action-sec py-lg-5 py-3">
                <div className="text-center center-block copyright mt-md-5 mt-4">
                    <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social"></i></a>
                    <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social"></i></a>
                    <p>© 2019 Canis Ninja . All Rights Reserved | Design by Team 26</p>
  
                </div>
            </footer>
        );
    }
}

export default Footer;