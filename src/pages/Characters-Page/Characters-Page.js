import React, {useEffect, useState} from 'react';
import CharList from '../../components/Char-list/Char-list';
import CharDescription from '../../components/Char-description/Char-description';
import RandomInfo from '../../components/Random-info/Random-info';
import CharSkeleton from '../../components/Char-skeleton/Char-skeleton';
import {fetchCurrentCharacter} from '../../http/MarvelService';

const CharactersPage = ({characters, handleMoreChars, loadingBtn}) => {

    const [selectedCharId, setSelectedCharId] = useState(null)
    const [currentChar, setCurrentChar] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (selectedCharId === null) {
            return
        }

        setLoading(true)
        let timerLoading = setTimeout(() => setLoading(false))

        fetchCurrentCharacter(selectedCharId)
        .then((char) => setCurrentChar(char))
        .finally(() => timerLoading)

        return () => clearTimeout(timerLoading)
    }, [selectedCharId])

    return (
        <>
            <RandomInfo/>
            <div className='container mt-5 d-flex'>
                <CharList characters={characters}
                          setSelectedCharId={setSelectedCharId}
                          handleMoreChars={handleMoreChars}
                          loadingBtn={loadingBtn}
                />
                {currentChar ? <CharDescription currentChar={currentChar} loading={loading}/> : <CharSkeleton/>}
            </div>
        </>
    );
};

export default CharactersPage;