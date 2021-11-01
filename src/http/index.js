import axios from 'axios';

const $host = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics'
})

export const fetchAllCountries = async () => {
    const {data} = await $host.get('all?fields=name,capital,flags,population,region')
    return data
}

export const fetchCurrentCountry = async (name) => {
    const {data} = await $host.get('name/' + name)
    return data
}