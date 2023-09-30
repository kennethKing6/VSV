import { API_URL } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { Video } from "./video";

export class VideoPage extends APIQuery {


    async getVideos(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${API_URL}/videos`,page)

            //Extract data
            const result = []

            for (let i = 0; i < response.length; i++) {
                const activity = new Video(response[i])
                result.push({
                    url: activity.getUrl(),
                    height: activity.getHeight(),
                    id: activity.getID(),
                    description: activity.getDescription(),
                    title: activity.getTitle(),
                    caption: activity.getCaption(),
                    publishedDate: activity.getPublishedDate()
                })
            }


            return {
                videos: result,
                pageSize: response.length
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}

