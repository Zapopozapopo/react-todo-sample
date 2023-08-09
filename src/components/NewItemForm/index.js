import React, { useState } from 'react';
import { Input, Button } from '../';
import './styles.scss';

export const NewItemForm = (props) => {
    const { addTask } = props;
    const inputRef = React.createRef();
    const [value, setValue] = useState('');

    const handleAddNewTask = () => {
        addTask(value);
        setValue('');
        inputRef.current.focus();
    };

    return <div className={'new-item-form-wrapper'}>
        <Input placeholder={'Create new task'} value={value} onChange={setValue} inputRef={inputRef} />
        <Button title={'Add'} disabled={!value} onClick={handleAddNewTask}/>
    </div>;
};
