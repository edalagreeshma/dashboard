import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ getProductData }) => {
  const [showProductData, setShowProductData] = useState(false);

  const handleProductClick = () => {
    setShowProductData(true);
    getProductData();
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className='bx bxl-c-plus-plus'></i>
        <span className="logo_name">Task</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="active">
            <i className='bx bx-home'></i>
            <span className="links_name">dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/product" className="active" onClick={handleProductClick}>
            <i className='bx bx-home'></i>
            <span className="links_name">product</span>
          </Link>
        </li>
      </ul>

      {showProductData && (
        <div className="product-data">
          {/* Display the fetched product data */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
