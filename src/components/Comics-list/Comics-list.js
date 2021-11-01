import React from 'react';
import classes from './Comics-list.module.scss';
import {ButtonXl} from '../Buttons/Button';

const ComicsList = () => {
    return (
        <section className={classes.grid__wrapper}>
            <div className={classes.grid}>
                <article className={classes.comics}>
                    <div className={classes.comics__img}>
                        <img src='https://via.placeholder.com/225x346' alt=''/>
                    </div>
                    <h3 className={classes.comics__title}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <span className={classes.comics__price}>9.99$</span>
                </article>

                <article className={classes.comics}>
                    <div className={classes.comics__img}>
                        <img src='https://via.placeholder.com/225x346' alt=''/>
                    </div>
                    <h3 className={classes.comics__title}>ABYSS</h3>
                    <span className={classes.comics__price}>9.99$</span>
                </article>

                <article className={classes.comics}>
                    <div className={classes.comics__img}>
                        <img src='https://via.placeholder.com/225x346' alt=''/>
                    </div>
                    <h3 className={classes.comics__title}>ABYSS</h3>
                    <span className={classes.comics__price}>9.99$</span>
                </article>
            </div>
            <ButtonXl>LOAD MORE</ButtonXl>
        </section>
    );
};

export default ComicsList;