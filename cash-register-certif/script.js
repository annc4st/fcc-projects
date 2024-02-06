let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]



const denominations = [
    { name: 'PENNY', value: 0.01},
    { name: 'NICKEL', value: 0.05},
    { name: 'DIME', value: 0.1},
    { name: 'QUARTER', value: 0.25},
    { name: 'ONE', value: 1}, 
    { name: 'FIVE', value: 5},
    {name: 'TEN', value: 10},
    {name: 'TWENTY', value: 20},
    { name: 'ONE HUNDRED', value: 100}
]

const reversedDenoms = denominations.reverse();

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const cashDrawer = document.getElementById("cash-drawer-display");
const priceScreen = document.getElementById("price-screen");

priceScreen.textContent += " " + "$ " +price;


cid.forEach((coin) =>{
    cashDrawer.innerHTML += `<p>${coin[0]}: $ ${coin[1]} </p>`
})

const calculate = () => {
  changeDue.innerHTML = "";
  let cash = Number(cashInput.value);
  if(cash < price){
    alert("Customer does not have enough money to purchase the item")
    }
  if(cash === price){
    changeDue.innerHTML += `<p>No change due - customer paid with exact cash</p>`

  } else {
    let change = parseFloat(cash - price);
    let totalCid = parseFloat(cid.reduce((acc, val) => acc + val[1] , 0).toFixed(2));
    
    if(totalCid === change) {
        changeDue.innerHTML += `<p>Status: Closed</p>`;
        cid.forEach(([name, value]) => {
            if(value) {
                const paragraph = document.createElement("p");
                paragraph.textContent = `${name}: $${value}`
                changeDue.appendChild(paragraph);
            } 
        })
    }

    cid = cid.reverse();

    const result = reversedDenoms.reduce((acc, next, index) => {
        if(change >= next.value){
            let currValue = 0.0;
            while(change >= next.value && cid[index][1] >= next.value){
                currValue += next.value;
                change -= next.value;
                change = Math.round(change *100) / 100;
                cid[index][1] -= next.value;
            }
            acc.push([next.name, currValue]);
                return acc;
            } else {
                return acc
            }
        }, [])

        if (result.length > 0 && change === 0) {
            changeDue.innerHTML += `<p>Status: OPEN</p>`
            result.forEach(([name, value]) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = `${name}: $${value}`;
            changeDue.appendChild(paragraph);
        });
        } else {
            changeDue.innerHTML += "Status: INSUFFICIENT_FUNDS";
        }
    }
}


purchaseBtn.addEventListener("click", calculate)
