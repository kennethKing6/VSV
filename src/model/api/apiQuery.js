import qs from 'qs'
import { APIBaseService } from './apiBaseService'
import { API_URL } from './Baseurl'



export class APIQuery extends APIBaseService {



    async paginateWithPageNum(url = '', page = 1, pageSize = 25) {
        const query = qs.stringify({
            sort: ['updatedAt:desc'],
            pagination: {
                page: page,
                pageSize: pageSize,
            },
        },
            {
                encodeValuesOnly: true, // prettify URL
            })
        const finalURL = `${url}?${query}&populate=*`
        const apiEndPoint = `${API_URL}/content`
        const data = await this._get(apiEndPoint, finalURL)

        //set the paginator 
        return data
    }
}