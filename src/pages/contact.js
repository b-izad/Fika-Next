import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />

      <div className="breadcrumb"  >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <h1 className="breadcrumb_title">Contact Us</h1>
                <ul className="breadcrumb_list">
                  <li><a href="/">Home</a></li>
                  <li>Contact Us</li>
                </ul>
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
                <h2 className="contact-section2__title">Information</h2>
                <p className="contact-section2__text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt</p>
                <ul className="contact-section2_list">
                  <li>
                    <span className="contact-section2_list__icon"><i className="lastudioicon lastudioicon-pin-3-2"></i></span>
                    <span className="contact-section2_list__text">6391 Elgin St. Celina, Delaware 10299 <br /> 2464 Royal Ln. Mesa, New Jersey 45463</span>
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
                <h2 className="contact-section2_form__title">Say Something...</h2>
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
          <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11795.379071642536!2d-71.16115173487934!3d42.34583284838896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e378495d3da0ef%3A0x297091881b324e52!2sSt.%20Elizabeth&#39;s%2C%20Boston%2C%20MA!5e0!3m2!1sen!2sus!4v1719081851789!5m2!1sen!2sus" width="600"></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
