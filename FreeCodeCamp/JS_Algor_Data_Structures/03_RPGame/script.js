/**
 * RPG Game - FCC Project
 *
 * The RPG Game project fom the 'JS Algorithms and Data Structures section of the FCC Curriculum.
*/

/* --- GAME DATA ---*/
let fighting;
// TODO: Organize Locations Alphabetically
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
    },
    {
        name: "fight",
        "button func": [
            attack,
            dodge,
            goTown
        ],
        "button text": [
            "Attack",
            "Dodge",
            "Run"
        ],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button func": [
            goTown,
            goTown,
            goTown
        ],
        "button text": [
            "Go to town square",
            "Go to town square",
            "Go to town square"
        ],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button func": [
            restart,
            restart,
            restart
        ],
        "button text": [
            "REPLAY?",
            "REPLAY?",
            "REPLAY?"
        ],
        text: "You die. &#x2620;"
    },
    {
        name: "win",
        "button func": [
            restart,
            restart,
            restart
        ],
        "button text": [
            "REPLAY?",
            "REPLAY?",
            "REPLAY?"
        ],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
        name: "easter egg",
        "button func": [
            pickTwo,
            pickEight,
            goTown
        ],
        "button text": [
            "2",
            "8",
            "Go to town square?"
        ],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];
let monsterHealth;
const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {   name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];
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
const monsterStats = document.querySelector("#monsterStats");
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

/* --- DEFAULT EVENT HANDLERS --- */
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
/* --- END DEFAULT EVENT HANDLERS --- */

/* --- GLOBAL FUNCTIONS */
/**
 * Easter Egg
 *
 * Shhh. Its a secret.
 * @function easterEgg
 */
function easterEgg() {
    update(locations[7]);
}

/**
 * Is Monster Hit
 *
 * Checks if Monster is hit
 * @function isMonsterHit
 * @returns {boolean}
 */
function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}
/**
 * Restart Game
 *
 * Handles restarting the game.
 * @function restart
 */
function restart() {
    // Reset Game variables
    currentWeaponIndex = 0;
    inventory = ["stick"];
    gold = 50;
    health = 100;
    xp = 0;

    // Reset display variables
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;

    // Reset player position
    goTown();
}

/**
 * Update
 *
 * Handles updating the interface on location change.
 * @function update
 * @param {object} location Data for location
 */
function update(location) {
    // Hide monster display
    monsterStats.style.display = "none";

    // Reassign Element Text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    text.innerHTML = location.text;

    // Reassign Element Event Handlers
    button1.onclick = location["button func"][0];
    button2.onclick = location["button func"][1];
    button3.onclick = location["button func"][2];
}

/**
 * Win Game
 *
 * Handles winning the game.
 * @function winGame
 */
function winGame() {
    update(locations[6]);
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
function buyWeapon() {
    if (currentWeaponIndex < weapons.length - 1) {
        // Check if player has required gold
        if (gold >= 30) {
            // Calculate remaining gold.
            gold -= 30;
            // Update current weapon index
            currentWeaponIndex++;

            // Update interface for display.
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeaponIndex].name;
            text.innerText = "You now have a " + newWeapon + ".";

            // Update inventory
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        // If player has most powerful weapon
        // Set Text and function of second button
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;

        // Set Display text
        text.innerText = "You already have the most powerful weapon!";
    }
}

/**
 * Fight Beast
 *
 * Handles 'Fight Beast' button press function.
 * @function fightBeast
 */
function fightBeast() {
    fighting = 1;
    goFight();
}

/**
 * Fight Dragon
 *
 * Handles 'Fight Dragon' button press function.
 * @function fightDragon
 */
function fightDragon() {
    fighting = 2;
    goFight();
}

/**
 * Fight Slime
 *
 * Handles 'Fight Slime' button press function.
 * @function fightSlime
 */
function fightSlime() {
    fighting = 0;
    goFight();
}

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
 * Go Fight
 *
 * Preps interface for combat
 * @function goFight
 */
function goFight() {
    // Update Interface to fight options
    update(locations[3]);
    monsterStats.style.display = "block";

    // Display current monsters info.
    monsterHealth = monsters[fighting].health;
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
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

/**
 * Sell Weapon
 *
 * Handles Selling of weapon from inventory.
 * @function sellWeapon
 */
function sellWeapon() {
    // If inventory has more than 1 weapon
    if (inventory.length > 1) {
        // Calculate new gold amount
        gold += 15;

        // Set display text:
        goldText.innerText = gold;

        // Remove first weapon from inventory
        let currentWeapon = inventory.shift();

        // Set Display Text
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

/* --- END INTERFACE FUNCTION DECLARATIONS --- */

/* --- COMBAT FUNCTIONS --- */

/**
 * Attack
 *
 * Handles attacking enemy
 * @function attack
 */
function attack() {
    // Update Player Variables
    health -= getMonsterAttackValue(monsters[fighting].level);

    // Update monster Variables
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }

    // Update Display text
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";

    // If Player health is 0, call lose
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }

    // Check if weapon breaks
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeaponIndex--;
    }
}

// TODO: Decide if this is the right place for this function.
/**
 * Get monster attack value
 *
 * Handles getting a monster attack value
 * @function getMonsterAttackValue
 * @param {number} level Monsters level
 * @returns {number} The Monsters Attack value
 */
function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

/**
 * Dodge
 *
 * Handles dodging enemy attack
 * @function dodge
 */
function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

/**
 * Defeat Monster
 *
 * Handles defeating a monster in combat
 * @function defeatMonster
 */
function defeatMonster() {
    // Give gold reward when monster is defeated
    gold += Math.floor(monsters[fighting].level * 6.7);

    // Increase Player XP on defeat
    xp += monsters[fighting].level;

    // Update Display values.
    goldText.innerText = gold;
    xpText.innerText = xp;

    // Send player to win interface
    update(locations[4]);
}

/**
 * Lose
 *
 * Handles loosing a combat
 * @function lose
 */
function lose() {
    update(locations[5]);
}
/* --- END COMBAT FUNCTIONS --- */

/* --- Temp --- */
function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}
//TODO: Move/comment function:
/**
 * Pick
 *
 * @function pick
 * @param {string} guess Number guessed.
 */
function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }
}
