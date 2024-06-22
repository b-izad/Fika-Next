import { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById('scroll-top');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Top Start */}
      <a href="#" className="scroll-top" id="scroll-top" onClick={scrollToTop}>
        <i className="lastudioicon-up-arrow"></i>
      </a>
      {/* Scroll Top End */}
    </>
  );
};

export default ScrollTop;
