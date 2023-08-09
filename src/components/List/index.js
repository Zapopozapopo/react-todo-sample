import React from 'react';
import { ListItem } from '../';
import './styles.scss';

export const List = (props) => {
    const { tasks, removeTask, markAsDone } = props;

    const renderItems = () => {
        return tasks.map((item, index) =>
            <ListItem item={item} key={index} removeTask={removeTask} markAsDone={markAsDone}/>);
    };

    return <ul className={'list-wrapper'}>
        {renderItems()}
    </ul>;
}
