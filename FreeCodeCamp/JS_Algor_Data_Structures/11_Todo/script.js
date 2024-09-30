/**
 * Todo App
 *
 * Todo App: freeCodeCamp JS and Data Structures curriculum
 */ 

/* --- INTERFACE VARIABLES --- */
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
const discardBtn = document.getElementById("discard-btn");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const tasksContainer = document.getElementById("tasks-container");
const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("title-input");
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
let currentTask = {};
const taskData = [];
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */

/* --- EVENT LISTENERS --- */
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Verify the ID of current object, check if current task is in the array.
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    };

    // If the task does not exist in the array, add it.
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }

    taskData.forEach(({id, title, date, description}) => tasksContainer.innerHTML += `
    <div class="task" id="${id}">
        <p><strong>Title: </strong>${title}</p>
    </div>
    `);
});
/* --- END EVENT LISTENERS --- */
