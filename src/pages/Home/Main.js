import React, { useState } from 'react'
import ContactSection from "../../components/Homepage/ContactSection"
import FaqsSection from "../../components/Homepage/FaqsSection"
import PortafolioSection from "../../components/Homepage/PortafolioSection"
import PricingSection from "../../components/Homepage/PricingSection"
import TestimonialsSection from "../../components/Homepage/TestimonialsSection"
import Layout from "../../components/Shared/Layout"
import { Translator } from '../../utils/translator'
import MainSection from '../../components/Homepage/MainSection'

function Main() {

    
    const [language, setLanguage] = useState("es");
    const translator = new Translator( {language: language} );

    return (
        <div>
            <Layout translator={translator}>
                <MainSection translator={translator}/>
                <FaqsSection translator={translator}/>
                <PortafolioSection translator={translator}/>
                <TestimonialsSection translator={translator}/>
                <PricingSection translator={translator}/>
                <ContactSection translator={translator}/>
            </Layout>
            <div className="language__banner">
                <span onClick={() => setLanguage("es")} className='language__banner-item' style={{marginRight: '15px'}}>es</span>
                <span onClick={() => setLanguage("en")} className='language__banner-item'>en</span>
            </div>
        </div>
    )
}

export default Main