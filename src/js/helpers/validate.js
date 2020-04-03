const regExpDic = {
    title: /^[a-z0-9]{3,}$/i,
    body: /^[a-z0-9]{5,}$/i
};


/**
 * Function validate. Check input on RegExp provided in regExpDic by input data-required type
 *
 * @param {HTMLInputElement} el
 * @returns {Boolean} - return true if input valid or doesn't has attr data-required
 */

export function validate(el) {
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value)
}
