import { BASE_URL } from "../../api/Baseurl";

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
            caption } = attributes

        const { data: activityData } = image

        const { attributes: activityAttributes } = activityData
        const { height, url } = activityAttributes

        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = publishedAt;
        this.dateLocaledAt = locale;
        this.ID = id;
        this.photoUrl = url
        this.photoHeight = height;
        this.description = description;
        this.title = titre;
        this.caption = caption

    }

    getUrl() {
        return BASE_URL + `${this.photoUrl}`
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
}