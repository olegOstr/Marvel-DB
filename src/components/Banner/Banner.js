import React from 'react';
import classes from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.banner__body}>
                <div className={classes.banner__title}>New comics every week!</div>
                <div className={classes.banner__subtitle}>Stay tuned!</div>
            </div>
        </div>
    );
};

export default Banner;