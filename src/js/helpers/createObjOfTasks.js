/**
 * Function createObjOfTasks
 * @param {Array} arrOfTasks or undefined
 * @returns {Object} returns object of tasks or empty object
 */

export function createObjOfTasks(arrOfTasks) {
    if (!arrOfTasks) return {};
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task.id] = task;
        return acc
    }, {});

    return objOfTasks
}



