import React from 'react';
import classes from './App.module.scss'
import NavBar from '../components/NavBar/NavBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharactersPage from '../pages/Characters-Page/Characters-Page';
import ComicsPage from '../pages/Comics-page/Comics-page';
import ItemPage from '../pages/Item-Page/Item-Page';

const App = () => {

    return (
        <main className={classes.App}>
            <NavBar/>
            <Switch>
                <Route path='/characters' component={CharactersPage} exact/>
                <Route path='/comics' component={ComicsPage} exact/>
                <Route path='/details/:name' component={ItemPage}/>
                <Redirect to='/'/>
            </Switch>
        </main>
    );
}

export default App;
