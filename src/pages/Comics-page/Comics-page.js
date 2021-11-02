import React from 'react';
import ComicsList from '../../components/Comics-list/Comics-list';
import Banner from '../../components/Banner/Banner';

const ComicsPage = ({comics}) => {

    return (
        <div className='container mt-5'>
            <Banner/>
            <ComicsList comics={comics}/>
        </div>
    );
};

export default ComicsPage;