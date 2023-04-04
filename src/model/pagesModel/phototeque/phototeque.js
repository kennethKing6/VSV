import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import { APIQuery } from "../../api/apiQuery";

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

            const { attributes } = value

            const { titre, photo } = attributes
            const { data = [] } = photo

            let imagesList = []

            data.forEach(element => {
                const { attributes: itemAttributes } = element
                const { url } = itemAttributes
                const finalUrl = url.includes("https") ? url : BASE_URL + url
                imagesList.push(finalUrl)

            });



            return {
                title: titre,
                photoList: imagesList
            }
        })

    }

    getLibraryList() {
        return this.rowList
    }
}

export class Phototeque extends APIQuery {

    constructor() {
        super()
    }

    async getPhotos(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${BASE_URL}/api/photoques?populate=*`, page)
            const { data = [], meta } = response

            //Extract data

            const photoList = new PhototequeList(data).getLibraryList()

            // Extract pageSize
            const { pagination } = meta
            const { pageCount } = pagination
            return {
                carousel: photoList.reverse(),
                pageSize: pageCount
            }


        } catch (err) {
            throw new Error(err)
        }
    }

}

