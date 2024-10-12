import React from 'react'
import CategoryBanner1 from '../Components/CategoryBanner1/CategoryBanner1'
import CategoryBanner2 from '../Components/CategoryBanner2/CategoryBanner2'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Category() {
    return (
        <>
            <Header />
            <Navbar />
            <CategoryBanner1 />
            <CategoryBanner2 />
            <Footer />
        </>
    )
}

export default Category