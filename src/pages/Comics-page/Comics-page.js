import React from 'react';
import ComicsList from '../../components/Comics-list/Comics-list';
import Banner from '../../components/Banner/Banner';

const ComicsPage = ({comics, handleMoreComics, loadingBtn}) => {

    return (
        <div className='container mt-5'>
            <Banner/>
            <ComicsList comics={comics} handleMoreComics={handleMoreComics} loadingBtn={loadingBtn}/>
        </div>
    );
};

export default ComicsPage;