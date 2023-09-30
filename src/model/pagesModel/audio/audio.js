import { formatImageUrl } from "../../utils/ExtractFirebaseExtURL";

export class Audio {

    constructor(data) {


        const {
            createdAt,
            updatedAt,
            published_at,
            locale,
            image: {url:imageUrl},
            description,
            titre,
            _id,
            legende,
            audio: {url:audioUrl} } = data



     
            const formattedAudioUrl = formatImageUrl(audioUrl)
            const formattedImageUrl = formatImageUrl(imageUrl)


        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = published_at;
        this.dateLocaledAt = locale;
        this.ID = _id;
        this.description = description;
        this.title = titre;
        this.caption = legende;
        this.audioURL = formattedAudioUrl;
        this.imageURL = formattedImageUrl
    }

    getUrl() {
        return `${this.photoUrl}`
    }

    getAudioURL() {
        return  `${this.audioURL}` 
    }
    getImageURL() {
        return  `${this.imageURL}` 
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