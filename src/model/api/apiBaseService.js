export class APIBaseService {

    constructor(){}

    async _get(url) {
        try {
            const result = await fetch(url)
            return await result.json()
        } catch (err) {

            throw new Error(err)
        }
    }
}