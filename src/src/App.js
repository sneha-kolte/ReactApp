import React, { Component } from 'react';
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
      <div class="text-center callToAct container">
        <h3>Call To Action</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a class="cta-btn" href="#">Call To Action</a>
      </div>
  </section>

  <section id="contactUs">
      <div class="container">
      <div class="section-header">
       
          <h3>Contact Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
            <i class="fa fa-home"></i>
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="fa fa-phone"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="fa fa-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>

        </div>
        <div class="form-row">
              <div class="form-group col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                
              </div>
              <div class="form-group col-md-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"></input>
               
              </div>
        </div>
        <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"></input>
              <div class="validation"></div>
        </div>
        <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div class="validation"></div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </div>
      
  </section>
  <footer id="footer">
  <div class="footer-top">
      <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-6 footer-info">
            <h3>BizPage</h3>
            <p>Cra~~s fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="fa fa-arrow-right"></i> <a href="#">Home</a></li>
              <li><i class="fa fa-arrow-right"></i> <a href="#">About us</a></li>
              <li><i class="fa fa-arrow-right"></i> <a href="#">Services</a></li>
              <li><i class="fa fa-arrow-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="fa fa-arrow-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>
          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
            
          </div>
          
          
        </div>
      </div>
  </div> 
  </footer>

 </div>
    )
  }
}
export default App;
