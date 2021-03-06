import React from 'react';
import classes from './Char-description.module.scss'
import {ButtonPrm, ButtonSec} from '../Buttons/Button';

const CharDescription = ({currentChar}) => {
    
        const {name, thumbnail, description, homeUrl, wikiUrl, comics} = currentChar

        const printComicsList = comics.map((item, idx) => {
            return <li key={idx} className={classes.descr__body_field}>{item.name}</li>
        })

        return (
            <aside className={classes.wrapper}>
                <div className={classes.descr__top}>
                    <div className={classes.descr__top_img}>
                        <img src={thumbnail} alt={name}/>
                    </div>
                    <div className={classes.descr__top_inner}>
                        <h4 className={classes.descr__top_title}>{name}</h4>
                        <a href={homeUrl} target='_blank' rel="noreferrer">
                            <ButtonPrm>HOMEPAGE</ButtonPrm>
                        </a>
                        <a href={wikiUrl} target='_blank' rel="noreferrer">
                            <ButtonSec>WIKI</ButtonSec>
                        </a>
                    </div>
                </div>
                <p className={classes.descr__text}>{description}</p>
                <div className={classes.descr__body}>
                    <h5 className={classes.descr__body_title}>{printComicsList.length ? 'Comics:' : null}</h5>
                    <ul>
                        {printComicsList}
                    </ul>
                </div>
            </aside>
        );
    }
;

export default CharDescription;