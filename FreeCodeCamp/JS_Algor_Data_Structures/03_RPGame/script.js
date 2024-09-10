/**
 * RPG Game - FCC Project
 *
 * The RPG Game project fom the 'JS Algorithms and Data Structures section of the FCC Curriculum.
*/

/* --- GAME DATA ---*/
let fighting;
const locations = [];
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

function update(location) {}

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
function goStore() {
    // Reassign Element Text
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store.";

    // Reassign Button Event Handlers
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}

/**
 * Go to Town
 *
 * Handles 'Go to town square' button press function.
 * @function goTown
 */
function goTown() {
    //Reassign Element Text
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";

    // Reassign Button Event Handlers
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
}

/* --- END INTERFACE FUNCTION DECLARATIONS --- */

/* --- EVENT HANDLER ASSIGNMENTS --- */

// Interface Element Event Handlers
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
/* --- END EVENT HANDLER ASSIGNMENTS --- */

/* --- TEMPORARY --- */
const cat = {
    name: "Whiskers",
    "Number of legs": 4
}
console.log(cat);
/* --- END TEMPORARY --- */
