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
    const [limitChar, setLimitChar] = useState(9)

    useEffect(() => {
        fetchAllCharacters(limitChar)
        .then(items => setCharacters(items))
    }, [limitChar])

    useEffect(() => {
        fetchAllComics()
        .then(items => setComics(items))
    }, [])

    const handleMoreChars = () => {
        setLimitChar(limitChar + 3)
    }

    return (
        <main>
            <NavBar/>
            <Switch>
                <Route path='/' exact>
                    <CharactersPage characters={characters} handleMoreChars={handleMoreChars}/>
                </Route>
                <Route path='/comics' exact>
                    <ComicsPage comics={comics}/>
                </Route>
                <Route path='/comics/:id' component={ItemPage} exact/>
                <Redirect to='/'/>
            </Switch>
        </main>
    );
}

export default App;
