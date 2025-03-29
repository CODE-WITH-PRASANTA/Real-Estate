import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using React Router
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AgreeculturePropertyDetailsGallery.css";
import { API_URL } from '../../Api';

const AgreeculturePropertyDetailsGallery = () => {
  const { id } = useParams(); // Get property ID from the URL
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      if (!id) return; // Prevent fetch if no ID is available

      try {
        const response = await fetch(`${API_URL}/agreecultureproperties/agriculture-property/${id}`);
        const data = await response.json();

        if (data?.galleryImages?.length) {
          setImages(data.galleryImages); // Set fetched images
        } else {
          console.warn("No images found for this property.");
        }
      } catch (error) {
        console.error("Error fetching property images:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h4 className="gallery-title">Gallery</h4>
        <h2 className="gallery-heading">Land's Gallery</h2>
      </div>

      <div className="gallery-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="gallery-swiper"
        >
          {images.length > 0 ? (
            images.map((url, index) => (
              <SwiperSlide key={index} className="gallery-slide">
                <div className="gallery-img-sec">
                  <img src={url} alt="Property" className="gallery-image" />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="no-images">No images available</p>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default AgreeculturePropertyDetailsGallery;
