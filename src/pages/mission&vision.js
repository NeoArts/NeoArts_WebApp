import React from 'react'
import Layout from "../components/Shared/Layout"
import { Translator } from '../utils/translator'
import MissionVisionEn from '../components/MissionVision/MissionVisionEn';
import MissionVisionEs from '../components/MissionVision/MissionVisionEs';


function MissionVision() {

    const [language, setLanguage] = React.useState("es");
    const translator = new Translator( {language: language} );

    React.useEffect(() => {

    }, [language])

    return (
        <div>
            <Layout translator={translator}>
                {language === 'es' && <MissionVisionEs />}
                {language === 'en' && <MissionVisionEn />}
            </Layout>
            <div className="language__banner">
                <span onClick={() => setLanguage("es")} className='language__banner-item' style={{marginRight: '15px'}}>es</span>
                <span onClick={() => setLanguage("en")} className='language__banner-item'>en</span>
            </div>
        </div>
    )
}

export default MissionVision