import React from 'react'
import Layout from "../components/Shared/Layout"
import { Translator } from '../utils/translator'
import WhoWeAreEs from '../components/WhoWeAre/WhoWeAreEs';
import WhoWeAreEn from '../components/WhoWeAre/WhoWeAreEn';

function whoweare() {
    const [language, setLanguage] = React.useState("es");
    const translator = new Translator( {language: language} );

    React.useEffect(() => {

    }, [language])

    return (
        <div>
            <Layout translator={translator}>
                {language === 'es' && <WhoWeAreEs />}
                {language === 'en' && <WhoWeAreEn />}
            </Layout>
            <div className="language__banner">
                <span onClick={() => setLanguage("es")} className='language__banner-item' style={{marginRight: '15px'}}>es</span>
                <span onClick={() => setLanguage("en")} className='language__banner-item'>en</span>
            </div>
        </div>
    )
}

export default whoweare