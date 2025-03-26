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
let authorDataArr = [];
let endingIndex = 8;
let startingIndex = 0;

/**
 * API Call to the FCC API
 */
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(`There was an error: ${err}`);
    });

/* --- END LOCAL DATA --- */

const displayAuthors = (authors) => {
    authors.forEach(({author, image, url, bio}, index) => {
        authorContainer.innerHTML += `
            <div id="${index}" class="user-card">
                <h2 class="author-name">${author}</h2>
            </div>
        `;
    });
};
