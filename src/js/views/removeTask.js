import ui from "../config/ui.config.js"

const {confirmContainer, confirmOk, confirmCancel} = ui;


export function removeTask(target) {


    console.log(target.parentElement);
    const parent = target.parentElement;
    const confirmDelete = confirm(parent);

}

function confirm(parent) {
    confirmContainer.style.display = "block";

    confirmOk.onclick = () => {
        parent.remove();
        return confirmContainer.style.display = "none";
    };

    confirmCancel.onclick = () => {
        return confirmContainer.style.display = "none";
    };

}