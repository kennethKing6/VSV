import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import { Activity } from "./activity";

export class ActivityPage extends APIBaseService {

    constructor() {
        super()
    }

    async getActivities() {
        try {
            const response = await this._get(`${BASE_URL}/api/activites?populate=*`)
            const { data = [], meta } = response

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


            return result
        } catch (err) {
            throw new Error(err)
        }
    }

}

