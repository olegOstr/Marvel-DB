import React from 'react';
import classes from './Item-Page.scss'
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';

const ItemPage = () => {
    return (
        <div className='container mt-5'>
            <Banner/>

            <div className={classes.wrapper}>
                <div className={classes.item__img}>
                    <img src="" alt="293x293"/>
                </div>

                <div className={classes.item__body}>
                    <h1 className={classes.item__title}>X-Men: Days of Future Past</h1>
                    <p className={classes.item__text}>
                        Re-live the legendary first journey into the dystopian future of
                        2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die!
                        Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of
                        the X-Men from Cyclops himself...and a demon for Christmas!?
                    </p>
                    <span className={classes.item__pages}>144 pages</span>
                    <span className={classes.item__langs}>Language: en-us</span>
                    <span className={classes.item__price}>9.99$</span>
                </div>
                <div className={classes.link__back}>
                    <Link to='/'>Back to all</Link>
                </div>

            </div>
        </div>
    );
};

export default ItemPage;