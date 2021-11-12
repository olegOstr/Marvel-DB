import React from 'react';
import classes from './Button.module.scss'

export const ButtonPrm = ({children, onClick, ...props}) => {
    return (
        <button className={`${classes.btn} ${classes.btnPrm}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export const ButtonSec = ({children, onClick, ...props}) => {
    return (
        <button className={`${classes.btn} ${classes.btnSec}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export const ButtonXl = ({children, onClick, ...props}) => {
    return (
        <button className={`${classes.btn} ${classes.btnXl}`} onClick={onClick} {...props} {...props}>
            {children}
        </button>
    );
};