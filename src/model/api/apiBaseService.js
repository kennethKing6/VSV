export class APIBaseService {

    async _get(baseURL) {
        try {
            const result = await fetch(baseURL, { method: 'GET'})
            return await result.json()
        } catch (err) {

            throw new Error(err)
        }
    }
}