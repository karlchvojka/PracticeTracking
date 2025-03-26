/**
 * Author Page
 *
 * freeCodeCamp Author Page Project Script
 */

/* --- INTERFACE VARIABLES --- */
const authorContainer = document.getElementById("authorContainer");
const loadMoreBtn = document.getElementById("load-more-btn");
/* --- END INTERFACE VARIABLES --- */

/* --- LOCAL DATA --- */
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json())
    .then((data) => {});

/* --- END LOCAL DATA --- */

