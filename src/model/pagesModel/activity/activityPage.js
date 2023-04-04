import { BASE_URL } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { Activity } from "./activity";

export class ActivityPage extends APIQuery {

    constructor() {
        super()
    }

    async getActivities(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${BASE_URL}/api/activites`,page)
            const { data = [], meta } = response

            //Extract data
            const result = []

            for (let i = 0; i < data.length; i++) {
                const activity = new Activity(data[i])
                result.push({
                    url: activity.getUrl(),
                    height: activity.getHeight(),
                    id: activity.getID(),
                    description: activity.getDescription(),
                    title: activity.getTitle(),
                    caption: activity.getCaption(),
                    publicationDate: activity.getPublicationDate()
                })
            }

            // Extract pageSize
            const {pagination} = meta
            const {pageCount} = pagination


            return {
                data: result,
                pageSize:pageCount
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}

