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
  resultsContainer.innerHTML = `
    <div id="bio-wrap">
      <div id="creature-name-id">
        <h4><span id="creature-name">${data.name}</span><span id="creature-id">#${data.id}</span></h4>
        <div id="height-weight">
          <div id="weight"><h5>Weight: ${data.weight}</h5></div>
          <div id="height"><h5>Height: ${data.height}</h5></div>
        </div>
      </div>
      <div id="creat-types">
        <div class="type"><p>Water</p></div>
      </div>
      <div id="creat-special">
        <h5>${data.special.name}</h5>
        <p>${data.special.description}</p>
      </div>
    </div>
    <div id="stats-wrap">
      <div id="stats-header" class="stat">
        <div><h3>Base</h3></div>
        <div><h3>Stats</h3></div>
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
        <div class="stat-title"><h3>Spec Att:</h3></div>
        <div class="stat-value"><p>${stats[3].base_stat}</p></div>
      </div>
      <div id="special-defense height" class="stat">
        <div class="stat-title"><h3>Spec Def:</h3></div>
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

window.addEventListener("load", () => {
  const query = history.state?.query;
  
  if (query) {
      document.querySelector("#search-input").value = query;
      performSearch();
  }
});
/* END EVENT LISTENERS */

/* --- END GLOBAL FUNCTIONS --- */