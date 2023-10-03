import {  formatImageUrl } from "../../utils/ExtractFirebaseExtURL"

class ActivityImage {
    constructor(image) {
        this.#setup(image)
    }
    #setup(image) {
        try {
            const { url } = image
            this.image =  formatImageUrl(url)
        } catch (err) {
            this.image = null
        }

    }

    getUrl() {
        return this.image
    }
}

export class Activity {

    constructor(data) {
        

        const {
            createdAt = null,
            updatedAt = null,
            publishedAt = null,
            locale = null,
            image = null,
            description = null,
            titre = null,
            caption = null,
            _id = null
        } = data

        const activityImage = new ActivityImage(image)

        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = publishedAt;
        this.dateLocaledAt = locale;
        this.ID = _id;
        this.photoUrl = activityImage.getUrl()
        this.photoHeight = null;
        this.description = description;
        this.title = titre;
        this.caption = caption;

    }

    getUrl() {
        return this.photoUrl
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

    getCreationDate() {
        return this.dateCreatedAt
    }

    getPublicationDate() {
        let myDate = new Date(this.datePublisheddAt);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        let frenchDate = myDate.toLocaleDateString('fr-FR', options);
        return frenchDate
    }

    getCaption() {
        return this.caption
    }


}