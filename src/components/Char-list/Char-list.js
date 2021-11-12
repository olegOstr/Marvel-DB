import React, {useEffect, useRef} from 'react';
import classes from './Char-list.module.scss'
import {ButtonXl} from '../Buttons/Button';

const CharList = ({characters, setSelectedCharId, handleMoreChars}) => {

    const scrollToRef = useRef(null)
    const executeScroll = () => {
        scrollToRef.current.scrollIntoView({behavior: 'smooth'})
    }
    useEffect(executeScroll, [handleMoreChars])

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

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                {chars}
            </div>
            <ButtonXl onClick={handleMoreChars}>LOAD MORE</ButtonXl>
            <div ref={scrollToRef} aria-hidden={true}/>
        </div>
    );
};

export default CharList;