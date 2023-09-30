import { API_URL } from "../../api/Baseurl";
import { APIQuery } from "../../api/apiQuery";
import { Audio } from "./audio";

export class AudioPage extends APIQuery {


    async getAudios(page = 1) {
        try {
            const response = await this.paginateWithPageNum(`${API_URL}/audios`,page)

            //Extract data
            const result = []
            for (let i = 0; i < response.length; i++) {
                const audio = new Audio(response[i])
                result.push({
                    imageURL: audio.getImageURL(),
                    id: audio.getID(),
                    description: audio.getDescription(),
                    title: audio.getTitle(),
                    caption: audio.getCaption(),
                    audioURL: audio.getAudioURL(),
                    publishedDate: audio.getPublishedDate()
                })
            }



            return {
                audios: result,
                pageSize: response.length
            }
        } catch (err) {
            throw new Error(err)
        }
    }

}

