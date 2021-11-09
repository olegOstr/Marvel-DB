import React, {useEffect, useState} from 'react';
import classes from './Random-info.module.scss';
import {ButtonPrm, ButtonSec} from '../Buttons/Button';
import decorImg from '../../static/img/decoration.png'
import {fetchCurrentCharacter} from '../../http/MarvelService';
import UiLoading from '../UiLoading/UiLoading';
import {ErrorMessage} from '../Error-message/Error-message';

const RandomInfo = () => {

    const generateRandomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

    const [randomId, setRandomId] = useState(generateRandomId)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [randomChar, setRandomChar] = useState({})

    useEffect(() => {
        setLoading(true)

        let timerLoading = setTimeout(() => setLoading(false), 1000)

        fetchCurrentCharacter(randomId)
        .then(char => setRandomChar(char))
        .then(() => console.log('FETCHING: Random Char'))
        .catch(() => setError(true))
        .finally(() => timerLoading)

        return () => clearTimeout(timerLoading)
    }, [randomId])

    const handleRandomChar = () => {
        if (error) {
            setError(false)
        }
        setRandomId(generateRandomId)
    }

    return (
        <div className='container'>
            <div className={classes.wrapper}>
                {!error ? <View randomChar={randomChar} loading={loading}/> : <ErrorMessage/>}
                <div className={classes.random__info}>
                    <img src={decorImg} alt="decor" className={classes.random__info_bg}/>
                    <div className={classes.random__info_body}>
                        <div className={classes.random__info_title}>Random character for today!</div>
                        <div className={classes.random__info_subtitle}>Do you want to get to know him better?</div>
                        <span className={classes.random__info_text}>
                        Or choose another one
                    </span>
                        <ButtonPrm onClick={handleRandomChar}>TRY IT</ButtonPrm>
                    </div>
                </div>
            </div>
        </div>
    );
};

const View = ({randomChar, loading}) => {
    const {name, description, homeUrl, thumbnail, wikiUrl} = randomChar
    const replaceHttpsImg = thumbnail?.replace(/(.{4})/, '$1s')

    return (
        <>
            {!loading ? <div className={classes.char__info}>
                <div className={classes.char__info_img}>
                    <img src={replaceHttpsImg} alt={name}/>
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
            </div> : <UiLoading theme={'red'}/>}
        </>
    )
}

export default RandomInfo;