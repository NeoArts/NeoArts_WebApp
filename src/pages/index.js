import React, { useState } from "react"
import ContactSection from "../components/Homepage/ContactSection"
import FaqsSection from "../components/Homepage/FaqsSection"
import MainSection from "../components/Homepage/MainSection"
import PortafolioSection from "../components/Homepage/PortafolioSection"
import PricingSection from "../components/Homepage/PricingSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import Layout from "../components/Shared/Layout"

export default function Home() {
  
  const [language, setLanguage] = useState(0);
  
  return (
    <div>
      <Layout language={language}>
        <MainSection language={language}/>
        <FaqsSection />
        <PortafolioSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </Layout>
      <div className="language__banner">
          <span onClick={() => setLanguage(0)} className='language__banner-item' style={{marginRight: '15px'}}>es</span>
          <span onClick={() => setLanguage(1)} className='language__banner-item'>en</span>
      </div>
    </div>
  )
}
