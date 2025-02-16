import React from 'react';
import './AllPorpertyManage.css';

// Assets
import House1 from '../../assets/house-1.jpg';
import House2 from '../../assets/house-2.jpg';
import House3 from '../../assets/house-3.jpg';
import House4 from '../../assets/house-4.jpg';
import House5 from '../../assets/house-5.jpg';
import Profile1 from '../../assets/profile-pic.png';

const AllPropertyManage = () => {
  const properties = [
    { image: House1, name: 'Gorgeous Apartment Building', date: 'March 22, 2024', price: '$7,500', status: 'Approved' },
    { image: House2, name: 'Mountain Mist Retreat, Aspen', date: 'March 22, 2024', price: '$7,500', status: 'Approved' },
    { image: House3, name: 'Lakeview Haven, Lake Tahoe', date: 'March 22, 2024', price: '$7,500', status: 'Pending' },
    { image: House4, name: 'Coastal Serenity Cottage', date: 'March 22, 2024', price: '$7,500', status: 'Sold' },
    { image: House5, name: 'Sunset Heights Estate', date: 'March 22, 2024', price: '$7,500', status: 'Pending' },
  ];

  return (
    <div className="all-property-container">
      <div className="all-property-content">
        <header className="all-property-header">
          <h2>Manage Properties</h2>
          <div className="all-property-filters">
            <input type="text" placeholder="Search by name..." className="input-search" />
            <input type="date" className="input-date" />
            <input type="date" className="input-date" />
            <select className="filter-dropdown">
              <option value="">Filter by Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </header>

        <p className="results-count">26 Results Found</p>

        <div className="property-table">
          <div className="table-header">
            <div>Listing</div>
            <div className='status-table-header'>Status</div>
          </div>

          {properties.map((property, index) => (
            <div className="table-row" key={index}>
              <div className="property-details">
                <img src={property.image} alt={property.name} className="property-img" />
                <div>
                  <h4 className="property-name">{property.name}</h4>
                  <p className="property-date">Posting Date: {property.date}</p>
                  <p className="property-price">{property.price}</p>
                </div>
              </div>
              <div className={`status-tag ${property.status.toLowerCase()}`}>{property.status}</div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">{'<'}</button>
          <button className="page-btn">1</button>
          <button className="page-btn active">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">{'>'}</button>
        </div>
      </div>

      <aside className="property-sidebar">
        <section className="messages-section">
          <h3>Messages</h3>
          <div className="message">
            <img src={Profile1} alt="Profile" className="profile-img" />
            <div>
              <h4>Themesflat</h4>
              <p>Lorem ipsum dolor sit amet...</p>
              <span>3 days ago</span>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <h3>Recent Reviews</h3>
          <div className="review">
            <img src={Profile1} alt="Reviewer" className="profile-img" />
            <div>
              <h4>Bessie Cooper</h4>
              <p>⭐⭐⭐⭐⭐</p>
              <span>3 days ago</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default AllPropertyManage;
