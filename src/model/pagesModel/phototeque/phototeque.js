import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";

import { Photo } from "./photo";

class PhototequeList {

    constructor(list) {
        try {
            this.#setup(list)
        } catch (err) {
            this.rowList = []
        }
    }
    #setup(list = []) {
        this.rowList = list.map((value) => {

            const {attributes} = value

            const { titre, photo } = attributes
            const { data = [] } = photo

            let imagesList = []

            data.forEach(element => {
                const {attributes: itemAttributes} = element
                const {url} = itemAttributes
                const finalUrl = url.includes("https")?url:BASE_URL + url
                imagesList.push(finalUrl)
                
            });



            return {
                title: titre,
                photoList: imagesList
            }
        })

    }

    getLibraryList(){
        return this.rowList
    }
}

export class Phototeque extends APIBaseService {

    constructor() {
        super()
    }

    async getPhotos() {
        try {
            const response = await this._get(`${BASE_URL}/api/photoques?populate=*`)
            const { data = [], meta } = response

            const photoList = new PhototequeList(data).getLibraryList()

            return photoList


        } catch (err) {
            throw new Error(err)
        }
    }

}

