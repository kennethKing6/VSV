import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import { Audio } from "./audio";

export class AudioPage extends APIBaseService {

    constructor() {
        super()
    }

    async getAudios() {
        try {
            const response = await this._get(`${BASE_URL}/api/audios?populate=*`)
            const { data = [], meta } = response

            const result = []

            for (let i = 0; i < data.length; i++) {
                const audio = new Audio(data[i])
                result.push({
                    imageURL: audio.getImageURL(),
                    id: audio.getID(),
                    description: audio.getDescription(),
                    title: audio.getTitle(),
                    caption: audio.getCaption(),
                    audioURL:audio.getAudioURL()
                })
            }


            return result
        } catch (err) {
            throw new Error(err)
        }
    }

}

