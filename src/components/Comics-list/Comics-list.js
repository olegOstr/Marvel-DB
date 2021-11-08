import React from 'react';
import classes from './Comics-list.module.scss';
import {ButtonXl} from '../Buttons/Button';
import {useHistory} from 'react-router-dom';

const ComicsList = ({comics}) => {

    const {push} = useHistory()

    const comicsCard = comics.map(item => {

        const {thumbnail, title, price, id} = item

        const replaceHttpsImg = thumbnail.replace(/(.{4})/, '$1s')

        return (
            <article key={item.id} className={classes.comics} onClick={() => push(`/details/${id}`)}>
                <div className={classes.comics__img}>
                    <img src={replaceHttpsImg} alt={title}/>
                </div>
                <h3 className={classes.comics__title}>{title}</h3>
                <span className={classes.comics__price}>{!price ? 'Price Unknown' : `$ ${price}`}</span>
            </article>
        )
    })

    return (
        <section className={classes.wrapper}>
            <div className={classes.grid}>
                {comicsCard}
            </div>
            <ButtonXl>LOAD MORE</ButtonXl>
        </section>
    );
};

export default ComicsList;