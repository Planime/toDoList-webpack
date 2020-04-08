export function setTaskCompleted(target, attr) {
    const parent = target.parentElement

    if (attr === "unDone") {
        target.setAttribute("data-done-btn", "done")

        parent.classList.add("task-item-done")
        target.textContent = "UnDone";
        target.className = "task-unDone-btn"
    } else {
        target.setAttribute("data-done-btn", "unDone")

        parent.classList.remove("task-item-done")
        target.textContent = "Done";
        target.className = "task-done-btn"
    }
}