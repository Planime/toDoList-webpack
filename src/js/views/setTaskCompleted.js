/**
 * @description setTaskCompleted 
 * changing data attribute to done/undone, 
 * changing <li> color,
 * changing property "completed" in objectOfTasks
 * @param {HTMLUListElement} target 
 * @param {*} attr 
 * @param {object} objOfTasks 
 */

export function setTaskCompleted(target, attr, objOfTasks) {
    const parent = target.parentElement;
    const taskId = parent.getAttribute("data-task-id");

    if (attr === "unDone") {
        target.setAttribute("data-done-btn", "done");

        parent.classList.add("task-item-done");
        target.textContent = "UnDone";
        target.className = "task-unDone-btn";
        objOfTasks[taskId]["completed"] = true

    } else {
        target.setAttribute("data-done-btn", "unDone");

        parent.classList.remove("task-item-done");
        target.textContent = "Done";
        target.className = "task-done-btn";
        objOfTasks[taskId]["completed"] = false;
    }


}


