/**
 * RPG Game - FCC Project
 *
 * The RPG Game project fom the 'JS Algorithms and Data Structures section of the FCC Curriculum.
*/

/* --- GAME DATA ---*/
let fighting;
const locations = [
    {
        name: "town square",
        "button func": [
            goStore,
            goCave,
            fightDragon
        ],
        "button text": [
            "Go to store",
            "Go to cave",
            "Fight dragon"
        ],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button func": [
            buyHealth,
            buyWeapon,
            goTown
        ],
        "button text": [
            "Buy 10 health (10 gold)",
            "Buy weapon (30 gold)",
            "Go to town square"
        ],
        text: "You enter the store."
    }
];
let monsterHealth;
/* --- END GAME DATA --- */

/* --- INTERFACE VARIABLES --- */
// Interactable Elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// Visual Elements
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const monsterHealthText = document.querySelector("#monsterHealth");
const monsterName = document.querySelector("#monsterName");
const monsterStats = document.querySelector("monsterStats");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
/* --- END INTERFACE VARIABLES --- */

/* --- PLAYER STAT VARIABLES --- */
let currentWeaponIndex = 0;
let gold = 50;
let health = 100;
let inventory = ["stick"];
let xp = 0;
/* --- END PLAYER STAT VARIABLES --- */

/* --- GLOBAL FUNCTIONS */

function update(location) {
    // Reassign Element Text
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    text.innerText = "You are in the town square. You see a sign that says\"Store\"."

    // Reassign Element Event Handlers
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
}

/* --- END GLOBAL FUNCTIONS */

/* --- INTERFACE FUNCTION DECLARATIONS --- */
/**
 * Buy Health
 *
 * Handles 'Buy Health' button press function.
 * @function buyHealth
 */
function buyHealth() {}

/**
 * Buy Weapon
 *
 * Handles 'Buy Weapon' button press function.
 * @function buyWeapon
 */
function buyWeapon() {}

/**
 * Fight Dragon
 *
 * Handles 'Fight Dragon' button press function.
 * @function fightDragon
 */
function fightDragon() {
    console.log("Fighting Dragon.");
}

/**
 * Go to Cave
 *
 * Handles 'Go to cave' button press function.
 * @function goCave
 */
function goCave() {
    console.log("Going to cave.");
}

/**
 * Go to Store
 *
 * Handles 'Go to store' button press function.
 * @function goStore
 */
function goStore() {}

/**
 * Go to Town
 *
 * Handles 'Go to town square' button press function.
 * @function goTown
 */
function goTown() {
    update(locations[0]);
}

/* --- END INTERFACE FUNCTION DECLARATIONS --- */

/* --- EVENT HANDLER ASSIGNMENTS --- */

// Interface Element Event Handlers
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
/* --- END EVENT HANDLER ASSIGNMENTS --- */
