import qs from 'qs'
import { APIBaseService } from './apiBaseService'



export class APIQuery extends APIBaseService {

    constructor() {
        super()
    }


    async paginateWithPageNum(url = '', page = 1, pageSize = 25) {
        const query = qs.stringify({
            sort: ['updatedAt:desc'],
            pagination: {
                page: page,
                pageSize: pageSize,
            }
        },
            {
                encodeValuesOnly: true, // prettify URL
            })
        const finalURL = `${url}?${query}&populate=*`
        const data = await this._get(finalURL)

        //set the paginator 
        return data
    }
}