import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";

import { Photo } from "./photo";

export  class Phototeque extends APIBaseService {

    constructor() {
        super()
    }

    async getPhotos() {
        try {
            const response = await this._get(`${BASE_URL}/api/photoques?populate=*`)
            const { data = [], meta } = response

            return data.map((value) => {
                const photo =  new Photo(value)

                return {
                    url:photo.getUrl(),
                    height:photo.getHeight(),
                    id:photo.getID()
                }

            })


        } catch (err) {
            throw new Error(err)
        }
    }

}

