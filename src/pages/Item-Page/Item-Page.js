import React, {useEffect, useState} from 'react';
import Banner from '../../components/Banner/Banner';
import ComicsInfo from '../../components/Comics-info/Comics-info';
import {useParams} from 'react-router-dom';
import {fetchCurrentComics} from '../../http/MarvelService';

const ItemPage = () => {

    const {id} = useParams()

    const [oneComics, setOneComics] = useState(null)

    useEffect(() => {
        fetchCurrentComics(id)
        .then((item) => setOneComics(item))
        .then(() => console.log('FETCHING One Comics'))
    }, [])


    return (
        <div className='container mt-5'>
            <Banner/>
            {oneComics && <ComicsInfo {...oneComics}/>}
        </div>
    );
};

export default ItemPage;