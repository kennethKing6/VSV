
export class Audio {

    constructor(data) {

        const { id, attributes } = data;

        const {
            createdAt,
            updatedAt,
            publishedAt,
            locale,
            image,
            description,
            title,
            caption,
            audio } = attributes


        //extract audio url
        const { data: audioActivity } = audio
        const { attributes: audioAttributes } = audioActivity
        const { url: audioURL } = audioAttributes

        //extract image url
        const { data: imageActivity } = image
        const { attributes: imageAttributes } = imageActivity
        const { url: imageUrl } = imageAttributes



        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = publishedAt;
        this.dateLocaledAt = locale;
        this.ID = id;
        this.description = description;
        this.title = title;
        this.caption = caption;
        this.audioURL = audioURL;
        this.imageURL = imageUrl
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