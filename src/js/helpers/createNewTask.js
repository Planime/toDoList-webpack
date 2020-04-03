export function createNewTask(taskTitle, taskBody, id) {
    const newTask = {
        id,
        taskTitle,
        taskBody
    };

    return newTask

}