import React from 'react'
import { useData } from '../../contexts/DataContext'
function Banner() {
    const { data } = useData();
    const banner = data.banner;
  
  return (
    <>
   <div className="banner-sec">
      <div className="container">
        <div className="column-row">
          <div className="column-left">
            <div className="banner-text">
              <h1>{banner.title}</h1>
              <p>{banner.description}</p>
              <a href={banner.buttonLink} className="default-btn">
                <span className="wrap-btn">
                  <span>{banner.buttonText}</span>
                  <img src="./images/btn-icon.svg" alt="icon" />
                </span>
              </a>
            </div>

            <div className="customer-main">
              <div className="customer-img-wrap">
                {banner.customerImages.map((img, index) => (
                  <img key={index} src={img} alt={`customer-${index}`} />
                ))}
              </div>
              <div className="wrap-rating-info">
                <div className="wrp-info-customer">
                  <h4>{banner.happyCustomers}</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className="wrap-rating-info">
                <div className="rating-main">
                  <h4>{banner.rating}</h4>
                  <div className="rating-star">
                    <img src="images/stars.png" alt="stars" />
                    <span>Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-right">
            <img src={banner.girlImage} alt="girl" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner