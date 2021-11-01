import React from 'react';
import classes from './Button.module.scss'

export const ButtonPrm = ({children}) => {
    return (
        <button className={`${classes.btn} ${classes.btnPrm}`}>
            {children}
        </button>
    );
};

export const ButtonSec = ({children}) => {
    return (
        <button className={`${classes.btn} ${classes.btnSec}`}>
            {children}
        </button>
    );
};

export const ButtonXl = ({children}) => {
    return (
        <button className={`${classes.btn} ${classes.btnXl}`}>
            {children}
        </button>
    );
};