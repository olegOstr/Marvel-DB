import React from 'react';
import classes from './Button.module.scss'

export const ButtonPrm = ({children, onClick}) => {
    return (
        <button className={`${classes.btn} ${classes.btnPrm}`} onClick={onClick}>
            {children}
        </button>
    );
};

export const ButtonSec = ({children, onClick}) => {
    return (
        <button className={`${classes.btn} ${classes.btnSec}`} onClick={onClick}>
            {children}
        </button>
    );
};

export const ButtonXl = ({children, onClick}) => {
    return (
        <button className={`${classes.btn} ${classes.btnXl}`} onClick={onClick}>
            {children}
        </button>
    );
};