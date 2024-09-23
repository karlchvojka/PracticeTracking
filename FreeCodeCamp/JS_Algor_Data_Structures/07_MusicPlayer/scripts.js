/**
 * Music Player Application.
 *
 * Music Player Application from the 'JS Algorithms and Data Structures' section of the FCC Curriculum
 */

/* --- INTERFACE VARIABLES --- */
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playlistSongs = document.getElementById("playlistSongs");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
    }
];

/* --- END APP DATA --- */
