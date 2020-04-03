import ui from '../config/ui.config'

const { taskList:taskContainer } = ui;

export function renderAllTasks(taskList) {
    if (!taskList) return {};

    const fragment = document.createDocumentFragment();


    Object.values(taskList).forEach(task => {
        const li = listItemTemplate(task);
        fragment.appendChild(li)
    });
    taskContainer.appendChild(fragment)

}

export function listItemTemplate({taskTitle, taskBody, id}) {
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
    deleteBtn.textContent = 'Delete';


    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(deleteBtn);

    return li
}





