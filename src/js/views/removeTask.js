import ui from "../config/ui.config.js"

const {confirmContainer, confirmOk, confirmCancel} = ui;


/**
 * @description 
 * @param {HTMLButtonElement} target 
 * @param {object} objOfTasks 
 */
export function removeTask(target, objOfTasks) {
    const parent = target.parentElement;
    const confirmDelete = confirm(parent, objOfTasks);
}

/**
 * @description 
 * @param {HTMLUListElement} parent 
 * @param {object} objOftasks 
 */
 function confirm(parent, objOftasks) {
    confirmContainer.style.display = "block";

    confirmOk.onclick = () => {
        parent.remove();
        delete objOftasks[parent.getAttribute('data-task-id')];
        return confirmContainer.style.display = "none";
    };

    confirmCancel.onclick = () => {
        return confirmContainer.style.display = "none";
    };
}