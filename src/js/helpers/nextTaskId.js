/**
 * @description function nextTaskId - takes an object of all tasks and generating next task id
 * @param {object} taskList 
 * @return {string} next task id
 */


export function nextTaskId(taskList) {
    let lastId = Object.keys(taskList)
        .map(el => +el.slice((el.indexOf("-")+1)))
        .sort((a,b)=> a-b)
        .pop();

    let lastIdNumber = lastId + 1;

    return `task-${lastIdNumber}` || `task-1`
}