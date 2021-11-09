import React from 'react';
import ErrorImg from './Death-Star.png'
import styles from './Error-message.module.scss';

export const ErrorMessage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.text}>
                    The dark side of the force has won.<br/>
                    We cannot display data.<br/>
                    Come back when we fix everything
                </span>
                <img src={ErrorImg} alt="Error Image Death Star"/>
            </div>
        </>

    );
};