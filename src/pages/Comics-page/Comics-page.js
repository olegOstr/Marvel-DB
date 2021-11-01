import React from 'react';
import ComicsList from '../../components/Comics-list/Comics-list';
import Banner from '../../components/Banner/Banner';

const ComicsPage = () => {
    return (
        <div className='container mt-5'>
            <Banner/>
            <ComicsList/>
        </div>
    );
};

export default ComicsPage;