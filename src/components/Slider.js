const Slider = () => {
    return (
      <div className="slider-section slider-active overflow-hidden">
        <div className="swiper">
          <div className="swiper-wrapper">
  
            {/* Single Slider Start */}
            <div className="swiper-slide single-slider animation-style-01" style={{ backgroundImage: 'url(/assets/images/111.png)' }}>
              <div className="container">
                {/* Slider Content Start */}
                <div className="slider-content text-center mx-auto">
                  <h1 className="slider-content__title text-white">A Different Experience</h1>
                  <a className="slider-content__btn btn btn-primary btn-hover-black" href="single-product.html">Order Now</a>
                </div>
                {/* Slider Content End */}
              </div>
            </div>
            {/* Single Slider End */}
  
            {/* Single Slider Start */}
            <div className="swiper-slide single-slider animation-style-01" style={{ backgroundImage: 'url(../assets/images/slider/slider-02.jpg)' }}>
              <div className="container">
                {/* Slider Content Start */}
                <div className="slider-content text-center custom-ms-01">
                  <img className="slider-content__shape" width="95" height="62" src="/assets/images/slider/shape-02.png" alt="Shape" />
                  <h1 className="slider-content__title text-white">Taste That Lasts Forever</h1>
                  <a className="slider-content__btn btn btn-primary btn-hover-black" href="single-product.html">Order Now</a>
                </div>
                {/* Slider Content End */}
              </div>
            </div>
            {/* Single Slider End */}
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  };
  
  export default Slider;
  