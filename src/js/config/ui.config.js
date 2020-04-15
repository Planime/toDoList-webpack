/**
 * @description User Interface elements from HTML
 * @type {object} ui
*/ 

const ui = {
    form: document.forms["form"],
    inputTitle: document.querySelector('.task-title'),
    inputBody: document.querySelector('.task-body'),
    taskList: document.querySelector('.task-list'),
    confirmContainer: document.querySelector('.confirm-container'),
    confirmOk: document.querySelector('.confirm-delete-ok'),
    confirmCancel: document.querySelector('.confirm-delete-cancel'),
    taskTabsContainer: document.querySelector('.tab-container'),
    taskTabsAll: document.querySelectorAll('.tabs'),
    time: document.querySelector('.header-date'),
};

export default ui

