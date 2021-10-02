import React from "react"
import ContactSection from "../components/Homepage/ContactSection"
import FaqsSection from "../components/Homepage/FaqsSection"
import MainSection from "../components/Homepage/MainSection"
import PortafolioSection from "../components/Homepage/PortafolioSection"
import PricingSection from "../components/Homepage/PricingSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import Layout from "../components/Layout"
import SkewedDiv from "../components/SkewedDiv"

export default function Home() {
  return (
    <Layout>
      <MainSection />
      <FaqsSection />
      <PortafolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </Layout>
  )
}
