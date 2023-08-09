const key = "TODO_LIST";

export const getCache = () => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveCache = (tasksState) => {
    const state = JSON.stringify(tasksState);
    localStorage.setItem(key, state);
};
