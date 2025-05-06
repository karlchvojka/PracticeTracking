/**
 * FreeCodeCamp RPG Creature Search
 * 
 * A simple application to allow searching for RPG characters from an API
 */

/* --- LOCAL DATA --- */
const creatureApiUrl = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/'
const creatureListApiUrl = 'https://rpg-creature-api.freecodecamp.rocks/api/creatures'
/* --- END LOCAL DATA --- */

/* --- INTERFACE VARIABLES --- */
const descContainer = document.getElementById("description");
const resultsContainer = document.getElementById("results");
const searchForm = document.getElementById("search-form");
/* --- END INTERFACE VARIABLES --- */

/* --- GLOBAL FUNCTIONS --- */
/**
 * Build Results
 * 
 * @function buildResults
 * @param {object} data Returned Data from API
 * @returns {string} HTML structure with data
 */
const buildResults = (data) => {
  const {
    stats
  } = data;

  descContainer.style.display = "none";
  resultsContainer.style.display = "block";
  resultsContainer.innerHTML = `
    <div id="bio-wrap">
      <div id="creature-name-id">
        <h2><span id="creature-name">${data.name}</span><span id="creature-id">#${data.id}</span></h2>
      </div>
      <div id="creature-types">` + data.types.map(
        function (type) { return `
          <div class="type `+ type.name +`"><p>` + type.name + `</p></div>`
        }).join('') +
      `</div>
      <div id="creature-special">
        <h3>Special: <span>${data.special.name}</span></h3>
        <p>${data.special.description}</p>
      </div>
    </div>
    <div id="stats-wrap">
      <h3>Stats:</h3>
      <div id="height" class="stat">
        <div class="stat-title"><h3>Height:</h3></div>
        <div class="stat-value"><p>${data.height}</p></div>
      </div>
      <div id="weight" class="stat">
        <div class="stat-title"><h3>Weight:</h3></div>
        <div class="stat-value"><p>${data.weight}</p></div>
      </div>
      <div id="hp" class="stat">
        <div class="stat-title"><h3>HP:</h3></div>
        <div class="stat-value"><p>${stats[0].base_stat}</p></div>
      </div>
      <div id="attack" class="stat">
        <div class="stat-title"><h3>Attack:</h3></div>
        <div class="stat-value"><p>${stats[1].base_stat}</p></div>
      </div>
      <div id="defense" class="stat">
        <div class="stat-title"><h3>Defense:</h3></div>
        <div class="stat-value"><p>${stats[2].base_stat}</p></div>
      </div>
      <div id="special-attack" class="stat">
        <div class="stat-title"><h3>Special Attack:</h3></div>
        <div class="stat-value"><p>${stats[3].base_stat}</p></div>
      </div>
      <div id="special-defense height" class="stat">
        <div class="stat-title"><h3>Special Defense:</h3></div>
        <div class="stat-value"><p>${stats[4].base_stat}</p></div>
      </div>
      <div id="speed" class="stat">
        <div class="stat-title"><h3>Speed:</h3></div>
        <div class="stat-value"><p>${stats[5].base_stat}</p></div>
      </div>
    </div>
  `
}

/**
 * Build List
 * 
 * Builds a simple list of Creature names and IDs
 * 
 * @function buildList
 * @param {array} data Returned data from Creature API
 * @returns {string} HTML structure with data
 */
const buildList = (data) => {
  resultsContainer.innerHTML = 
    `<div id="results-list">
      <h3>Results List</h3>
      <div class="creature-list">` 
      + data.map(
        function (creature) { return `
          <div class="creature">
            <div class="creature-id">
              <p>` + creature.id + `</p>
            </div>
            <div class="creature-name">
              <p>` + creature.name + `</p>
            </div>
          </div>`;
        }
      ).join('') + 
    `</div>`;
}

/**
 * Fetch Data
 * 
 * @async
 * @function fetchData
 * @param {string} ident Name or ID of Creature
 * @returns {json} returns json of data
 */
const fetchData = async (ident) => {
  const fullUrl = creatureApiUrl + ident;
  try {
    if (ident) {
      const res = await fetch(fullUrl);
      const data = await res.json();
      buildResults(data);
    } else {
      const res = await fetch(creatureListApiUrl);
      const data = await res.json();
      buildList(data);
    }
  } catch (err) {
    console.log(err);
  }
}

/* EVENT LISTENERS */
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const inputElement = document.querySelector("#search-input");

  history.replaceState({ query: inputElement.value }, "");

  fetchData(inputElement.value);
});
/* END EVENT LISTENERS */

/* --- END GLOBAL FUNCTIONS --- */