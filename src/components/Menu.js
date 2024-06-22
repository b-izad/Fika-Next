import { useState } from 'react';
import MenuTabs from './MenuTabs';
import MenuItem from './MenuItem';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab2');

  const tabs = [
 
    { id: 'tab2', label: 'HOT DRINKS', target: '#tab2' },
    { id: 'tab3', label: 'COLD DRINKS', target: '#tab3' },
    { id: 'tab4', label: 'SWEET TREATS', target: '#tab4' },
    { id: 'tab5', label: 'SANDWICHES', target: '#tab5' },
    { id: 'tab6', label: 'SWEDISH STYLE', target: '#tab6' },
  ];

  const products = {
    tab2: [
      {
        image: '/assets/images/444.png',
        title: 'Brownie',
        price: '$4.99',
        badge: 'Hot',
        quickViewTarget: '#exampleProductModal',
        cartTarget: '#modalCart',
        wishlistTarget: '#modalWishlist',
        compareTarget: '#modalCompare',
      },
      {
        image: '/assets/images/444.png',
        title: 'LATTE',
        price: '$5.00',
        quickViewTarget: '#exampleProductModal',
        cartTarget: '#modalCart',
        wishlistTarget: '#modalWishlist',
        compareTarget: '#modalCompare',
      },
      {
        image: '/assets/images/444.png',
        title: 'LATTE',
        price: '$5.00',
        quickViewTarget: '#exampleProductModal',
        cartTarget: '#modalCart',
        wishlistTarget: '#modalWishlist',
        compareTarget: '#modalCompare',
      },{
        image: '/assets/images/444.png',
        title: 'LATTE',
        price: '$5.00',
        quickViewTarget: '#exampleProductModal',
        cartTarget: '#modalCart',
        wishlistTarget: '#modalWishlist',
        compareTarget: '#modalCompare',
      },{
        image: '/assets/images/444.png',
        title: 'LATTE',
        price: '$5.00',
        quickViewTarget: '#exampleProductModal',
        cartTarget: '#modalCart',
        wishlistTarget: '#modalWishlist',
        compareTarget: '#modalCompare',
      },
    ],
    // Add more products for other tabs similarly
  };

  const renderProducts = (tabId) => {
    return products[tabId]?.map((product, index) => <MenuItem key={index} {...product} />);
  };

  return (
    <div className="section-padding-01" id="target-section">
      <div className="container">
        <div className="section-title text-center max-width-720 mx-auto">
          <h2 className="section-title__title">Menu</h2>
          <p>Experience the charm of Sweden with our authentic coffee and delightful pastries, crafted to bring a taste of Scandinavia to your day.</p>
        </div>
        <MenuTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        <div className="tab-content">
          {tabs.map((tab) => (
            <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} id={tab.id}>
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mb-n50">
                {renderProducts(tab.id)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
