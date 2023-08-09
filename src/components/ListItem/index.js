import React from 'react';
import { Button } from "../";
import './styles.scss'

export const ListItem = (props) => {
    const { item: { isDone, text, id }, markAsDone, removeTask } = props;

    const handleMarkAsDone = () => {
        markAsDone(id);
    };

    const handleRemove = () => {
        removeTask(id);
    };

    const renderOptions = () => {
        return <div className={'options'}>
            {isDone
                ? <div className={'done-block'}>It's done &#128077;</div>
                : <Button title={"Mark as done"} onClick={handleMarkAsDone}/>
            }
            <Button title={'Remove'} onClick={handleRemove}/>
        </div>
    }

    return <li className={'list-item-wrapper'}>
        <div className={'title'}>{text}</div>
        {renderOptions()}
    </li>;
};
