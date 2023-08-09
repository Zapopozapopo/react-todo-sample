import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getCache, saveCache } from "./helper";

export const useTasksStorage = () => {
    const state = getCache();
    const [tasks, setTasks] = useState(state);

    const addTask = (text) => {
        setTasks((oldTasks) =>
            [{id: uuidv4(), text, isDone: false}, ...oldTasks]);
    };

    const removeTask = (id) => {
        setTasks((oldTasks) => oldTasks.filter((elem) => elem.id !== id));
    };

    const markAsDone = (id) => {
        setTasks((oldTasks) => {
            return oldTasks.map((elem) => elem.id === id ? { id: elem.id, text: elem.text, isDone: true } : elem);
        });
    };

    useEffect(() => {
        saveCache(tasks);
    }, [tasks]);

    return {
        tasks,
        addTask,
        removeTask,
        markAsDone,
    };
};
