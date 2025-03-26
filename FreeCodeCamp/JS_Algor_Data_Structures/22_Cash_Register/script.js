/**
 * FCC Cash Register Project
 */

/* --- LOCAL DATA --- */
let cid = [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
];
let price = 19.5;
/* --- END LOCAL DATA --- */

/* --- INTERFACE VARIABLES --- */
const cash = document.getElementById("cash");
const changeDue = document.querySelector("#change-due > p");
const purchaseBtn = document.getElementById("purchase-btn");
/* --- END INTERFACE VARIABLES --- */

/* --- FUNCTIONAL VARIABLES --- */
const checkCashRegister = (price, cash, cid) => {
    let changeDue = cash - price;
    let changeArray = [];
    
    let currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.10],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    let totalCid = Number(cid.reduce((sum, denom) => sum + denom[1], 0).toFixed(2));

    // Fix: If totalCid matches changeDue, return "CLOSED" without reversing cid
    if (totalCid === changeDue) {
        return { status: "CLOSED", change: [...cid].reverse() };
    }

    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    for (let [unit, unitValue] of currencyUnits.reverse()) {
        let amountAvailable = cid.find(el => el[0] === unit)[1];
        let amountToGive  = 0;

        while (changeDue >= unitValue && amountAvailable > 0) {
            changeDue -= unitValue;
            changeDue = Number(changeDue.toFixed(2)); // Fix floating point precision
            amountAvailable -= unitValue;
            amountToGive += unitValue;
        }
        if (amountToGive > 0) {
            changeArray.push([unit, amountToGive]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    return { status: "OPEN", change: changeArray };
};
/* --- END FUNCTIONAL VARIABLES --- */

/* --- EVENT HANDLERS --- */
purchaseBtn.addEventListener("click", () => {
    let diff = parseFloat(cash.value) - price;

    if (diff < 0) {
        alert("Customer does not have enough money to purchase the item.");
    } else if (diff === 0) {
        changeDue.innerHTML = "No change due - customer paid with exact cash.";
    } else {
        let result = checkCashRegister(price, parseFloat(cash.value), cid);

        if (result.status === "OPEN") {
            let formattedChange = result.change
                .sort((a, b) => b[1] - a[1]) // Sort in descending order
                .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
                .join(" ");
            changeDue.innerHTML = `Status: OPEN ${formattedChange}`;
        } else if (result.status === "CLOSED") {
            let formattedChange = result.change
                .filter(([_, amount]) => amount > 0) // Remove denominations with zero value
                .map(([unit, amount]) => `${unit}: $${amount}`)
                .join(" ");
            changeDue.innerHTML = `Status: CLOSED ${formattedChange}`;
        } else { 
            changeDue.innerHTML = `Status: ${result.status}`; // Handle "INSUFFICIENT_FUNDS" case
        }
    }
});
/* --- END EVENT HANDLERS --- */

