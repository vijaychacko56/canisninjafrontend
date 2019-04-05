import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </button>
            
                    <a className="navbar-brand logo" href="#" onClick={()=> this.onRouteChange('home')}><img src ="/images/logo.jpg" alt="Logo" /></a> 
                    <a className="navbar-brand mx-auto" href="#" onClick={()=> this.onRouteChange('home')}>Canis <span data-blast="color">Ninja</span></a>
                    <div className="collapse navbar-collapse" id="navbarCollapse1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"> <a className="nav-link" onClick={() => this.onRouteChange('home')} data-blast="color"><strong>Home</strong> <span className="sr-only">(current)</span></a> </li>
                            <li className="nav-item"> <a className="nav-link"  href="#" onClick={() => this.onRouteChange('services')}><strong>Services</strong></a> </li>
                    
                            <li className="nav-item"> <a className="nav-link" href="#" onClick={() => this.onRouteChange('login')}><strong>Login</strong></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" onClick={() => this.onRouteChange('admin')}><strong>Admin</strong></a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;