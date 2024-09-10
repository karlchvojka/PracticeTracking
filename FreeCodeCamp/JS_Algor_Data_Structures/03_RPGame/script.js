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
    },
    {
        name: "cave",
        "button func": [
            fightSlime,
            fightBeast,
            goTown
        ],
        "button text": [
            "Fight Slime",
            "Fight fanged beast",
            "Go to town square"
        ],
        text: "You enter the cave. You see some monsters."
    }
];
let monsterHealth;
const weapons = [];
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
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    text.innerText = location.text;

    // Reassign Element Event Handlers
    button1.onclick = location["button func"][0];
    button2.onclick = location["button func"][1];
    button3.onclick = location["button func"][2];
}

/* --- END GLOBAL FUNCTIONS */

/* --- INTERFACE FUNCTION DECLARATIONS --- */
/**
 * Buy Health
 *
 * Handles 'Buy Health' button press function.
 * @function buyHealth
 */
function buyHealth() {
    // Check if player has required gold.
    if (gold >= 10) {
        // Calculate remaining gold and health.
        gold -= 10;
        health += 10;

        // Reassign Player variables for display.
        gold.innerText = gold;
        health.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health."
    }
}

/**
 * Buy Weapon
 *
 * Handles 'Buy Weapon' button press function.
 * @function buyWeapon
 */
function buyWeapon() {}

/**
 * Fight Beast
 *
 * Handles 'Fight Beast' button press function.
 * @function fightBeast
 */
function fightBeast() {}

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
 * Fight Slime
 *
 * Handles 'Fight Slime' button press function.
 * @function fightSlime
 */
function fightSlime() {}

/**
 * Go to Cave
 *
 * Handles 'Go to cave' button press function.
 * @function goCave
 */
function goCave() {
    update(locations[2]);
}

/**
 * Go to Store
 *
 * Handles 'Go to store' button press function.
 * @function goStore
 */
function goStore() {
    update(locations[1]);
}

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
