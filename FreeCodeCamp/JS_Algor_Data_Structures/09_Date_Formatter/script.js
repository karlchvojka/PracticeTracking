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
const fomattedDate = `${day}`;
const hours = date.getHours();
const minutes = date.getMinutes();
const month = date.getMonth();
const year = date.getFullYear();
/* --- END INTERFACE VARIABLES --- */
