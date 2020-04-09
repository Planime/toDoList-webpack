import ui from "../config/ui.config.js"
import {createObjOfTasks} from "../helpers/createObjOfTasks";

const {confirmContainer, confirmOk, confirmCancel} = ui;


export function removeTask(target, objOfTasks) {


    console.log(target.parentElement);
    const parent = target.parentElement;
    const confirmDelete = confirm(parent, objOfTasks);

}

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