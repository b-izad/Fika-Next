const Footer = () => {
  return (
    <div className="bg-dark-four dark-footer">
      <div className="footer-section">
        <div className="footer-widget-section">
          <div className="container custom-container">
            <div className="row gy-6">
              <div className="col-md-4">
                <div className="footer-widget">
                  <div className="footer-widget__logo">
                    <a className="logo-dark" href="index.html">
                      <img src="/assets/images/logo.svg" alt="Logo" />
                    </a>
                  </div>
                  <div className="footer-widget__social">
                    <a href="#"><i className="lastudioicon-b-facebook"></i></a>
                    <a href="#"><i className="lastudioicon-b-twitter"></i></a>
                    <a href="#"><i className="lastudioicon-b-pinterest"></i></a>
                    <a href="#"><i className="lastudioicon-b-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-links">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-contact">
                  <h4>Contact Us</h4>
                  <p>Email: <a href="mailto:info@fikaspot.com">info@fikaspot.com</a></p>
                  <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright footer-copyright-two">
          <div className="container">
            <div className="row row-cols-1 align-items-center">
              <div className="col">
                <div className="footer-copyright-text text-center">
                  <p>© 2024 <strong>FikaSpot</strong> Made by Bahareh Izadpanah <i className="lastudioicon-heart-1"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
