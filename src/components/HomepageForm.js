import React from 'react'

class HomepageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
             name: null


        }
    }
handleSubmit=(event) =>{
    event.preventDefault()
    console.log('ehhe')
}

    render(){
        return(
            <div>
                <section id="contactUs">
      <div className="container">
      <div className="section-header">
       
          <h3>Contact Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
            <i className="fa fa-home"></i>
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="fa fa-phone"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="fa fa-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>

        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"  ></input>
                
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" ></input>
               
              </div>
        </div>
        <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" ></input>
              <div className="validation"></div>
        </div>
        <div className="form-group">
              <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
              <div className="validation"></div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
      
      
  </section>
            </div>
        );
    }
}

export default HomepageForm;