import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/Category/category1.webp'
import img2 from '../../assets/Category/category2.webp'
import img3 from '../../assets/Category/category3.webp'
import img4 from '../../assets/Category/category4.webp'
import img5 from '../../assets/Category/category5.webp'
import img6 from '../../assets/Category/category6.webp'
import img7 from '../../assets/Category/bg_page.jpg'
function CategoryBanner1() {
    return (
        <>
            <div className="container-fluid py-5 px-5" style={{backgroundImage:`url(${img7})`}}>
                <div className="row">
                    <h2 className='text-white fw-bold text-center'>Products</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            slidesPerView={6}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="py-5 d-flex justify-content-center align-items-center"
                        >
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img1} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img2} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img3} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img4} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img5} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img6} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img1} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img2} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img3} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img4} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img5} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="abc">
                                <div className="text-center">
                                    <img src={img6} className="img-fluid rounded-circle" width={100} alt="" />
                                    <p className='mt-3 fw-semibold text-white'>All Items</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryBanner1