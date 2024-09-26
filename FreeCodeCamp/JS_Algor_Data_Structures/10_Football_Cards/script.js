/**
 * Football Team Cards
 *
 * Football Team Cards Project from FreeCodeCamp Curriculum
 */

/* --- INTERFACE VARIABLES --- */
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playerDropdownList = document.getElementById("players");
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
const myFavoriteFootballTeam = {
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7
    },
    isWorldCupWinner: true,
    players: [
        {
          name: "Sergio Almirón",
          position: "forward",
          number: 1,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Sergio Batista",
          position: "midfielder",
          number: 2,
          isCaptain: false,
          nickname: null,
        },
         {
          name: "Ricardo Bochini",
          position: "midfielder",
          number: 3,
          isCaptain: false,
          nickname: "El Bocha",
        },
        {
          name: "Claudio Borghi",
          position: "midfielder",
          number: 4,
          isCaptain: false,
          nickname: "Bichi",
        },
        {
          name: "José Luis Brown",
          position: "defender",
          number: 5,
          isCaptain: false,
          nickname: "Tata",
        },
        {
          name: "Daniel Passarella",
          position: "defender",
          number: 6,
          isCaptain: false,
          nickname: "El Gran Capitán",
        },
        {
          name: "Jorge Burruchaga",
          position: "forward",
          number: 7,
          isCaptain: false,
          nickname: "Burru",
        },
        {
          name: "Néstor Clausen",
          position: "defender",
          number: 8,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "José Luis Cuciuffo",
          position: "defender",
          number: 9,
          isCaptain: false,
          nickname: "El Cuchu",
        },
        {
          name: "Diego Maradona",
          position: "midfielder",
          number: 10,
          isCaptain: true,
          nickname: "El Pibe de Oro",
        },
        {
          name: "Jorge Valdano",
          position: "forward",
          number: 11,
          isCaptain: false,
          nickname: "The Philosopher of Football",
        },
        {
          name: "Héctor Enrique",
          position: "midfielder",
          number: 12,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Oscar Garré",
          position: "defender",
          number: 13,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Ricardo Giusti",
          position: "midfielder",
          number: 14,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Luis Islas",
          position: "goalkeeper",
          number: 15,
          isCaptain: false,
          nickname: "El loco",
        },
        {
          name: "Julio Olarticoechea",
          position: "defender",
          number: 16,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Pedro Pasculli",
          position: "forward",
          number: 17,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Nery Pumpido",
          position: "goalkeeper",
          number: 18,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Oscar Ruggeri",
          position: "defender",
          number: 19,
          isCaptain: false,
          nickname: "El Cabezón",
        },
        {
          name: "Carlos Tapia",
          position: "midfielder",
          number: 20,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Marcelo Trobbiani",
          position: "midfielder",
          number: 21,
          isCaptain: false,
          nickname: "Calesita",
        },
        {
          name: "Héctor Zelada",
          position: "goalkeeper",
          number: 22,
          isCaptain: false,
          nickname: null,
        }
    ],
    sport: "Football",
    team: "Argentina",
    year: 1986
};

const { sport, players, team, year } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// Data Interface Assignments:
headCoach.textContent = coachName;
teamName.textContent = team;
typeOfSport.textContent = sport;
worldCupYear.textContent = year;

// Data Config:
Object.freeze(myFavoriteFootballTeam);
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/**
 * Set Player Cards
 *
 * Shows player cards based on filter selection
 * @function setPlayerCards
 * @param {array} arr Array of Players
 */
const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map(({
        isCaptain,
        name,
        nickname,
        number,
        position
    }) => {
       `<div class="player-card">
            <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>Nickname: ${nickname ? nickname : "N/A"}</p>
        </div>`
    }).join("");
};
/* --- END APP LOGIC --- */

/* --- EVENT LISTENERS --- */
playerDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";

    switch(e.target.value) {
    }
});
/* --- END EVENT LISTENERS --- */

