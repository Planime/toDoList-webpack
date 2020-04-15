/**
 * @description function showAllTasks showing in container when user click on tab "All tasks"
 * @param {HTMLSpanElement} target 
 * @param {NodeList} items 
 */
export function showAllTasks(target, items) {
    target.classList.add('js-active-tab');
    items.forEach(el => el.classList.remove('js-display-none'))
}

/**
 * @description function showCompletedTasks showing in container when user click on tab "Completed tasks"
 * @param {HTMLSpanElement} target 
 * @param {NodeList} items 
 */
export function showCompletedTasks(target, items) {
    target.classList.add('js-active-tab');

    items.forEach(el => {
        if (el.classList.contains('task-item-done')) {
            el.classList.remove('js-display-none')
        } else {
            el.classList.add('js-display-none')
        }
    })
}

/**
 * @description function showCompletedTasks showing in container when user click on tab "unCompleted tasks"
 * @param {HTMLSpanElement} target 
 * @param {NodeList} items 
 */
export function showUncompletedTasks(target, items) {
    target.classList.add('js-active-tab');
    items.forEach(el => {
        if (!el.classList.contains('task-item-done')) {
            el.classList.remove('js-display-none')
        } else {
            el.classList.add('js-display-none')
        }
    })
}