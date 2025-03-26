/**
 * FCC Cash Register Project
 */

/* --- LOCAL DATA --- */
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
let price = 1.87;
/* --- END LOCAL DATA --- */

/* --- INTERFACE VARIABLES --- */
const cash = document.getElementById("cash");
const changeDue = document.querySelector("#change-due > p");
const purchaseBtn = document.getElementById("purchase-btn");
/* --- END INTERFACE VARIABLES --- */

/* --- EVENT HANDLERS --- */
purchaseBtn.addEventListener("click", () => {
    if(cash.value < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (cash.value = price) {
        changeDue.innerHTML = "No change due - customer paid with exact cash"
    }
});
/* --- END EVENT HANDLERS --- */
