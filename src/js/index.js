import '../css/style.css'
import ui from "./config/ui.config"
import tasks from '../assets/tasks';
import '../assets/imgs/timePicture.png'
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form';
import { createObjOfTasks } from "./helpers/createObjOfTasks";
import { renderAllTasks, listItemTemplate } from "./views/renderAllTasks";
import { createNewTask } from "./helpers/createNewTask";
import { nextTaskId } from "./helpers/nextTaskId";
import { removeTask } from "./views/removeTask";
import { setTaskCompleted } from "./views/setTaskCompleted";
import { showAllTasks, showCompletedTasks, showUncompletedTasks } from "./views/renderTabTasks";
import {showTime} from "./views/showTime";



const { form, inputTitle, inputBody, taskList:taskContainer, taskTabsContainer, taskTabsAll, time } = ui;
const inputs = [inputTitle, inputBody];
const [_, tabCompleted, tabUncompleted] = taskTabsAll;

const objOfTasks = createObjOfTasks(tasks);
showTime(time);

/** 
 * @description Events block
 */
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
inputs.forEach(el => el.addEventListener('focus',  () => removeInputError(el) ));

window.addEventListener('unload', () => {
    localStorage.setItem("tasks", JSON.stringify(objOfTasks))
});

taskTabsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('js-active-tab') || !target.classList.contains('tabs')) return;
    taskTabsAll.forEach((el) => {
        el.classList.remove('js-active-tab')
    });

    showTabsTasks(target)

});

/**
 * @description function showTabsTasks checking active tabs and showing tasks
 * @param {HTMLSpanElement} target 
 */
function showTabsTasks(target) {
    const listItems = taskContainer.querySelectorAll('.task-item');

    if (target.classList.contains('tab-all')) showAllTasks(target, listItems);
    if (target.classList.contains('tab-completed'))  showCompletedTasks(target, listItems);
    if (target.classList.contains('tab-uncompleted')) showUncompletedTasks(target, listItems);
}

taskContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.hasAttribute('data-btn')) removeTask(target, objOfTasks);


    if (target.hasAttribute('data-done-btn')) {
        const dataAttr = target.getAttribute('data-done-btn');
        setTaskCompleted(target, dataAttr, objOfTasks);

        const listItems = document.querySelectorAll(".task-item");

        if (tabCompleted.classList.contains("js-active-tab")) showCompletedTasks(tabCompleted, listItems);
        if (tabUncompleted.classList.contains("js-active-tab")) showUncompletedTasks(tabUncompleted, listItems);
    }


});

renderAllTasks(objOfTasks);

/**
 * @description function onSubmit - event occurs at the click of a Submit button
 */

function onSubmit() {

    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);

        if (!isValidInput) showInputError(el);

        return isValidInput
    });


    if (!isValidForm) return;

    const nextId = nextTaskId(objOfTasks);
    const newTask = createNewTask(inputTitle.value, inputBody.value, nextId);
    objOfTasks[nextId] = newTask;

    const li = listItemTemplate(newTask);
    taskContainer.insertAdjacentElement("afterbegin", li)

    form.reset()
}



