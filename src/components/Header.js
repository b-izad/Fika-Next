import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* Header Start */}
      <div className="header-section header-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-3 col-7">
              {/* Header Logo Start */}
              <div className="header-logo">
                <Link href="/" legacyBehavior>
                  <a>Fika spot</a>
                </Link>
              </div>
              {/* Header Logo End */}
            </div>
            <div className="col-lg-7 col-xl-6 d-none d-lg-block">
              {/* Header Menu Start */}
              <div className="header-menu">
                <ul className="header-primary-menu d-flex justify-content-center">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className="menu-item-link active"><span>Home</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#target-section" legacyBehavior>
                      <a className="menu-item-link"><span>Menu</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a className="menu-item-link"><span>About Us</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a className="menu-item-link"><span>Contact us</span></a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Header Menu End */}
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
};

export default Header;
