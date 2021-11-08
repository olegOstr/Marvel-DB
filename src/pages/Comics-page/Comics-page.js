import React from 'react';
import ComicsList from '../../components/Comics-list/Comics-list';
import Banner from '../../components/Banner/Banner';

const ComicsPage = ({comics, setLoadChar}) => {

    return (
        <div className='container mt-5'>
            <Banner/>
            <ComicsList comics={comics} setLoadChar={setLoadChar}/>
        </div>
    );
};

export default ComicsPage;