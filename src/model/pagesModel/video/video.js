import { BASE_URL } from "../../api/Baseurl";

export class Video {

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
            video } = attributes


        const { data: activityData } = video

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
        this.title = title;
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

    getPublishedDate(){
        let myDate = new Date(this.datePublisheddAt);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        let frenchDate = myDate.toLocaleDateString('fr-FR', options);
        return frenchDate
    }
}