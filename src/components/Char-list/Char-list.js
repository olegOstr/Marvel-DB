import React from 'react';
import classes from './Char-list.module.scss'
import {ButtonXl} from '../Buttons/Button';

const CharList = ({characters}) => {

    const chars = characters.map((char) => {

        const replaceHttpsImg = char.thumbnail.replace(/(.{4})/, '$1s')

        return (
            <article key={char.name} className={classes.char}>
                <div className={classes.char__img}>
                    <img src={replaceHttpsImg} alt={char.name}/>
                </div>
                <div className={classes.char__body}>
                    <h3 className={classes.char__title}>{char.name}</h3>
                </div>
            </article>
        )
    })

    return (
        <div className={classes.grid__wrapper}>
            <div className={classes.grid}>
                {chars}
            </div>
            <ButtonXl>LOAD MORE</ButtonXl>
        </div>
    );
};

export default CharList;