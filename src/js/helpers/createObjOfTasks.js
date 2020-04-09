/**
 * Function createObjOfTasks
 * @param {Array} arrOfTasks or undefined
 * @returns {Object} returns object of tasks or empty object
 */

export function createObjOfTasks(arrOfTasks) {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));

    console.log(tasksFromLocalStorage)

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



