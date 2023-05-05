import { BASE_URL } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";


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

            const { titre, photo,publishedAt } = attributes
            const { data = [] } = photo

            let imagesList = []

            data.forEach(element => {
                const { attributes: itemAttributes } = element
                const { url } = itemAttributes
                const finalUrl = url.includes("https") ? url : BASE_URL + url
                imagesList.push(finalUrl)

            });

            let myDate = new Date(publishedAt);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
            let frenchDate = myDate.toLocaleDateString('fr-FR', options);



            return {
                title: titre,
                photoList: imagesList,
                publishedDate:frenchDate
            }
        })

    }

    getLibraryList() {
        return this.rowList
    }
}

export class Phototeque extends APIQuery {

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
                pageSize: pageCount,
            }


        } catch (err) {
            throw new Error(err)
        }
    }

}

