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

export const ButtonXl = ({children, onClick, disabled, ...props}) => {
    return (
        <button className={`${classes.btn} ${classes.btnXl}`} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    );
};