const MenuTabs = ({ tabs, activeTab, onTabClick }) => {
    return (
      <div className="product-tab-menu pb-8">
        <ul className="nav justify-content-center">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={activeTab === tab.id ? 'active' : ''}
                data-bs-toggle="tab"
                data-bs-target={tab.target}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MenuTabs;
  