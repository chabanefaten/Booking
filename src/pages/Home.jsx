import React from 'react'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Recommend from '../components/Recommend'

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services/>
      <Recommend/>
      <Footer/>
    </div>
  )
}
