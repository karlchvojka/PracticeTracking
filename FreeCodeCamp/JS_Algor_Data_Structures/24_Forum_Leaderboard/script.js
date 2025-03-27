/**
 * freeCodeCamp Forum Leaderboard
 *
 * Leaderboard project using API data from the FCC forum.
 */

/* --- LOCAL DATA --- */
const allCategories = {
    299: { category: 'Career Advice', className: "career" },
    409: { category: "Project Feedback", className: "feedback" },
    417: { category: "freeCodeCamp Support", className: "support" },
    421: { category: "JavaScript", className: "javascript" },
    423: { category: "HTML - CSS", className: "html-css" },
    424: { category: "Python", className: "python" },
    432: { category: "You Can Do This!", className: "motivation" },
    560: { category: "Backend Development", className: "backend" }
};
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
 * Create a list of avatar images of users participating in the conversation.
 * @name avatars
 * @function
 * @param {Array} posters Array of posters
 * @param {Array} users Array of users
 * @returns {string} Image element of the users avatar
 */
const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => user.id === poster.user_id);

        if (user) {
            const avatar = user.avatar_template.replace(/{size}/, 30);
            const userAvatarUrl = avatar.startsWith("/user_avatar/") ? avatarUrl.concat(avatar) : avatar;
            return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
        }
    }).join("");
};

/**
 * Retrieve the Forum category
 * @name forumCategory
 * @function
 * @param {string} id Category Id
 * @returns {string} Forum Category link
 */
const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const { className, category } = allCategories[id];
        selectedCategory.className = className;
        selectedCategory.category = category;
    } else {
        selectedCategory.className = "general";
        selectedCategory.category = "General";
        selectedCategory.id = 1;
    }
    
    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `category ${selectedCategory.className}`;

    return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;
};

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
                    ${forumCategory(category_id)}
                </td>
                <td></td>
                <td>
                    ${posts_count - 1}
                </td>
                <td>
                    ${viewCount(views)}
                </td>
                <td>
                    ${timeAgo(bumped_at)}
                </td>
            </tr>`;
    }).join('');
};
/* --- END GLOBAL FUNCTIONS --- */
