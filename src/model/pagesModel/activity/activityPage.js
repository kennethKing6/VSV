import { API_URL } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { Activity } from "./activity";

export class ActivityPage extends APIQuery {


    async getActivities(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${API_URL}/activites`,page)

            //Extract data
            const result = []

            for (let i = 0; i < response.length; i++) {
                const activity = new Activity(response[i])

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



            return {
                data: result,
                pageSize:response.length
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}


