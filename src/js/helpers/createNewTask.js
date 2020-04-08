export function createNewTask(taskTitle, taskBody, id) {
    const newTask = {
        id,
        completed: false,
        taskTitle,
        taskBody
    };

    return newTask

}