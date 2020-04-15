/**
 * @description function createNewTask - takes params of new task, creating new object
 * from params and return it.
 * @param {string} taskTitle 
 * @param {string} taskBody 
 * @param {string} id 
 * @return {object}
 */

export function createNewTask(taskTitle, taskBody, id) {
    const newTask = {
        id,
        completed: false,
        taskTitle,
        taskBody
    };

    return newTask

}