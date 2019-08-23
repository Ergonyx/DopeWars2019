let gameData = {
    playerData : { // This is all the information relating to the players inventory and stats.
        playerName : "Bob", // Players name.  Have to figure out how the player will enter this.
        playerLocation : "0", // Players current location
        playerInventory : {  // Players inventory containing all the drugs in their posession.  Maybe add other things like guns and stuff later.
            moneyOnHand : 10000,
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
        createInterface();
        gameData = JSON.parse(newData);
        // document.querySelector(".timeDisplay").textContent = `Day: 1 Time: 00:00`;
        document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`;
        gameMinute = localStorage.getItem("gameMinute");
        gameHour = localStorage.getItem("gameHour");
        gameDay = localStorage.getItem("gameDay");
        updateDrugInventory();
        updateDrugValues();
        makeTravelMenu();
    } else {
        createInterface();
        document.querySelector(".moneyOnHand").textContent = `Money: $${gameData.playerData.playerInventory.moneyOnHand}`;
        changeDrugValues();
        setStartingLocation();
        makeTravelMenu();
        updateDrugValues();
    }
    endDay = setInterval(increaseTime, 208); // OPTIONAL: 5 minute days.
}
// loadData();
document.querySelector(".moneyOnHand").textContent = `Welcome To`;
document.querySelector(".timeDisplay").textContent = `DOPE WARS 2019!`;

function createMenuButtons() {
    const newData = localStorage.getItem("savegame");
    if (newData) {
        document.querySelector(".menuButtons").innerHTML = `<button class="startNewGame" onclick="startNewGame()">NEW GAME</button><button class="loadGame" onclick="loadData()">LOAD GAME</button>`
    } else {
        document.querySelector(".menuButtons").innerHTML = `<button class="startNewGame" onclick="startNewGame()">NEW GAME</button><button class="loadGame" onclick="loadData()" disabled="true">LOAD GAME</button>`
    }
}
createMenuButtons();

function startNewGame() {
    localStorage.removeItem("savegame");
    loadData();
}

// Start time rolling.  One second = one minute in game.  One game day is 24 minutes.
// endDay = setInterval(increaseTime, 1000); // DEFAULT: 24 minute days.
// endDay = setInterval(increaseTime, 104); // OPTIONAL: 2.5 minute days.
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

// If no save data is present, set players starting location on page load.
function setStartingLocation() {
    startingLocation = Math.floor(Math.random() * (7 - 0) + 0);
    arg1 = gameData.locationData2;
    arg1.forEach(element => {
        if (element.id === startingLocation) {
            gameData.playerData.playerLocation = element.id;
        }
    });
    updateDrugValues();
}

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
    bookmark = gameData.playerData.playerInventory;
    document.querySelector(".weedInv").textContent = `Weed: ${bookmark.weedCount}`
    document.querySelector(".cocaineInv").textContent = `cocaine: ${bookmark.cocaineCount}`
    document.querySelector(".mdmaInv").textContent = `mdma: ${bookmark.mdmaCount}`
    document.querySelector(".lsdInv").textContent = `lsd: ${bookmark.lsdCount}`
    document.querySelector(".heroinInv").textContent = `heroin: ${bookmark.heroinCount}`
    document.querySelector(".methInv").textContent = `meth: ${bookmark.methCount}`
    document.querySelector(".mushroomInv").textContent = `mushroom: ${bookmark.mushroomCount}`
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

// gameOver() will change the right panel to show thier end game stats.
function gameOver() {
    // Contents go here.
    clearInterval(endDay);
    moneyOnHand = gameData.playerData.playerInventory.moneyOnHand;
    document.querySelector(".container").innerHTML = `
    <div class='gameOver'>
        <h1>GAME OVER</h1>
        <div class='endgameStats'>
        </div>
        <button class='restartGame'>RESTART</button>
    </div>`;
    document.querySelector(".restartGame").addEventListener("click", function() {
        localStorage.removeItem("savegame");
        location.reload();
    });
    
    document.querySelector(".endgameStats").innerHTML = `<span>You finished the game with <strong>$${moneyOnHand}</strong></span><br>`;
}

function createInterface() {
    document.querySelector(".container").innerHTML = `<div class="menu">
    <div class="drugList">
        <h2 class="drugTitle">DRUGS</h2>
        <div class="drug weedStyles">
            <button class="weedBuy" onclick="buy('weed')">BUY<br><span>$10</span></button>
            <span class="weedInv capitalize">Weed: 0</span>
            <button class="weedSell" onclick="sell('weed')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug cocaineStyles">
            <button class="cocaineBuy" onclick="buy('cocaine')">BUY<br><span>$10</span></button>
            <span class="cocaineInv capitalize">Cocaine: 0</span>
            <button class="cocaineSell" onclick="sell('cocaine')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug mdmaStyles">
            <button class="mdmaBuy" onclick="buy('mdma')">BUY<br><span>$10</span></button>
            <span class="mdmaInv uppercase">MDMA: 0</span>
            <button class="mdmaSell" onclick="sell('mdma')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug lsdStyles">
            <button class="lsdBuy" onclick="buy('lsd')">BUY<br><span>$10</span></button>
            <span class="lsdInv uppercase">LSD: 0</span>
            <button class="lsdSell" onclick="sell('lsd')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug heroinStyles">
            <button class="heroinBuy" onclick="buy('heroin')">BUY<br><span>$10</span></button>
            <span class="heroinInv capitalize">Heroin: 0</span>
            <button class="heroinSell" onclick="sell('heroin')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug methStyles">
            <button class="methBuy" onclick="buy('meth')">BUY<br><span>$10</span></button>
            <span class="methInv capitalize">Meth: 0</span>
            <button class="methSell" onclick="sell('meth')">SELL<br><span>$10</span></button>
        </div>
        <div class="drug mushroomStyles">
            <button class="mushroomBuy" onclick="buy('mushroom')">BUY<br><span>$10</span></button>
            <span class="mushroomInv capitalize">Shrooms: 0</span>
            <button class="mushroomSell" onclick="sell('mushroom')">SELL<br><span>$10</span></button>
        </div>
    </div>
    </div>
    <div class="main">
            <!-- <h2 class="locationTitle">LOCATION</h2>
            <span class="locationName">Name:</span> -->
            <span class="endgameStats"></span>
            <!-- <span class="locationPolice">Police: 30%</span> -->
            <!-- <span class="locationNews">News: Police increase presence as -DRUG- sales spike</span> -->
            <div>
                <h2 class="travelTitle">TRAVEL</h2>
                <div class="travelButtons"></div>
            </div>
        </div>
    </div>`;
    document.querySelector(".timeDisplay").textContent = `Day: 1 Time: 00:00`;
}