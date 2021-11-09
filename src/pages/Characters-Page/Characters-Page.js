import React from 'react';
import CharList from '../../components/Char-list/Char-list';
import CharDescription from '../../components/Char-description/Char-description';
import RandomInfo from '../../components/Random-info/Random-info';

const CharactersPage = ({characters}) => {

    return (
        <>
            <RandomInfo/>
            <div className='container mt-5 d-flex'>
                <CharList characters={characters}/>
                <CharDescription/>
            </div>
        </>
    );
};

export default CharactersPage;