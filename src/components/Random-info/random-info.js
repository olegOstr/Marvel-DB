import React, {useEffect, useState} from 'react';
import classes from './random-info.module.scss'
import {ButtonPrm, ButtonSec} from '../Buttons/Button';
import decorImg from '../../static/img/decoration.png'
import {fetchCurrentCharacter} from '../../http/MarvelService';

const RandomInfo = () => {

    const generateRandomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

    const [randomId, setRandomId] = useState(generateRandomId)

    const [randomChar, setRandomChar] = useState({
        name: '',
        description: '',
        thumbnail: '',
        homeUrl: '',
        wikiUrl: '',
    })

    useEffect(() => {
        fetchCurrentCharacter(randomId)
        .then(char => setRandomChar(char))
        .then(() => console.log('RENDER: Random Char'))
        .catch(() => setRandomChar(randomChar))
        
    }, [randomId])

    const {name, description, homeUrl, thumbnail, wikiUrl} = randomChar
    const replaceHttpsImg = thumbnail?.replace(/(.{4})/, '$1s')

    const requestRandomId = () => {
        setRandomId(generateRandomId)
    }

    return (
        <div className='container'>
            <div className={classes.wrapper}>
                <div className={classes.char__info}>
                    <div className={classes.char__info_img}>
                        <img src={replaceHttpsImg} alt={'Random character - ' + name}/>
                    </div>
                    <div className={classes.char__info_body}>
                        <div className={classes.char__info_title}>{name}</div>
                        <p className={classes.char__info_text}>{description ? description : 'Not description'}</p>
                        <div>
                            <a href={homeUrl} target='_blank' rel="noreferrer">
                                <ButtonPrm>HOMEPAGE</ButtonPrm>
                            </a>
                            <a href={wikiUrl} target='_blank' rel="noreferrer">
                                <ButtonSec>WIKI</ButtonSec>
                            </a>
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
                        <ButtonPrm onClick={requestRandomId}>TRY IT</ButtonPrm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomInfo;