import { API_URL, } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { formatImageUrl } from "../../utils/ExtractFirebaseExtURL";


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

            const { categorie, photo,published_at:publishedAt } = value

            
         let imagesList = []

            //Extract the firebase url 
          if(Array.isArray(photo)){
            photo.forEach(element => {
                const { url } = element
               imagesList.push(formatImageUrl(url))

            });
          }else{
            const { url } = photo
            
            imagesList.push(formatImageUrl(url))

          }
            //Get the real url of the photo through firebase
            console.log("imagesList",imagesList)

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
                pageSize: response.length,
            }


        } catch (err) {
            throw new Error(err)
        }
    }

}


