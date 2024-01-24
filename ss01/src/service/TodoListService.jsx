let tasks = [
    { id: 1,  name: 'Learn React', description: 'https://react.dev/'}
]

export const getAll = () => tasks;
export const addTask = (task) => {
    tasks.push(task);
};
export const removeTask = (task) => {
    let temp = tasks.filter(temp => temp.id !== task.id);
    tasks = temp;
}