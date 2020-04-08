import '../css/style.css'
import ui from "./config/ui.config"
import tasks from '../assets/tasks';
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form';
import { createObjOfTasks } from "./helpers/createObjOfTasks";
import { renderAllTasks, listItemTemplate } from "./views/renderAllTasks";
import { createNewTask } from "./helpers/createNewTask";
import { nextTaskId } from "./helpers/nextTaskId";
import { removeTask } from "./views/removeTask";
import { setTaskCompleted } from "./views/setTaskCompleted";

const { form, inputTitle, inputBody, taskList:taskContainer } = ui;
const inputs = [inputTitle, inputBody];

const objOfTasks = createObjOfTasks(tasks);


// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
inputs.forEach(el => el.addEventListener('focus',  () => removeInputError(el) ));

taskContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.hasAttribute('data-btn')) removeTask(target);


    if (target.hasAttribute('data-done-btn')) {
        const dataAttr = target.getAttribute('data-done-btn');
        setTaskCompleted(target, dataAttr)
    }


});



renderAllTasks(objOfTasks);


function onSubmit() {

    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);

        if (!isValidInput) showInputError(el);

        return isValidInput
    });


    if (!isValidForm) return;
    console.log(objOfTasks)

    const nextId = nextTaskId(objOfTasks);
    const newTask = createNewTask(inputTitle.value, inputBody.value, nextId);
    objOfTasks[nextId] = newTask;

    const li = listItemTemplate(newTask);
    taskContainer.insertAdjacentElement("afterbegin", li)

    form.reset()
}



