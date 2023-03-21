import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import {  Video } from "./video";

export class VideoPage extends APIBaseService {

    constructor() {
        super()
    }

    async getVideos() {
        try {
            const response = await this._get(`${BASE_URL}/api/videos?populate=*`)
            const { data = [], meta } = response

            const result = []

            for (let i = 0; i < data.length; i++) {
                const activity = new Video(data[i])
                result.push({
                    url: activity.getUrl(),
                    height: activity.getHeight(),
                    id: activity.getID(),
                    description: activity.getDescription(),
                    title: activity.getTitle(),
                    caption: activity.getCaption(),
                })
            }


            return result
        } catch (err) {
            throw new Error(err)
        }
    }

}

