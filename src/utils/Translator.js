import React from 'react';
import translator from '../languages/es.json'

export class Translator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: props.language
        }
    }

    setLanguage(language) {
        this.setState({language: language});
    }

    getLanguage() {
        return this.state.language;
    }

    getTranslation(text) {
        if(this.state.language === 'es') { return translator[text] }
        else { return text };
    }

}