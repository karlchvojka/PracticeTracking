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
  console.log(data);
  descContainer.style.display = "none";
  resultsContainer.style.display = "grid";
  resultsContainer.style.border = "1px solid";

  document.getElementById("creature-name").innerText = data.name;
  document.getElementById("creature-id").innerText = data.id;
  document.getElementById("types").innerHTML = data.types.map(
    function (type) { return `
      <div class="type `+ type.name +`"><p>` + type.name + `</p></div>`
    }).join('');
  document.getElementById("special-title").innerText = data.special.name;
  document.getElementById("special-description").innerText = data.special.description;
  document.getElementById("height").innerText = data.height;
  document.getElementById("weight").innerText = data.weight;
  document.getElementById("hp").innerText = data.stats[0].base_stat;
  document.getElementById("attack").innerText = data.stats[1].base_stat;
  document.getElementById("defense").innerText = data.stats[2].base_stat;
  document.getElementById("special-attack").innerText = data.stats[3].base_stat;
  document.getElementById("special-defense").innerText = data.stats[4].base_stat;
  document.getElementById("speed").innerText = data.stats[5].base_stat;
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
    alert("Creature not found");
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