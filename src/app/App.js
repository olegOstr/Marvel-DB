import React, {useEffect, useState} from 'react';
import classes from './App.module.scss'
import NavBar from '../components/NavBar/NavBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharactersPage from '../pages/Characters-Page/Characters-Page';
import ComicsPage from '../pages/Comics-page/Comics-page';
import ItemPage from '../pages/Item-Page/Item-Page';
import {fetchAllCharacters, fetchAllComics} from '../http/MarvelService';

const App = () => {

    const [characters, setCharacters] = useState([])
    const [comics, setComics] = useState([])

    useEffect(() => {
        fetchAllCharacters()
        .then(items => setCharacters(items))
        .then(() => console.log('RENDER: Char List'))

        fetchAllComics()
        .then(items => setComics(items.data.results))
        .then(() => console.log('RENDER: Comics List'))
    }, [])

    return (
        <main className={classes.App}>
            <NavBar/>
            <Switch>
                <Route path='/' exact>
                    <CharactersPage characters={characters}/>
                </Route>
                <Route path='/comics' exact>
                    <ComicsPage comics={comics}/>
                </Route>
                <Route path='/details/:name' component={ItemPage}/>
                <Redirect to='/'/>
            </Switch>
        </main>
    );
}

export default App;
