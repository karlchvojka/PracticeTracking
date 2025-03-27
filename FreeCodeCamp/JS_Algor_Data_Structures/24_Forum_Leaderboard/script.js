/**
 * freeCodeCamp Forum Leaderboard
 *
 * Leaderboard project using API data from the FCC forum.
 */

/* --- LOCAL DATA --- */
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
/* --- END LOCAL DATA --- */

/* --- INTERFACE VARIABLES --- */
const postsContainer = document.getElementById("posts-container");
/* --- END INTERFACE VARIABLES --- */

/* --- GLOBAL FUNCTIONS --- */

/**
 * Fetches data Ascyncronously.
 *
 * @async
 * @function fetchData
 */
const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);
        const data = await res.json();
        showLatestPosts(data);
    } catch (err) {
        console.log(err);
    }
};

fetchData();

/**
 * Show latest posts on page
 * @name showLatestPosts
 * @function
 * @param {Object} data Data from FCC.
 */
const showLatestPosts = (data) => {
    const { topic_list, users } = data;
    const { topics } = topic_list;

    postsContainer.innerHTML = topics.map((item) => {
        const { 
            id, 
            title,
            views,
            posts_count,
            slug, posters,
            category_id,
            bumped_at 
        } = item;
    });
};
/* --- END GLOBAL FUNCTIONS --- */
