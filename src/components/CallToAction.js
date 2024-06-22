const CallToAction = () => {
  return (
    <div className="call-to-action" style={{ backgroundImage: 'url(/assets/images/222.png)' }}>
      <div className="container">
        <div className="row align-items-center gy-8 gx-0">
          <div className="col-lg-6">
            {/* Call to Action box Start */}
            <div className="call-to-action-box">
              <h3 className="call-to-action-box__title text-white"><span>Welcome to Fika Spot</span></h3>
              <ul className="call-to-action-box__list text-white">
                <li>Discover your new favorite spot with us.</li>
              </ul>
            </div>
            {/* Call to Action box End */}
          </div>
          <div className="col-lg-6">
            {/* Call to Action box Start */}
            <div className="call-to-action-more text-center position-relative">
              <a className="call-to-action-more__arrow text-white lh-1" href="/contact"><i className="lastudioicon-arrow-right"></i></a>
              <div className="position-absolute top-50 start-50 translate-middle">
                <img className="call-to-action-more__svg" src="/assets/images/svg-text.svg" alt="Svg Text" />
              </div>
            </div>
            {/* Call to Action box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
