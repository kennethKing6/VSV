import { APIBaseService } from './apiBaseService'



export class APIQuery extends APIBaseService {

    async paginateWithPageNum(url = '') {
        return await this._get(url)
    }
}

