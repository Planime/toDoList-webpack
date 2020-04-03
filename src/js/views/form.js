function templateInputError(msg) {
    const div = document.createElement('div');
    div.className = 'error-msg';
    div.textContent = `${msg}`;
    return div
}

/**
** This function shows input error
 * @param {HTMLInputElement} el
**/


export function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMsg;

    const templateErrorMsg = templateInputError(msg);

    if (el.classList.contains("js-border-error")) return

    el.classList.add("js-border-error");
    parent.insertBefore(templateErrorMsg, el)

}


export function removeInputError(el) {
    const parent = el.parentElement;
    const errMsgElement = parent.querySelector('.error-msg')

    if (!errMsgElement) return;

    el.classList.remove("js-border-error");

    parent.removeChild(errMsgElement)
}

