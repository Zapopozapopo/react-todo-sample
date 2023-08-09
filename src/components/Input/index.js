import React from 'react';
import './styles.scss';

export const Input = (props) => {
    const { placeholder, value, onChange, inputRef } = props;
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return <div className={'input-wrapper'}>
        <input className={'input'} placeholder={placeholder} ref={inputRef} value={value} onChange={handleChange} />
    </div>;
};
