/**
 * @description Function createObjOfTasks: 
 * @if local storage is empty (key: tasks) 
 * object is creating from the json file
 * @else object is creating from the local storage
 * @type {object} tasksFromLocalStorage - takes data from the local storage by key 'tasks'
 * and parsing json data to object
 * @param {Array} arrOfTasks or undefined
 * @return {Object} returns object of tasks or empty object
 */

export function createObjOfTasks(arrOfTasks) {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));

    if (tasksFromLocalStorage) {
        return tasksFromLocalStorage
    } else {

        if (!arrOfTasks) return {};
        const objOfTasks = arrOfTasks.reduce((acc, task) => {
            acc[task.id] = task;
            return acc
        }, {});

        return objOfTasks
    }
}



