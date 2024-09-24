/**
 * Date Formatter
 *
 * Date Formatter application from the FreeCodeCamp Curriculum
 */

/* --- INTERFACE VARIABLES --- */
const currentDateParagraph = document.getElementById("current-date");
const date = new Date();
const dateOptionsSelectElement = document.getElementById("date-options");
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const month = date.getMonth();
const year = date.getFullYear();
/* --- END INTERFACE VARIABLES --- */

/* --- APP LOGIC --- */
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;
/* --- END APP LOGIC -- */

/* --- EVENT LISTENERS --- */
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate.split("-").reverse();
            break;
    }
});
/* --- END EVENT LISTENERS --- */
