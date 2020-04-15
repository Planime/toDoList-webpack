

/**
** @description function showInputError shows input error
 * @param {HTMLInputElement} el
**/


export function showInputError(el) {
    const parent = el.parentElement;
    const errMsg = parent.querySelector('.error-msg');

    errMsg.classList.remove('hidden');
    el.classList.add("js-border-error");

}

/**
** @description function removeInputError removing input error
 * @param {HTMLInputElement} el
**/


export function removeInputError(el) {
    const parent = el.parentElement;
    const errMsgElement = parent.querySelector('.error-msg');

    if (!errMsgElement) return;

    el.classList.remove("js-border-error");
    errMsgElement.classList.add("hidden")
}

