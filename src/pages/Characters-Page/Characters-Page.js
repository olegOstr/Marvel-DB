import React, {useState} from 'react';
import CharList from '../../components/Char-list/Char-list';
import CharDescription from '../../components/Char-description/Char-description';
import RandomInfo from '../../components/Random-info/Random-info';
import CharSkeleton from '../../components/Char-skeleton/Char-skeleton';

const CharactersPage = ({characters}) => {

    const [selectedChar, setSelectedChar] = useState(null)

    return (
        <>
            <RandomInfo/>
            <div className='container mt-5 d-flex'>
                <CharList characters={characters} setSelectedChar={setSelectedChar}/>
                {selectedChar ? <CharDescription selectedChar={selectedChar}/> : <CharSkeleton/>}
            </div>
        </>
    );
};

export default CharactersPage;