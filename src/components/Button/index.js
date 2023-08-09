import React from 'react';
import './styles.scss';

export const Button = (props) => {
    const { title, disabled, onClick } = props;

    return <button className={'button'} onClick={onClick} disabled={disabled}>{title}</button>;
};
