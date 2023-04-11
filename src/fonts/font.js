import WebFont from 'webfontloader'
import { fontNames } from './fontNames'

WebFont.load({
    google: {
        families: ['Lato','Montserrat', 'sans-serif']
    }
});

class Fonts {
    constructor() { }

    
    getFontKeys() {
        return {
            ...fontNames
        }
    }
}

export const APPFONT = new Fonts()

