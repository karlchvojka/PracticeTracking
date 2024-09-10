/* --- INTERFACE VARIABLES --- */
// Interactable Elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// Visual Elements
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const monsterName = document.querySelector("#monsterName");
const monsterStats = document.querySelector("monsterStats");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
/* --- END INTERFACE VARIABLES --- */

/* --- GAME VARIABLES --- */
let fighting;
let monsterHealth;
/* --- END GAME VARIABLES --- */

/* --- PLAYER STAT VARIABLES --- */
let currentWeaponIndex = 0;
let gold = 50;
let health = 100;
let inventory = ["stick"];
let xp = 0;
/* --- END PLAYER STAT VARIABLES --- */
