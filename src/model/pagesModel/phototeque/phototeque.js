import { API_URL, } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { extractUrl } from "../../utils/ExtractFirebaseExtURL";


class PhototequeList {

    constructor(list) {
        try {
            this.#setup(list)
        } catch (err) {
            this.rowList = []
        }
    }
     #setup(list = []) {
        this.rowList =  list.map((value) => {

            const { categorie, photos,published_at:publishedAt } = value

            
         let imagesList = []

            //Extract the firebase url 
          if(Array.isArray(photos)){
            photos.forEach(element => {
                const { url } = element
               imagesList.push(extractUrl(url))

            });
          }else{
            const { url } = photos
            
            imagesList.push(extractUrl(url))

          }

            // Display the date into the format
            let myDate = new Date(publishedAt);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
            let frenchDate = myDate.toLocaleDateString('fr-FR', options);



            return {
                title: categorie,
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
            const response = await this.paginateWithPageNum(`${API_URL}/photoques`, page)


            //Extract data

            const photoList = new PhototequeList(response).getLibraryList()


            // Extract pageSize
            return {
                carousel: photoList.reverse(),
                pageSize: 1,
            }


        } catch (err) {
            throw new Error(err)
        }
    }

}


