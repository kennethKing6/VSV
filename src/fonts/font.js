import WebFont from 'webfontloader'
import { fontNames } from './fontNames'

WebFont.load({
    google: {
        families: ['Slabo', 'Droid Serif']
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

