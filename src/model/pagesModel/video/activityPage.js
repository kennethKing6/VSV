import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import { APIQuery } from "../../api/apiQuery";
import { Video } from "./video";

export class VideoPage extends APIQuery {

    constructor() {
        super()
    }

    async getVideos(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${BASE_URL}/api/videos?populate=*`,page)
            const { data = [], meta } = response

            //Extract data
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

            // Extract pageSize
            const { pagination } = meta
            const { pageCount } = pagination

            return {
                videos: result,
                pageSize: pageCount
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}

