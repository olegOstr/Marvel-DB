import React from 'react';
import classes from './Char-description.module.scss'
import {ButtonPrm, ButtonSec} from '../Buttons/Button';

const CharDescription = () => {
    return (
        <div className={classes.wrapper}>

            <div className={classes.descr__top}>
                <div className={classes.descr__top_img}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>

                <div className={classes.descr__top_inner}>
                    <h4 className={classes.descr__top_title}>LOKI</h4>
                    <ButtonPrm>Homepage</ButtonPrm>
                    <ButtonSec>Wiki</ButtonSec>
                </div>
            </div>

            <p className={classes.descr__text}>
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of
                Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the
                father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
                and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to
                the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose
                Edda.
            </p>

            <div className={classes.descr__body}>
                <h5 className={classes.descr__body_title}>Comics:</h5>
                <span className={classes.descr__body_field}>All-Winners Squad: Band of Heroes (2011) #3</span>
            </div>
        </div>
    );
};

export default CharDescription;