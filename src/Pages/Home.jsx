import React from 'react'
import Header from '../Components/Header/Header'
import HomeBanner1 from '../Components/HomeBanner1/HomeBanner1'
import AppNavbar from '../Components/Navbar/Navbar'
import HomeBanner2 from '../Components/HomeBanner2/HomeBanner2'
import HomeBanner3 from '../Components/HomeBanner3/HomeBanner3'
import HomeBanner4 from '../Components/HomeBanner4/HomeBanner4'
import HomeBanner5 from '../Components/HomeBanner5/HomeBanner5'
import HomeBanner6 from '../Components/HomeBanner6/HomeBanner6'
import Footer from '../Components/Footer/Footer'
import HomeBanner7 from '../Components/HomeBanner7/HomeBanner7'
function Home() {
  return (
    <>
       <Header/>
      <AppNavbar />
      <HomeBanner1 />
      <HomeBanner2 />
      <HomeBanner3/>
      <HomeBanner7/>
      <HomeBanner5/>
      <HomeBanner6/>
      <HomeBanner4/>
      <Footer/>
      
    </>
  )
}

export default Home