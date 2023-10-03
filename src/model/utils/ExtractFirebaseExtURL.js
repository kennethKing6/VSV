import { API_URL } from "../api/Baseurl"

/**
 * 
 * @param {*} url format is 
 * 
 * "https://storage.googleapis.com/gs://vivre-sans-violence-1cb0b.appspot.com/thumbnail_3qYDYcgWr6zFdF-Image_created_with_a_mobile_phone.jpg"
 * 
 * and we want to remove gs://
 */
export const extractFirebaseExtUrl = (url = '')=>{
    const splitArray = url.split("gs://")
    return splitArray[0] + splitArray[1]
}

export const extractUrl = (url = '')=>{

    if(url.includes('cloudinary'))return formatVideoUrl(url)

    return formatImageUrl(url)
}
export const formatImageUrl = (url = '')=>{
    const finalUrl = url.includes("https") ? url : API_URL + url
    const cleanedUrl = extractFirebaseExtUrl(finalUrl)
    return cleanedUrl;
}

export const formatVideoUrl = (url = '') =>{
    const urls = url.split('https')
    const finalUrl = 'https' + urls[2]
    return finalUrl;
}