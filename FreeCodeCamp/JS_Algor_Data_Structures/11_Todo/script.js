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
/**
 * Add or Update Task
 *
 * Handles Adding or updating a task
 * @function
 */
const addOrUpdateTask = () => {

    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }

    updateTaskContainer();
    reset();
}

/**
 * Delete Task
 *
 * Handles deleting task
 * @function deleteTask
 * @param {string} buttonEl The element containing the clicked button.
 */
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findElement((item) => item.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
}

/**
 * Edit Task
 *
 * Handles editing an existing task.
 * @function editTask
 * @param {string} buttonEl The element conaining the clicked button.
 */
const editTask = (buttonEl) => {
    // Get current task id
    const dataArrIndex = taskData.findElement((item) => item.id === buttonEl.parentElement.id);
    // Get Current task.
    currentTask = taskData[dataArrIndex];

    // Set form values to current task values:
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    titleInput.value = currentTask.title;

    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");
}

/**
 * Reset Form
 *
 * Handles resetting the form fields
 * @function reset
 */
const reset = () => {
    // Reset Input fields:
    dateInput.value = "";
    descriptionInput.value = "";
    titleInput.value = "";

    // Toggle Task form
    taskForm.classList.toggle("hidden");

    // Reset current task obj
    currentTask = {};
};

/**
 * Update Task Container
 *
 * Adds new task to Task Container
 * @function updateTaskContainer
 */
const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Description:</strong> ${description}</p>
                <button type="button" class="btn" onclick="editTask(this)">Edit</button>
                <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `
    });
};
/* --- END APP LOGIC --- */

/* --- EVENT LISTENERS --- */
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();

    // Check if Task form has values:
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

    // If there are values, show confirm close dialog. Else reset form:
    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
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

    taskData.forEach(({id, title, date, description}) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p><strong>Title: </strong>${title}</p>
                <p><strong>Date: </strong>${date}</p>
                <p><strong>Description: </strong>${description}</p>
                <button type="button" class="btn">Edit</button>
                <button type="button" class="btn">Delete</button>
            </div>
        `
    });

    // Reset form:
    addOrUpdateTask();
});
/* --- END EVENT LISTENERS --- */
