import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewProperties.css';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const ViewProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/view');
        if (response.data.success) {
          setProperties(response.data.data || []);
        } else {
          console.error('Error: Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error.message);
      }
    };

    fetchProperties();
  }, []);

  const deleteProperty = async (propertyId) => {
    if (!window.confirm('Are you sure you want to deny and delete this property?')) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/api/view/${propertyId}`);
      if (response.data.success) {
        alert('Property deleted successfully.');
        setProperties((prevProperties) =>
          prevProperties.filter((property) => property._id !== propertyId)
        );
      } else {
        console.error('Error deleting property:', response.data.message);
        alert('Failed to delete the property.');
      }
    } catch (error) {
      console.error('Error deleting property:', error.message);
      alert('An error occurred while deleting the property.');
    }
  };

  const downloadImagesAsZip = async (images, propertyId) => {
    if (!images || images.length === 0) {
      alert('No images available for download.');
      return;
    }
    
    const zip = new JSZip();
    const imgFolder = zip.folder("property_images");
    
    const imagePromises = images.map(async (imageUrl, index) => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        imgFolder.file(`image_${index + 1}.jpg`, blob);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    });

    await Promise.all(imagePromises);
    
    zip.generateAsync({ type: "blob" }).then(content => {
      saveAs(content, `Property_${propertyId}_Images.zip`);
    });
  };

  return (
    <div className="view-properties-container">
      <div className="table-wrapper">
        <table className="properties-table">
          <thead>
            <tr>
              {/* Table Headers */}
              <th>Sl No.</th>
              <th>Property Type</th>
              <th>About Property</th>
              <th>Address</th>
              <th>Zip Code</th>
              <th>Country</th>
              <th>State</th>
              <th>Location</th>
              <th>Who?</th>
              <th>Price</th>
              <th>Negotiation</th>
              <th>Before Price Label</th>
              <th>After Price Label</th>
              <th>Property Type</th>
              <th>Property Status</th>
              <th>Time To Sell Or Rent</th>
              <th>Property ID</th>
              <th>Size (SqFt)</th>
              <th>Land Area</th>
              <th>Rooms</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Garages</th>
              <th>Garage Size</th>
              <th>Year Built</th>
              <th>Floor Info</th>
              <th>Photos</th>
              <th>Owner Name</th>
              <th>Phone No</th>
              <th>Second Phone No</th>
              <th>Email</th>
              <th>Owner Address</th>
              <th>Owner State</th>
              <th>Owner Pin</th>
              <th>Landmark</th>
              <th>More Contact Details</th>
              <th>Talking Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property, index) => (
                <tr key={property._id}>
                  <td>{index + 1}</td>
                  <td>{property.adminInfo?.title || 'N/A'}</td>
                  <td>{property.adminInfo?.description || 'N/A'}</td>
                  <td>{property.adminInfo?.address || 'N/A'}</td>
                  <td>{property.adminInfo?.zipCode || 'N/A'}</td>
                  <td>{property.adminInfo?.country || 'N/A'}</td>
                  <td>{property.adminInfo?.province || 'N/A'}</td>
                  <td>{property.adminInfo?.location || 'N/A'}</td>
                  <td>{property.adminInfo?.neighborhood || 'N/A'}</td>
                  <td>{property.additionalInfo?.price || 'N/A'}</td>
                  <td>{property.additionalInfo?.negotiation || 'N/A'}</td>
                  <td>{property.additionalInfo?.beforePriceLabel || 'N/A'}</td>
                  <td>{property.additionalInfo?.afterPriceLabel || 'N/A'}</td>
                  <td>{property.additionalInfo?.propertyType || 'N/A'}</td>
                  <td>{property.additionalInfo?.propertyStatus || 'N/A'}</td>
                  <td>{property.additionalInfo?.propertyLabel || 'N/A'}</td>
                  <td>{property.additionalInfo?.propertyId || 'N/A'}</td>
                  <td>{property.additionalInfo?.size || 'N/A'}</td>
                  <td>{property.additionalInfo?.landArea || 'N/A'}</td>
                  <td>{property.additionalInfo?.rooms || 'N/A'}</td>
                  <td>{property.additionalInfo?.bedrooms || 'N/A'}</td>
                  <td>{property.additionalInfo?.bathrooms || 'N/A'}</td>
                  <td>{property.additionalInfo?.garages || 'N/A'}</td>
                  <td>{property.additionalInfo?.garageSize || 'N/A'}</td>
                  <td>{property.additionalInfo?.yearBuilt || 'N/A'}</td>
                  <td>
                    {property.floorInfo?.map((floor, idx) => (
                      <div key={idx}>
                        <p>Floor: {floor.floorNumber || 'N/A'}</p>
                        <p>Price: {floor.price || 'N/A'}</p>
                        <p>Size: {floor.size || 'N/A'}</p>
                        <p>kitchen: {floor.kitchen || 'N/A'}</p>
                        <p>bedrooms: {floor.bedrooms || 'N/A'}</p>
                        <p>bathrooms: {floor.bathrooms || 'N/A'}</p>
                        <p>about: {floor.about || 'N/A'}</p>
                      </div>
                    )) || 'N/A'}
                  </td>
                  <td className="photos-section">
                    <div className="photo-grid">
                      {property.media?.length > 0 ? (
                        property.media.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`Property ${index + 1}`}
                            onClick={() => downloadImagesAsZip(property.media, property._id)}
                            className="clickable-image"
                          />
                        ))
                      ) : (
                        <p>No images</p>
                      )}
                    </div>
                  </td>
                  <td>{property.ownerInfo?.name || 'N/A'}</td>
                  <td>{property.ownerInfo?.phoneNo || 'N/A'}</td>
                  <td>{property.ownerInfo?.secondPhoneNo || 'N/A'}</td>
                  <td>{property.ownerInfo?.email || 'N/A'}</td>
                  <td>{property.ownerInfo?.address || 'N/A'}</td>
                  <td>{property.ownerInfo?.state || 'N/A'}</td>
                  <td>{property.ownerInfo?.pin || 'N/A'}</td>
                  <td>{property.ownerInfo?.landmark || 'N/A'}</td>
                  <td>{property.ownerInfo?.moreContactDetails || 'N/A'}</td>
                  <td>{property.ownerInfo?.talkingTime || 'N/A'}</td>
                  <td className="action-section">
                    <button className="deny-btn" onClick={() => deleteProperty(property._id)}>Done</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="43">No properties found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProperties;
