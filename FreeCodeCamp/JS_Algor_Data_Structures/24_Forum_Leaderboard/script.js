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
 * Calculate how much time has passed since the topic had any activity.
 * @name timeAgo
 * @function
 * @param {string} time Date of the last activity on a topic.
 * @returns {string} A string to be displayed.
 */
const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    /* Time Calculations */
    const minuets = Math.floor((currentTime - lastPost) / 60000);
    const hours = Math.floor((currentTime - lastPost) / 3600000);
    const days = Math.floor((currentTime - lastPost) / 86400000);

    if (minuets < 60) {
        return `${minuets}m ago`
    } else if (hours < 24) {
        return `${hours}h ago`
    } else {
        return `${days}d ago`
    }
}

/**
 * Format Views divided by 1000.
 * @name viewCount
 * @function
 * @param {number} views
 * @returns {string} To be displayed on the leaderboard.
 */
const viewCount = (views) => {
    if (views >= 1000) {
        return `${Math.floor(views / 1000)}k`
    } else {
        return views
    }
}

/**
 * Show latest posts on page
 * @name showLatestPosts
 * @function
 * @param {Object} data Data from FCC.
 * @returns {string} A string containing an HTML `<tr>` element with the given data.
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

        return `
            <tr>
                <td>
                    <p class="post-title">${title}</p>    
                </td>
                <td></td>
                <td>
                    ${posts_count - 1}
                </td>
                <td>
                    ${views}
                </td>
                <td>
                    ${timeAgo(bumped_at)}
                </td>
            </tr>`;
    }).join('');
};
/* --- END GLOBAL FUNCTIONS --- */
