export class APIBaseService {


    async _get(baseURL, queryAPI) {
        try {
            const result = await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify({
                    url: queryAPI
                })
            })
            return await result.json()
        } catch (err) {

            throw new Error(err)
        }
    }
}