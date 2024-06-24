import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="breadcrumb breadcrumb-about" style={{ backgroundImage: 'url(/assets/images/111.png)' }}>
       
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_content">
                  <h1 className="breadcrumb_title">About Us</h1>
                  <p className="breadcrumb_text">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-padding-03 overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="section-title-10 justify-content-start text-start align-items-start">
                  <span className="section-title-10__subtitle">Welcome to FikaSpot</span>
                  <h1 className="section-title-10__title">Join us for a taste of Sweden in Boston.</h1>
                  <p className="section-title-10__text">Enjoy unique pastries like kanelbullar (cinnamon buns), kardemummabullar (cardamom buns), and chokladbollar (chocolate balls) alongside diverse coffee styles in a cozy, European-inspired setting.</p>
                  <p className="section-title-10__text">Whether catching up with friends or enjoying some quiet time, Fika Spot offers a delightful escape.</p>
                  <img src="/assets/images/about1.png" alt="Signature-Image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="aboutus-image">
                  <img src="/assets/images/about2.png" alt="About-Image" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="section-padding-03 overflow-hidden" style={{ backgroundColor: '#f0f0f0' }}>
          <div className="container">
            <div className="row flex-md-row-reverse align-items-center">
              <div className="col-md-5">
                <div className="section-title-10 justify-content-start text-start align-items-start">
                  <span className="section-title-10__subtitle">FikaSpot Time</span>
                  <h1 className="section-title-10__title">we are open</h1>
                  <p className="section-title-10__text"></p>
                </div>
                <ul className="about-schedule">
                  <li>
                    <span className="about-schedule_name">Mon - Fri</span>
                    <span className="about-schedule_time">9:00 am - 9:00 pm</span>
                  </li>
                  <li>
                    <span className="about-schedule_name">Sat - Sun</span>
                    <span className="about-schedule_time">10:00 am - 10:00 pm</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <div className="aboutus-image-two">
                  <img src="/assets/images/666.png" alt="About-Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-2 section-padding-03 pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title-10 text-center">
                  <h2 className="section-title-10__title mb-0 mb-lg-5 mb-md-3">Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-n25">
              <div className="col mb-25">
                <div className="team-2-wrapper">
                  <div className="team-2-thumb">
                    <img src="/assets/images/headshot.png" alt="Team-Image" />
                  </div>
                  <div className="team-2-content">
                    <span className="team-2-name">Esther Howard</span>
                    <span className="team-2-designation">Chef cook - Founder</span>
                  </div>
                  <ul className="team-2-social">
                    <li>
                      <a href="#"><i className="lastudioicon-b-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col mb-25">
                <div className="team-2-wrapper">
                  <div className="team-2-thumb">
                    <img src="/assets/images/headshot.png" alt="Team-Image" />
                  </div>
                  <div className="team-2-content">
                    <span className="team-2-name">Kristin Watson</span>
                    <span className="team-2-designation">Chef Cook</span>
                  </div>
                  <ul className="team-2-social">
                    <li>
                      <a href="#"><i className="lastudioicon-b-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col mb-25">
                <div className="team-2-wrapper">
                  <div className="team-2-thumb">
                    <img src="/assets/images/headshot.png" alt="Team-Image" />
                  </div>
                  <div className="team-2-content">
                    <span className="team-2-name">Darrell Steward</span>
                    <span className="team-2-designation">Chef Cook</span>
                  </div>
                  <ul className="team-2-social">
                    <li>
                      <a href="#"><i className="lastudioicon-b-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="lastudioicon-b-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
