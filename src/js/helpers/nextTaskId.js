export function nextTaskId(taskList) {
    let lastId = Object.keys(taskList)
        .map(el => +el.slice((el.indexOf("-")+1)))
        .sort((a,b)=> a-b)
        .pop()

    let lastIdNumber = lastId + 1;

    return `task-${lastIdNumber}`
}