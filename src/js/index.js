import '../css/style.css'
import ui from "./config/ui.config"
import tasks from '../assets/tasks';
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form';
import { createObjOfTasks } from "./helpers/createObjOfTasks";
import { renderAllTasks, listItemTemplate } from "./views/renderAllTasks";
import { createNewTask } from "./helpers/createNewTask";
import { nextTaskId } from "./helpers/nextTaskId";

const { form, inputTitle, inputBody, taskList:taskContainer } = ui;
const inputs = [inputTitle, inputBody];

// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
inputs.forEach(el => el.addEventListener('focus',  () => removeInputError(el) ));


const objOfTasks = createObjOfTasks(tasks);

renderAllTasks(objOfTasks);

console.log(objOfTasks);


function onSubmit() {

    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);

        if (!isValidInput) showInputError(el);

        return isValidInput
    });


    if (!isValidForm) return;

    const nextId = nextTaskId(objOfTasks);
    const newTask = createNewTask(inputTitle.value, inputBody.value, nextId)
    objOfTasks[nextId] = newTask;

    const li = listItemTemplate(newTask);
    taskContainer.insertAdjacentElement("beforebegin", li)

    form.reset()
}



