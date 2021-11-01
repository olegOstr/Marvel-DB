import React from 'react';
import CharList from '../../components/Char-list/Char-list';
import CharDescription from '../../components/Char-description/Char-description';
import RandomInfo from '../../components/Random-info/random-info';

const CharactersPage = () => {
    return (
        <div>
            <RandomInfo/>
            <div className='container mt-5 d-flex'>
                <CharList/>
                <CharDescription/>
            </div>
        </div>
    );
};

export default CharactersPage;