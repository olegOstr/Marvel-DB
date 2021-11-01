import React from 'react';
import classes from './random-info.module.scss'
import {ButtonPrm, ButtonSec} from '../Buttons/Button';

import decorImg from '../../static/img/decoration.png'

const RandomInfo = () => {
    return (
        <div className='container'>
            <div className={classes.wrapper}>
                <div className={classes.char__info}>
                    <div className={classes.char__info_img}>
                        <img src="https://via.placeholder.com/180" alt=""/>
                    </div>
                    <div className={classes.char__info_body}>
                        <div className={classes.char__info_title}>THOR</div>
                        <p className={classes.char__info_text}>As the Norse God of thunder and lightning, Thor wields
                            one of
                            the
                            greatest
                            weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an
                            over-muscled, oafish imbecile, he's quite smart and compassionate...
                        </p>
                        <div>
                            <ButtonPrm>HOMEPAGE</ButtonPrm>
                            <ButtonSec>WIKI</ButtonSec>
                        </div>
                    </div>
                </div>
                <div className={classes.random__info}>
                    <img src={decorImg} alt="decor" className={classes.random__info_bg}/>
                    <div className={classes.random__info_body}>
                        <div className={classes.random__info_title}>Random character for today!</div>
                        <div className={classes.random__info_subtitle}>Do you want to get to know him better?</div>
                        <span className={classes.random__info_text}>
                        Or choose another one
                    </span>
                        <ButtonPrm>TRY IT</ButtonPrm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomInfo;