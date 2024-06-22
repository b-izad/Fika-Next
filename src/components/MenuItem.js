const MenuItem = ({ image, title, price, badge, quickViewTarget, cartTarget, wishlistTarget, compareTarget }) => {
    return (
      <div className="col mb-50">
        <div className="product-item text-center">
          {badge && <div className="product-item__badge">{badge}</div>}
          <div className="product-item__image border w-100">
            <a href="single-product.html">
              <img width="350" height="350" src={image} alt={title} />
            </a>
            <ul className="product-item__meta">
              <li className="product-item__meta-action">
                <a className="shadow-1 labtn-icon-quickview" href="#/" data-bs-tooltip="tooltip" data-bs-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target={quickViewTarget}></a>
              </li>
              <li className="product-item__meta-action">
                <a className="shadow-1 labtn-icon-cart" href="#/" data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to Cart" data-bs-toggle="modal" data-bs-target={cartTarget}></a>
              </li>
              <li className="product-item__meta-action">
                <a className="shadow-1 labtn-icon-wishlist" href="#/" data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to wishlist" data-bs-toggle="modal" data-bs-target={wishlistTarget}></a>
              </li>
              <li className="product-item__meta-action">
                <a className="shadow-1 labtn-icon-compare" href="#/" data-bs-tooltip="tooltip" data-bs-placement="top" title="Add to compare" data-bs-toggle="modal" data-bs-target={compareTarget}></a>
              </li>
            </ul>
          </div>
          <div className="product-item__content pt-5">
            <h5 className="product-item__title"><a href="single-product.html">{title}</a></h5>
            <span className="product-item__price">{price}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
  