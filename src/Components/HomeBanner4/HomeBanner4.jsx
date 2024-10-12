import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img from '../../assets/backgroundIMage.jpg';

function HomeBanner4() {
    const testimonials = [
        {
            name: "John Doe",
            review: "Great quality products! I am extremely satisfied with my purchase and the customer service.",
            location: "New York, USA"
        },
        {
            name: "Sarah Ali",
            review: "Affordable prices with amazing quality. Highly recommended for mobile accessories.",
            location: "Lahore, Pakistan"
        },
        {
            name: "Mike Johnson",
            review: "Fast delivery and reliable products. This is my go-to store for mobile accessories.",
            location: "London, UK"
        },
        {
            name: "Ayesha Khan",
            review: "Loved the variety of products! Excellent service and friendly support team.",
            location: "Karachi, Pakistan"
        },
        {
            name: "David Smith",
            review: "Top-notch customer support and very durable accessories. Will shop again!",
            location: "Sydney, Australia"
        }
    ];

    return (
        <>
            <section style={{ background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container py-5 my-5" style={{backgroundColor:"transparent"}}>
                    <h4 className='text-center fw-bold text-white'>WHAT CUSTOMER SAYS</h4>
                    <div className="row mt-5">
                        <div className="col-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                className='my-5 rounded-3'
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide className='abc' key={index}>
                                        <div className="testimonial text-center p-4 rounded-3 shadow-lg">
                                            <p className="review font-italic text-white fw-semibold">"{testimonial.review}"</p>
                                            <h5 className="mt-3 text-white fw-semibold">{testimonial.name}</h5>
                                            <p className=" text-white fw-semibold" style={{color:"white"}}>{testimonial.location}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBanner4;
