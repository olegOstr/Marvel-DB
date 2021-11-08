import React from 'react';
import classes from './Char-list.module.scss'
import {ButtonXl} from '../Buttons/Button';

const CharList = ({characters}) => {

    const chars = characters.map(char => {

        const {name, thumbnail} = char

        const replaceHttpsImg = thumbnail.replace(/(.{4})/, '$1s')

        return (
            <article key={name} className={classes.char}>
                <div className={classes.char__img}>
                    <img src={replaceHttpsImg} alt={name}/>
                </div>
                <div className={classes.char__body}>
                    <h3 className={classes.char__title}>{name}</h3>
                </div>
            </article>
        )
    })

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                {chars}
            </div>
            <ButtonXl onClick={() => console.log('load more')}>LOAD MORE</ButtonXl>
        </div>
    );
};

export default CharList;