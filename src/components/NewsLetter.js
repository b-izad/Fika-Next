const Newsletter = () => {
    return (
      <div className="newsletter-section" style={{ backgroundImage: 'url(/assets/images/111.png)' }}>
        <div className="container">
          <div className="newsletter text-center">
            <h2 className="newsletter__title text-white">Stay in touch & get 10% off</h2>
            <div className="newsletter__form">
              <form action="#">
                <input className="newsletter__field" type="text" placeholder="Your email address" />
                <button className="newsletter__btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  