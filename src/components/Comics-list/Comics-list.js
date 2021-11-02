import React from 'react';
import classes from './Comics-list.module.scss';
import {ButtonXl} from '../Buttons/Button';

const ComicsList = ({comics}) => {

    const comicsCard = comics.map(item => {

        const replaceHttpsImg = item.thumbnail.path.replace(/(.{4})/, '$1s')

        return (
            <article key={item.id} className={classes.comics}>
                <div className={classes.comics__img}>
                    <img src={replaceHttpsImg + '.jpg'} alt=''/>
                </div>
                <h3 className={classes.comics__title}>{item.title}</h3>
                <span className={classes.comics__price}>{''}$</span>
            </article>
        )
    })

    return (
        <section className={classes.grid__wrapper}>
            <div className={classes.grid}>
                {comicsCard}
            </div>
            <ButtonXl>LOAD MORE</ButtonXl>
        </section>
    );
};

export default ComicsList;