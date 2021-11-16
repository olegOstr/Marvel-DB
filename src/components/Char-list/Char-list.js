import React from 'react';
import classes from './Char-list.module.scss'
import {ButtonXl} from '../Buttons/Button';

const CharList = ({characters, setSelectedCharId, handleMoreChars, loadingBtn}) => {

    const chars = characters.map(char => {

        const {name, thumbnail, id} = char
        const replaceHttpsImg = thumbnail.replace(/(.{4})/, '$1s')
        let imgStyle = null;

        if (replaceHttpsImg === 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit': 'unset'};
        }

        const onCharSelected = () => {
            setSelectedCharId(id)
        }

        return (
            <article key={name} className={classes.char} onClick={onCharSelected}>
                <div className={classes.char__img}>
                    <img src={replaceHttpsImg} alt={name} style={imgStyle}/>
                </div>
                <div className={classes.char__body}>
                    <h3 className={classes.char__title}>{name}</h3>
                </div>
            </article>
        )
    })

    let disabledBtn = !!loadingBtn

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                {chars}
            </div>
            <ButtonXl
                onClick={handleMoreChars}
                disabled={disabledBtn}
            >{!loadingBtn ? `LOAD MORE` : 'Loading...'}</ButtonXl>
        </div>
    );
};

export default CharList;