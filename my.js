let gameData = {
    playerData : { // This is all the information relating to the players inventory and stats.
        playerName : "Bob", // Players name.  Have to figure out how the player will enter this.
        playerLocation : "0", // Players current location
        playerInventory : {  // Players inventory containing all the drugs in their posession.  Maybe add other things like guns and stuff later.
            moneyOnHand : 100,
            weedCount : 0,
            cocaineCount : 0,
            mdmaCount : 0,
            lsdCount : 0,
            heroinCount : 0,
            methCount : 0,
            mushroomCount : 0
        },
        playerStats : {  // Just some stats to track and put on the screen when the player finishes a playthrough of the game.
            drugsSold : {  // This area will track how many of each drug the player sold.
                weedSold : 0,
                cocaineSold : 0,
                mdmaSold : 0,
                lsdSold : 0,
                heroinSold : 0,
                methSold : 0,
                mushroomSold : 0
            },
            moneySpentOn : { // How much money the player spent on each drug type.
                weedMoneySpent : 0,
                cocaineMoneySpent : 0,
                mdmaMoneySpent : 0,
                lsdMoneySpent : 0,
                heroinMoneySpent : 0,
                methMoneySpent : 0,
                mushroomMoneySpent : 0
            },
            moneyMadeFrom : { // How much money the player made selling each drug type.
                weedMoneyMade : 0,
                cocaineMoneyMade : 0,
                mdmaMoneyMade : 0,
                lsdMoneyMade : 0,
                heroinMoneyMade : 0,
                methMoneyMade : 0,
                mushroomMoneyMade : 0
            },
            profitFrom : { // How much profit was made with each drug.
                weedProfit : 0,
                cocaineProfit : 0,
                mdmaProfit : 0,
                lsdProfit : 0,
                heroinProfit : 0,
                methProfit : 0,
                mushroomProfit : 0
            }
        }
    },
    locationData : {
        "Sacramento" : {
            locationName : "Sacramento", // Location name without any spaces.
            id : 0,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        "San Francisco" : {
            locationName : "SanFrancisco", // Location name without any spaces.
            id : 1,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        }
    },
    locationData2 : [
        {
            locationName : "Sacramento",
            id : 0,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "San Francisco",
            id : 1,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "San Jose",
            id : 2,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "Seattle",
            id : 3,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "Portland",
            id : 4,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "Los Angeles",
            id : 5,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        },
        {
            locationName : "San Diego",
            id : 6,
            locationValues : {
                policePresence : 30,
                crimeRate : 20
            },
            drugValues : { // These are the values of the drugs that change every game day.
                weedValue : 0,
                cocaineValue : 0,
                mdmaValue : 0,
                lsdValue : 0,
                heroinValue : 0,
                methValue : 0,
                mushroomValue : 0
            },
            drugSupply : { // This will change based on how much the player buys/sells in each location.
                weedSupply : 100,
                cocaineSupply : 100,
                mdmaSupply : 100,
                lsdSupply : 100,
                heroinSupply : 100,
                methSupply : 100,
                mushroomSupply : 100
            }
        }
    ],
    randomEvents : {
        travelEvents : {
            
        },
        buysellEvents : {
            0 : {
                
            }
        }
    },
    gameTime : {
        minute : 0,
        hour : 0,
        day : 0
    }
};

let gameMinute = 0;
let gameHour = 0;
let gameDay = 1;
// SaveData = () => {
//     const saveData = JSON.stringify(gameData);
//     localStorage.setItem("savegame", saveData);
// }
function saveData() {
    const saveData = JSON.stringify(gameData);
    localStorage.setItem("savegame", saveData);
    localStorage.setItem("gameMinute", gameMinute);
    localStorage.setItem("gameHour", gameHour);
    localStorage.setItem("gameDay", gameDay);
}

// LoadData = () => {
//     const newData = localStorage.getItem("savegame");
//     if (newData) { 
//         gameData = JSON.parse(newData);
//     } else {
//         let gameMinute = 0;
//         let gameHour = 0;
//         let gameDay = 1;
//     }
// }

function loadData() {
    const newData = localStorage.getItem("savegame");
    if (newData) {
        gameData = JSON.parse(newData);
        document.querySelector(".timeDisplay").textContent = `Day: 1 Time: 00:00`;
        document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`
        gameMinute = localStorage.getItem("gameMinute");
        gameHour = localStorage.getItem("gameHour");
        gameDay = localStorage.getItem("gameDay");
        updateDrugInventory();
        updateDrugValues();
        makeTravelMenu();
    } else {
        changeDrugValues();
        testStartingLocation();
        makeTravelMenu();
        updateDrugValues();
    }
}
loadData();
document.querySelector(".timeDisplay").textContent = `Day: 1 Time: 00:00`;
document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`

// Start time rolling.  One second = one minute in game.  One game day is 24 minutes.
// endDay = setInterval(increaseTime, 1000); // DEFAULT: 24 minute days.
endDay = setInterval(increaseTime, 104); // OPTIONAL: 2.5 minute days.
// endDay = setInterval(increaseTime, 208); // OPTIONAL: 5 minute days.
// endDay = setInterval(increaseTime, 416); // OPTIONAL: 10 minute days.

// If no save data is present, set inital randomized drug values.
function changeDrugValues() {
    arg1 = gameData.locationData2;
    arg1.forEach(element => {
        element.drugValues.weedValue = Math.floor(Math.random() * (16 - 5) + 5);
        element.drugValues.cocaineValue = Math.floor(Math.random() * (101 - 60) + 60);
        element.drugValues.mdmaValue = Math.floor(Math.random() * (131 - 80) + 80);
        element.drugValues.lsdValue = Math.floor(Math.random() * (101 - 25) + 25);
        element.drugValues.heroinValue = Math.floor(Math.random() * (201 - 100) + 100);
        element.drugValues.methValue = Math.floor(Math.random() * (161 - 80) + 80);
        element.drugValues.mushroomValue = Math.floor(Math.random() * (101 - 20) + 20);
    });
}
// changeDrugValues();

// If no save data is present, set players starting location on page load.
function testStartingLocation() {
    startingLocation = Math.floor(Math.random() * (7 - 0) + 0);
    arg1 = gameData.locationData2;
    arg1.forEach(element => {
        if (element.id === startingLocation) {
            gameData.playerData.playerLocation = element.id;
        }
    });
    // document.querySelector(".locationName").innerHTML = `<strong>Name: </strong>${arg1[startingLocation].locationName}`;
    updateDrugValues();
}
// testStartingLocation();

// Create and/or update travel menu as needed.
function makeTravelMenu() {
    playerLocation = gameData.playerData.playerLocation;
    arg1 = gameData.locationData2;
    travelMenu = '';
    arg1.forEach(element => {
        if (element.id === gameData.playerData.playerLocation) {
            travelMenu += `<button class="tt-${arg1[playerLocation].locationName.replace(/ /g, '')} travelButton" disabled="true">${gameData.locationData2[playerLocation].locationName}</button><br>`;
        } else {
            travelMenu += `<button class="tt-${element.locationName.replace(/ /g, '')} travelButton">${element.locationName}</button><br>`;
        }
    });
    document.querySelector(".travelButtons").innerHTML = travelMenu;
    arg1.forEach(element => {
        arg2 = element.locationName.replace(/ /g, '');
        document.querySelector(`.tt-${arg2}`).addEventListener("click", function() {
            arg2 = element.locationName.replace(/ /g, '');
            travelToLocation(element.id);
        });
    });
}
makeTravelMenu();

function buy(arg1) {
    drugPrice = gameData.locationData2[gameData.playerData.playerLocation].drugValues[`${arg1}Value`];
    drugOnHand = gameData.playerData.playerInventory[`${arg1}Count`];
    moneyOnHand = gameData.playerData.playerInventory.moneyOnHand
    if (drugPrice <= moneyOnHand) {
        gameData.playerData.playerInventory.moneyOnHand -= drugPrice;
        gameData.playerData.playerInventory[`${arg1}Count`] += 1;
        document.querySelector(`.${arg1}Inv`).textContent = `${arg1}: ${gameData.playerData.playerInventory[`${arg1}Count`]}`
        document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`
    }
}

function sell(arg1) {
    drugPrice = gameData.locationData2[gameData.playerData.playerLocation].drugValues[`${arg1}Value`];
    drugOnHand = gameData.playerData.playerInventory[`${arg1}Count`];
    if (drugOnHand > 0) {
        gameData.playerData.playerInventory.moneyOnHand += drugPrice;
        gameData.playerData.playerInventory[`${arg1}Count`] -= 1;
        document.querySelector(`.${arg1}Inv`).textContent = `${arg1}: ${gameData.playerData.playerInventory[`${arg1}Count`]}`
        document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`
    }
}

function travelToLocation(arg1) {
    gameData.playerData.playerLocation = arg1;
    makeTravelMenu();
    // console.log(gameData.locationData2[arg1].drugValues);
    bookmark = gameData.locationData2[arg1].drugValues;
    // document.querySelector(".locationName").innerHTML = `<strong>Name: </strong>${gameData.locationData2[arg1].locationName}`;
    updateDrugValues();
}

function updateDrugValues() {
    bookmark = gameData.locationData2[gameData.playerData.playerLocation].drugValues;
    document.querySelector(".weedBuy").innerHTML = `BUY<br><span>$${bookmark.weedValue}</span>`;
    document.querySelector(".weedSell").innerHTML = `SELL<br><span>$${bookmark.weedValue}</span>`;
    document.querySelector(".cocaineBuy").innerHTML = `BUY<br><span>$${bookmark.cocaineValue}</span>`;
    document.querySelector(".cocaineSell").innerHTML = `SELL<br><span>$${bookmark.cocaineValue}</span>`;
    document.querySelector(".mdmaBuy").innerHTML = `BUY<br><span>$${bookmark.mdmaValue}</span>`;
    document.querySelector(".mdmaSell").innerHTML = `SELL<br><span>$${bookmark.mdmaValue}</span>`;
    document.querySelector(".lsdBuy").innerHTML = `BUY<br><span>$${bookmark.lsdValue}</span>`;
    document.querySelector(".lsdSell").innerHTML = `SELL<br><span>$${bookmark.lsdValue}</span>`;
    document.querySelector(".heroinBuy").innerHTML = `BUY<br><span>$${bookmark.heroinValue}</span>`;
    document.querySelector(".heroinSell").innerHTML = `SELL<br><span>$${bookmark.heroinValue}</span>`;
    document.querySelector(".methBuy").innerHTML = `BUY<br><span>$${bookmark.methValue}</span>`;
    document.querySelector(".methSell").innerHTML = `SELL<br><span>$${bookmark.methValue}</span>`;
    document.querySelector(".mushroomBuy").innerHTML = `BUY<br><span>$${bookmark.mushroomValue}</span>`;
    document.querySelector(".mushroomSell").innerHTML = `SELL<br><span>$${bookmark.mushroomValue}</span>`;
}

function updateDrugInventory() {
    document.querySelector(".weedInv").textContent = `Weed: ${gameData.playerData.playerInventory.weedCount}`
    document.querySelector(".cocaineInv").textContent = `cocaine: ${gameData.playerData.playerInventory.cocaineCount}`
    document.querySelector(".mdmaInv").textContent = `mdma: ${gameData.playerData.playerInventory.mdmaCount}`
    document.querySelector(".lsdInv").textContent = `lsd: ${gameData.playerData.playerInventory.lsdCount}`
    document.querySelector(".heroinInv").textContent = `heroin: ${gameData.playerData.playerInventory.heroinCount}`
    document.querySelector(".methInv").textContent = `meth: ${gameData.playerData.playerInventory.methCount}`
    document.querySelector(".mushroomInv").textContent = `mushroom: ${gameData.playerData.playerInventory.mushroomCount}`
}

function increaseTime() {
    timeMinute = 0;
    timeHour = 0;
    gameMinute++;  // Add a minute

    if (gameMinute >= 60) { // Increase gameHour when minutes hit 60.
        gameMinute = gameMinute - 60;
        gameHour++;
        saveData();
        // weedInv++;
        // document.querySelector(".weedInv").textContent = `Weed: ${weedInv}`
    }
    timeMinute = convertTime(timeMinute, gameMinute); // Get formatted time.

    if (gameHour >= 24) { // Increase gameDay when hours hit 24.
        gameHour = 0;
        gameDay++;
        saveData();
        changeDrugValues();
        updateDrugValues();
    }
    timeHour = convertTime(timeHour, gameHour); // Get formatted time

    if (gameDay >= 31) { // Game over when gameDay = 31 giving the player 30 full game days to play.
        gameOver();
    }

    // Set time on the website.
    document.querySelector(".timeDisplay").textContent = `Day: ${gameDay} Time: ${timeHour}:${timeMinute}`;
    // document.querySelector(".timeDisplay").textContent = `Day: ${gameDay} `;
    // console.log(Math.floor(Math.random() * (10 - 0) + 0));
    
}

// This just puts a zero in front of the single digits in the time, nothing more.
function convertTime(arg1, arg2) {
    arg1 = arg2.toString();
    if (arg1.length === 1) {
        return arg1 = `0${arg1}`;
    }
    return arg1;
}

