import { BASE_URL } from "../../api/Baseurl";

export class Photo {

    constructor(data) {
        const { id, attributes } = data;

        const {
            createdAt,
            updatedAt,
            publishedAt,
            locale,
            photo } = attributes

        const { data: photoData } = photo
        const { attributes: photoAttributes } = photoData
        const { height, url } = photoAttributes

        this.dateCreatedAt = createdAt;
        this.dateUpdateddAt = updatedAt;
        this.datePublisheddAt = publishedAt;
        this.dateLocaledAt = locale;
        this.photoID = id;
        this.photoUrl = url
        this.photoHeight = height
    }

    getUrl() {
        return BASE_URL + `${this.photoUrl}`
    }


    getHeight() {
        return this.photoHeight
    }

    getID() {
        return this.photoID
    }
}