import { BASE_URL } from "../../api/Baseurl";
import { APIBaseService } from "../../api/apiBaseService";
import { APIQuery } from "../../api/apiQuery";
import { Audio } from "./audio";

export class AudioPage extends APIQuery {

    constructor() {
        super()
    }

    async getAudios(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${BASE_URL}/api/audios`,page)
            const { data = [], meta } = response

            //Extract data
            const result = []
            for (let i = 0; i < data.length; i++) {
                const audio = new Audio(data[i])
                result.push({
                    imageURL: audio.getImageURL(),
                    id: audio.getID(),
                    description: audio.getDescription(),
                    title: audio.getTitle(),
                    caption: audio.getCaption(),
                    audioURL: audio.getAudioURL()
                })
            }

            // Extract pageSize
            const { pagination } = meta
            const { pageCount } = pagination


            return {
                audios: result,
                pageSize: pageCount
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}

