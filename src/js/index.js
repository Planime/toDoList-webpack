import '../css/style.css'
import ui from "./config/ui.config"
import json from '../assets/json';
import { validate } from './helpers/validate'

const {form, inputTitle, inputBody } = ui;
const inputs = [inputTitle, inputBody];

// Events

form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});

function onSubmit() {
    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el)

        return isValidInput
    })

    if (!isValidForm) return
}