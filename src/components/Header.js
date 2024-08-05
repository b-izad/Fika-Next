import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Header = () => {
  const router = useRouter();

  // Effect to scroll to the target section if the hash is present
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  // Function to handle the "Menu" link click
  const handleMenuLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (router.pathname !== '/') {
      // Navigate to the home page with hash
      router.push('/#target-section');
    } else {
      // If already on the home page, scroll directly
      const element = document.getElementById('target-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header>
      <div className="header-section header-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-3 col-7">
              <div className="header-logo">
                <Link href="/" legacyBehavior>
                  <a>TheFikaSpot</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-xl-9 col-5">
              <div className="header-menu">
                <ul className="header-primary-menu d-flex justify-content-center">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className={router.pathname === '/' ? 'menu-item-link active' : 'menu-item-link'}>
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    {/* Use handleMenuLinkClick to manage behavior */}
                    <a href="/#target-section" className="menu-item-link" onClick={handleMenuLinkClick}>
                      <span>Menu</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a className={router.pathname === '/about' ? 'menu-item-link active' : 'menu-item-link'}>
                        <span className="long">About Us</span>
                        <span className="short">About</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a className={router.pathname === '/contact' ? 'menu-item-link active' : 'menu-item-link'}>
                        <span className="long">Contact Us</span>
                        <span className="short">Contact</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
