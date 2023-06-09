import WebFont from 'webfontloader'
import { fontNames } from './fontNames'

WebFont.load({
    google: {
        families: ['Lato','Montserrat', 'sans-serif']
    }
});

class Fonts {

    
    getFontKeys() {
        return {
            ...fontNames
        }
    }
}

export const APPFONT = new Fonts()

