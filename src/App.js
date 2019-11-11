import React, { Component } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Services from './components/Services'
import './App.css';



class App extends Component {
  render() {
    return(
      <div>
        <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Welcome To Our Studio!</div>
        <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a class="btn btn-xl text-uppercase " href="#services">Tell Me More</a>
      </div>
    </div>
  </header>
  <Services/>

  <section id="call-to-action">
      <div class= "text-center callToAct container">
        <h3>Call To Action</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a class="cta-btn" href="#">Call To Action</a>
      </div>
  </section>

  <section id="contactUs">
      <div class="container">
      <div class="section-header">
       <FontAwesomeIcon icon={faHome} />
          <h3>Contact Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
            <i class="ion-ios-telephone-outline"></i>
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>

        </div>
      </div>
  </section>
 </div>
    )
  }
}
export default App;
