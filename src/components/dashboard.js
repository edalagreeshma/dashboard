import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="sidenav">
        
        <button
          className={activeTab === 'product' ? 'active' : ''}
          onClick={() => handleTabClick('product')}
        >
          Product
        </button>
        <button
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => handleTabClick('users')}
        >
          Users
        </button>
        <button
          className={activeTab === 'rating' ? 'active' : ''}
          onClick={() => handleTabClick('rating')}
        >
          Rating
        </button>
        <button
          className={activeTab === 'totalUsers' ? 'active' : ''}
          onClick={() => handleTabClick('totalUsers')}
        >
          Total Users
        </button>
      </div>
      {/* Render different content based on activeTab */}
      {activeTab === 'dashboard' && (
        <div>
          {/* Content for Dashboard */}
        </div>
      )}
      {activeTab === 'product' && (
        <div>
          {/* Content for Product */}
        </div>
      )}
      {activeTab === 'users' && (
        <div>
          {/* Content for Users */}
        </div>
      )}
      {activeTab === 'rating' && (
        <div>
          {/* Content for Rating */}
        </div>
      )}
      {activeTab === 'totalUsers' && (
        <div>
          {/* Content for Total Users */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
