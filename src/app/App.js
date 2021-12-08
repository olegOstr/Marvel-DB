import React, {useEffect, useState} from 'react';
import NavBar from '../components/Nav-bar/Nav-bar';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharactersPage from '../pages/Characters-Page/Characters-Page';
import ComicsPage from '../pages/Comics-page/Comics-page';
import ItemPage from '../pages/Item-Page/Item-Page';
import {fetchAllCharacters, fetchAllComics} from '../http/MarvelService';

const App = () => {

    const [characters, setCharacters] = useState([])
    const [comics, setComics] = useState([])
    const [offsetChar, setOffsetChar] = useState(130)
    const [offsetComics, setOffsetComics] = useState(40)
    const [loadingBtn, setLoadingBtn] = useState(false)

    useEffect(() => {
        setLoadingBtn(true)
        fetchAllCharacters(offsetChar)
        .then(newChars => setCharacters(characters => [...characters, ...newChars]))
        .finally(() => setLoadingBtn(false))
    }, [offsetChar])

    useEffect(() => {
        setLoadingBtn(true)
        fetchAllComics(offsetComics)
        .then(newComics => setComics(comics => [...comics, ...newComics]))
        .finally(() => setLoadingBtn(false))
    }, [offsetComics])

    const handleMoreChars = () => {
        setOffsetChar(offsetChar + 9)
    }

    const handleMoreComics = () => {
        setOffsetComics(offsetComics + 9)
    }

    return (
        <main>
            <NavBar/>
            <Switch>
                <Route path='/' exact>
                    <CharactersPage characters={characters} handleMoreChars={handleMoreChars} loadingBtn={loadingBtn}/>
                </Route>
                <Route path='/comics' exact>
                    <ComicsPage comics={comics} handleMoreComics={handleMoreComics} loadingBtn={loadingBtn}/>
                </Route>
                <Route path='/comics/:id' component={ItemPage} exact/>
                <Redirect to='/'/>
            </Switch>
        </main>
    );
}

export default App;
