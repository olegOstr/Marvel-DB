import React from 'react';
import classes from './Char-skeleton.module.scss';

const CharSkeleton = () => {
    return (
        <div className={classes.skeleton}>
            <div className={classes.skeleton_title}>Please select a character to see information</div>
            <div className={classes.skeleton_top}>
                <span className={classes.skeleton_avatar}/>
                <span className={classes.skeleton_text}/>
            </div>
            <div className={classes.skeleton_field}/>
            <div className={classes.skeleton_field}/>
            <div className={classes.skeleton_field}/>
        </div>
    );
};

export default CharSkeleton;