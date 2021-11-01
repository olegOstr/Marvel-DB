import React from 'react';
import classes from './Char-list.module.scss'
import {ButtonXl} from '../Buttons/Button';

const CharList = () => {
    return (
        <div className={classes.grid__wrapper}>
            <div className={classes.grid}>
                <article className={classes.char}>
                    <div className={classes.char__img}>
                        <img src='https://via.placeholder.com/200' alt=''/>
                    </div>
                    <h3 className={classes.char__title}>ABYSS</h3>
                </article>

                <article className={classes.char}>
                    <div className={classes.char__img}>
                        <img src='https://via.placeholder.com/200' alt=''/>
                    </div>
                    <h3 className={classes.char__title}>ABYSS</h3>
                </article>

                <article className={classes.char}>
                    <div className={classes.char__img}>
                        <img src='https://via.placeholder.com/200' alt=''/>
                    </div>
                    <h3 className={classes.char__title}>ABYSS</h3>
                </article>
            </div>
            <ButtonXl>LOAD MORE</ButtonXl>
        </div>
    );
};

export default CharList;