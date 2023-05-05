
class ActivityImage {
    constructor(image) {
        this.#setup(image)
    }
    #setup(image) {
        try {
            const { data } = image
            const { attributes } = data;
            const { url } = attributes
            this.image =  url
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

        const { id, attributes } = data;

        const {
            createdAt,
            updatedAt,
            publishedAt,
            locale,
            image,
            description,
            titre,
            caption
        } = attributes

        const activityImage = new ActivityImage(image)

        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = publishedAt;
        this.dateLocaledAt = locale;
        this.ID = id;
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