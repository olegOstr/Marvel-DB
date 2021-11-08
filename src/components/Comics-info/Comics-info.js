import React from 'react';
import classes from './Comics-info.module.scss';
import {ButtonSec} from '../Buttons/Button';
import {useHistory} from 'react-router-dom';

const ComicsInfo = (props) => {

    const {title, description, price, language, pageCount, thumbnail} = props

    const replaceHttpsImg = thumbnail.replace(/(.{4})/, '$1s')

    const {goBack} = useHistory()

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.item__img}>
                    <img src={replaceHttpsImg} alt={title}/>
                </div>

                <div className={classes.item__body}>
                    <h1 className={classes.item__title}>{title}</h1>
                    <p className={classes.item__text}>{description}</p>
                    <span className={classes.item__pages}>{pageCount} pages</span>
                    {language ? <span className={classes.item__langs}>Language: {language}</span> : null}
                    {price ? <span className={classes.item__price}>Price: {price}$</span> : null}
                </div>
                <div className={classes.link__back}>
                    <ButtonSec onClick={goBack}>Back to all</ButtonSec>
                </div>

            </div>
        </>
    );
};

export default ComicsInfo;