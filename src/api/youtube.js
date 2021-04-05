import axios from 'axios';

// restricted key
const KEY = 'AIzaSyBoJEGRH-LZNlTks0xQdbHp6njOyJ7JsM8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});