import React from 'react';
import img from '../../assets/banner7.jpg';

function HomeBanner5() {
  return (
    <>
      <section
        style={{
          background: `url(${img})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-5 my-5">
          <div className="row py-5 d-flex justify-content-center align-items-center">
            <div className="col-8 py-5 text-center text-white">
              <h1 className='text-dark display-5 fw-bold mb-3'>Premium Mobile Accessories for Your Smartphone</h1>
              <p className='text-dark mb-3'>
                Explore a wide range of high-quality mobile accessories, from 
                sleek leather cases to screen protectors, designed to enhance 
                the look and feel of your smartphone. Customize your gear with 
                our premium collection, available in a variety of colors and 
                styles to match your personal taste.
              </p>
              <button className="button btn-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner5;
