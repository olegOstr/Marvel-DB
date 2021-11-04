import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/'
})

export const fetchAllCharacters = async () => {
    const {data} = await $host.get(`characters?limit=9&offset=50&${process.env.REACT_APP_PUBLIC_API_KEY}`)
    return data.data.results.map(_transformDataChar)
}

export const fetchCurrentCharacter = async (id) => {
    const {data} = await $host.get(`characters/${id}?${process.env.REACT_APP_PUBLIC_API_KEY}`)
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
    const {data} = await $host.get(`comics?limit=12&${process.env.REACT_APP_PUBLIC_API_KEY}`)
    return data
}