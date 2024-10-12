import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './DetailPageBanner1.css'

import img1 from '../../assets/Category/category1.webp'
import img2 from '../../assets/Category/category2.webp'
import img3 from '../../assets/Category/category3.webp'
import img4 from '../../assets/Category/category4.webp'
import img5 from '../../assets/Category/category5.webp'
import img6 from '../../assets/Category/category6.webp'

function DetailPageBanner1() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            slidesPerView={1}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="rounded-3"
                        >
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img1} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img2} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img3} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img4} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img5} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img6} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img1} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img2} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img3} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img4} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img5} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img6} className="img-fluid rounded-3" alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 py-3">
                        <h4 className='fw-bold'>Premium World Power</h4>
                        <p className='fs-5'>$30.00 USD</p>
                        <hr />
                        <p className='text-secondary mt-3'>Being able to read a novel in another language and understand it is a huge achievement. You’ll feel accomplished the moment you read that final page, close the book, and reflect on the experience. You might find yourself at the last page faster than you thought—once you begin reading these...</p>
                        <div className="">
                            <button class="btn w-100">Add To Card</button>
                            <button class="btn w-100 mt-3">buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPageBanner1