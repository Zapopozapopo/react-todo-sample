import React from 'react';
import { useTasksStorage } from '../../hooks';
import { List, NewItemForm } from '../../components';
import './styles.scss';

export const TodoList = () => {
    const { tasks, addTask, removeTask, markAsDone } = useTasksStorage();
    return <div className={"todo-list-wrapper"}>
        <NewItemForm addTask={addTask} />
        <List tasks={tasks} removeTask={removeTask} markAsDone={markAsDone} />
    </div>;
}
