import ui from '../config/ui.config'

const {taskList: taskContainer} = ui;

export function renderAllTasks(taskList) {
    if (!taskList) return {};

    const fragment = document.createDocumentFragment();


    Object.values(taskList).forEach(task => {
        const li = listItemTemplate(task);
        fragment.appendChild(li)
    });
    taskContainer.appendChild(fragment)

}

export function listItemTemplate({taskTitle, taskBody, id, completed}) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-task-id", id);

    const h2 = document.createElement("h2");
    h2.className = "task-item-title";
    h2.textContent = taskTitle;

    const p = document.createElement("p");
    p.className = "task-item-body";
    p.textContent = taskBody;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "task-delete-btn";
    deleteBtn.setAttribute("data-btn", "delete-btn");
    deleteBtn.textContent = 'Delete';

    const doneBtn = document.createElement("button");

    if (completed) {
        doneBtn.setAttribute("data-done-btn", "done")
        li.classList.add("task-item-done");
        doneBtn.textContent = "UnDone";
        doneBtn.className = "task-unDone-btn";
    } else {
        doneBtn.setAttribute("data-done-btn", "unDone")
        doneBtn.className = "task-done-btn";
        doneBtn.textContent = "Done";
    }


    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn)

    return li
}





