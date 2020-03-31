const regExpDic = {
    title: /^[a-z0-9]{3,}$/i,
    body: /^[a-z0-9]{5,}$/i
};


export function validate(el) {
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value)
}
