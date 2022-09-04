import React, { useState } from 'react'
import Quoter from '../components/Quoter/quoter';
import Layout from "../components/Shared/Layout"

function Quote() {
    
    const [language, setLanguage] = useState(0);

    return (
        <div>
            <Layout language={language}>
                <Quoter language={language}>quoter</Quoter>
            </Layout>
            <div className="language__banner">
                <span onClick={() => setLanguage(0)} className='language__banner-item' style={{marginRight: '15px'}}>es</span>
                <span onClick={() => setLanguage(1)} className='language__banner-item'>en</span>
            </div>
        </div>
    )
}

export default Quote