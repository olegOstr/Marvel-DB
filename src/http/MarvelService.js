import axios from 'axios';

const _API_KEY = 'apikey=8c2b6f490a1cf323e096986a8b2c32dc'

const $host = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/'
})

export const fetchAllCharacters = async () => {
    const {data} = await $host.get(`characters?limit=9&offset=50&${_API_KEY}`)
    return data.data.results.map(_transformDataChar)
}

export const fetchCurrentCharacter = async (id) => {
    const {data} = await $host.get(`characters/${id}?${_API_KEY}`)
    return _transformDataChar(data.data.results[0])
}

const _transformDataChar = (char) => {
    return {
        name: char.name,
        description: char.description,
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        homeUrl: char.urls[0].url,
        wikiUrl: char.urls[1].url,
    }
}

export const fetchAllComics = async () => {
    const {data} = await $host.get(`comics?limit=12&${_API_KEY}`)
    return data
}