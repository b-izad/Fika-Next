import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />

      <div className="breadcrumb" style={{ backgroundImage: 'url(/assets/images/contact3.png)' }}  >
        <div className="container" >
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <h1 className="breadcrumb_title">Contact Us</h1>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding-03 contact-section2 contact-section2_bg">
        <div className="container custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-section2_content">
                <h2 className="contact-section2__title">Drop Us a Line!</h2>
                <p className="contact-section2__text">We'd love to hear from you! Whether you have a question about our menu, want to share your favorite moments at our cafe, or have suggestions on how we can improve, we're all ears. Let's be friends and make your experience even better!</p>
                <ul className="contact-section2_list">
                  <li>
                    <span className="contact-section2_list__icon"><i className="lastudioicon lastudioicon-pin-3-2"></i></span>
                    <span className="contact-section2_list__text">691 Main Street  <br /> Waltham, MA</span>
                  </li>
                  <li>
                    <span className="contact-section2_list__icon"><i className="lastudioicon lastudioicon-phone-2"></i></span>
                    <span className="contact-section2_list__text">+880-123-456789 <br /> +880-123-456789</span>
                  </li>
                  <li>
                    <span className="contact-section2_list__icon"><i className="lastudioicon lastudioicon-mail"></i></span>
                    <span className="contact-section2_list__text">info@admin.com <br /> test.mail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-section2_formbg">
                <h2 className="contact-section2_form__title">Contact Form</h2>
                <form className="contact-section2_form" id="contact-form" action="/api/contact" method="post">
                  <div className="row">
                    <div className="col-sm-6 col-6 form-p">
                      <div className="form-group">
                        <label>First Name*</label>
                        <input className="form-field" type="text" name="name" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-6 form-p">
                      <div className="form-group">
                        <label>Last Name*</label>
                        <input className="form-field" type="text" name="lastname" />
                      </div>
                    </div>
                    <div className="col-md-12 form-p">
                      <div className="form-group">
                        <label>Email Address*</label>
                        <input className="form-field" type="email" name="email" />
                      </div>
                    </div>
                    <div className="col-md-12 form-p">
                      <div className="form-group">
                        <label>Message*</label>
                        <textarea className="form-control text-area" name="message"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 form-p">
                      <div className="form-group mb-0 d-flex justify-content-center">
                        <button className="btn btn-secondary btn-hover-primary" type="submit" value="Send Message">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form-messege"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="google-map-area w-100" data-aos="fade-up" data-aos-duration="1000">
          <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11789.670333832459!2d-71.23767!3d42.37625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382d64f9820fb%3A0x7706e4e685ecaec4!2s691%20Main%20St!5e0!3m2!1sen!2sus!4v1719179042663!5m2!1sen!2sus" width="600"></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
