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

      {activeTab === 'dashboard' && (
        <div>
          
        </div>
      )}
      {activeTab === 'product' && (
        <div>
          
        </div>
      )}
      {activeTab === 'users' && (
        <div>
          
        </div>
      )}
      {activeTab === 'rating' && (
        <div>
          
        </div>
      )}
      {activeTab === 'totalUsers' && (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Dashboard;
