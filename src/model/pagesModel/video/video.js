import { formatImageUrl } from "../../utils/ExtractFirebaseExtURL";

export class Video {

    constructor(data) {



        const {
            createdAt,
            updatedAt,
            published_at,
            locale,
            description,
            titre,
            Legende,
            _id,
            video: {url,size} } = data


       

        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = published_at;
        this.dateLocaledAt = locale;
        this.ID = _id;
        this.photoUrl = formatImageUrl(url)
        this.photoHeight = size;
        this.description = description;
        this.title = titre;
        this.caption = Legende
    }

    getUrl() {
        return  `${this.photoUrl}`
    }


    getHeight() {
        return this.photoHeight
    }

    getID() {
        return this.ID
    }
    getDescription() {
        return this.description
    }
    getTitle() {
        return this.title
    }
    getCaption() {
        return this.caption
    }

    getPublishedDate(){
        let myDate = new Date(this.datePublisheddAt);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        let frenchDate = myDate.toLocaleDateString('fr-FR', options);
        return frenchDate
    }
}