import React from 'react';
import classes from './Comics-list.module.scss';
import {ButtonXl} from '../Buttons/Button';
import {useHistory} from 'react-router-dom';

const ComicsList = ({comics, handleMoreComics, loadingBtn}) => {

    const {push} = useHistory()

    const comicsCard = comics.map((item, index) => {

        const {thumbnail, title, price, id} = item

        const replaceHttpsImg = thumbnail.replace(/(.{4})/, '$1s')

        let imgStyle = null;
        if (replaceHttpsImg === 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit': 'unset'};
        }

        return (
            <article key={index} className={classes.comics} onClick={() => push(`/comics/${id}`)}>
                <div className={classes.comics__img}>
                    <img src={replaceHttpsImg} alt={title} style={imgStyle}/>
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
            <ButtonXl onClick={handleMoreComics}
                      disabled={loadingBtn}>
                {!loadingBtn ? `LOAD MORE` : 'Loading...'}
            </ButtonXl>
        </section>
    );
};

export default ComicsList;