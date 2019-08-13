let gameMinute = 0;
let gameHour = 0;
let gameDay = 1;
let timeMinute = 0;
let timeHour = 0;
let moneyOnHand = 100;
let weedInv = 0;
let cocaineInv = 0;
let mdmaInv = 0;

// Start time rolling.  One second = one minute in game.  One game day is 24 minutes.
// endDay = setInterval(increaseTime, 1000); // DEFAULT: 24 minute days.
endDay = setInterval(increaseTime, 104); // OPTIONAL: 2.5 minute days.
// endDay = setInterval(increaseTime, 208); // OPTIONAL: 5 minute days.
// endDay = setInterval(increaseTime, 416); // OPTIONAL: 10 minute days.


document.querySelector(".timeDisplay").textContent = `Day: 1 Time: 00:00`;

let locations = [{location : "Sacramento"}, {location : "San Francisco"}, {location : "San Jose"}, {location : "Seattle"},{location : "Portland"}, {location : "Los Angeles"}, {location : "San Diego"}];

function setDrugValues() {
    i = 0;
    locations.forEach(element => {
        // Random Drug Value assigned at beginning of game.
        // Math.floor(Math.random() * (MAX - min) + min)
        element.id = i;
        i++;
        element.name = element.location.replace(/ /g, '');
        element.weed = Math.floor(Math.random() * (15 - 5) + 5);
        element.cocaine = Math.floor(Math.random() * (100 - 60) + 60);
        element.mdma = Math.floor(Math.random() * (130 - 80) + 80);
    });
}
setDrugValues();

let currentLocationID = locations[Math.floor(Math.random() * (6 - 0) + 0)].id;
function setStartingLocation() {
    // Set starting city for player.
    updateLocationData();
}
setStartingLocation();

function updateLocationData() {
    document.querySelector(".locationName").innerHTML = `<strong>Name: </strong>${locations[currentLocationID].location}`;
    document.querySelector(".buyWeed").innerHTML = `BUY<br><span>$${locations[currentLocationID].weed}</span>`;
    document.querySelector(".sellWeed").innerHTML = `SELL<br><span>$${locations[currentLocationID].weed}</span>`;
    document.querySelector(".buyCocaine").innerHTML = `BUY<br><span>$${locations[currentLocationID].cocaine}</span>`;
    document.querySelector(".sellCocaine").innerHTML = `SELL<br><span>$${locations[currentLocationID].cocaine}</span>`;
    document.querySelector(".buyMdma").innerHTML = `BUY<br><span>$${locations[currentLocationID].mdma}</span>`;
    document.querySelector(".sellMdma").innerHTML = `SELL<br><span>$${locations[currentLocationID].mdma}</span>`;
}

// Create initial travel menu.
function createTravelMenu() {
    buttons = "";
    locations.forEach(element => {
        bug = element.location.replace(/ /g, '');
        if (element.location != locations[currentLocationID].location) {
            buttons += "<button class=\"travelButton tt-" + bug + "\">" + element.location + "</button><br>";
        } else {
            buttons += "<button class=\"travelButton tt-" + bug + "\" disabled = \"true\">" + element.location + "</button><br>";
        }
    });

    document.querySelector(".travelButtons").innerHTML = buttons;
    locations.forEach(element => {
        document.querySelector(`.tt-${element.name}`).addEventListener("click", function() {
            travelTo(element.name);
        });
    });
}
createTravelMenu();

function travelTo(arg1) {
    switch (arg1) {
        case "Sacramento":
            currentLocationID = 0;
            updateLocationData();
            createTravelMenu();
            break;
        case "SanFrancisco":
            currentLocationID = 1;
            updateLocationData();
            createTravelMenu();
            break;
        case "SanJose":
            currentLocationID = 2;
            updateLocationData();
            createTravelMenu();
            break;
        case "Seattle":
            currentLocationID = 3;
            updateLocationData();
            createTravelMenu();
            break;
        case "Portland":
            currentLocationID = 4;
            updateLocationData();
            createTravelMenu();
            break;
        case "LosAngeles":
            currentLocationID = 5;
            updateLocationData();
            createTravelMenu();
            break;
        case "SanDiego":
            currentLocationID = 6;
            updateLocationData();
            createTravelMenu();
            break;
    }
    // gameDay++;
}

// Add event listener to buy buttons.
document.querySelector(".buyWeed").addEventListener("click", function() {
    buyDrug("buy", "weed");
});
document.querySelector(".buyCocaine").addEventListener("click", function() {
    buyDrug("buy", "cocaine");
});
document.querySelector(".buyMdma").addEventListener("click", function() {
    buyDrug("buy", "mdma");
});

// Add event listener to sell buttons.
document.querySelector(".sellWeed").addEventListener("click", function() {
    buyDrug("sell", "weed");
});
document.querySelector(".sellCocaine").addEventListener("click", function() {
    buyDrug("sell", "cocaine");
});
document.querySelector(".sellMdma").addEventListener("click", function() {
    buyDrug("sell", "mdma");
});

function buyDrug(arg1, arg2) {
    if (arg1 === "buy") {
        switch (arg2) {
            case "weed":
                weedPrice = locations[currentLocationID].weed;
                if (moneyOnHand >= weedPrice) {
                    moneyOnHand -= weedPrice;
                    weedInv++
                    // timeSkip();
                    document.querySelector(".weedInv").textContent = `Weed: ${weedInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You can't afford any more Weed!")
                }
                break;
            case "cocaine":
                cocainePrice = locations[currentLocationID].cocaine;
                if (moneyOnHand >= cocainePrice) {
                    moneyOnHand -= cocainePrice;
                    cocaineInv++
                    // timeSkip();
                    document.querySelector(".cocaineInv").textContent = `Cocaine: ${cocaineInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You can't afford any more Cocaine!");
                }
                break;
            case "mdma":
                mdmaPrice = locations[currentLocationID].mdma;
                if (moneyOnHand >= mdmaPrice) {
                    moneyOnHand -= mdmaPrice;
                    mdmaInv++
                    // timeSkip();
                    document.querySelector(".mdmaInv").textContent = `MDMA: ${mdmaInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You can't afford any more MDMA!");
                }
                break;
        }
    } else if (arg1 === "sell") {
        switch (arg2) {
            case "weed":
                weedPrice = locations[currentLocationID].weed;
                if (weedInv >= 1) {
                    moneyOnHand += weedPrice;
                    weedInv--
                    // timeSkip();
                    document.querySelector(".weedInv").textContent = `Weed: ${weedInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You don't have any more weed to sell!")
                }
                break;
            case "cocaine":
                cocainePrice = locations[currentLocationID].cocaine;
                if (cocaineInv >= 1) {
                    moneyOnHand += cocainePrice;
                    cocaineInv--
                    // timeSkip();
                    document.querySelector(".cocaineInv").textContent = `Cocaine: ${cocaineInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You don't have any more cocaine to sell!")
                }
                break;
            case "mdma":
                mdmaPrice = locations[currentLocationID].mdma;
                if (mdmaInv >= 1) {
                    moneyOnHand += mdmaPrice;
                    mdmaInv--
                    // timeSkip();
                    document.querySelector(".mdmaInv").textContent = `MDMA: ${mdmaInv}`
                    document.querySelector(".moneyOnHand").textContent = `Money: $${moneyOnHand}`
                } else {
                    console.log("You don't have any more MDMA to sell!")
                }
                break;
        }
    } else {
        console.log("You broke something.  Should probably fix that.");
    }
}

function timeSkip() {
    // Math.floor(Math.random() * (MAX - min) + min)
    timeJump = Math.floor(Math.random() * (15 - 1) + 1);
    gameMinute += timeJump;
}

function increaseTime() {
    gameMinute++;  // Add a minute

    if (gameMinute >= 60) { // Increase gameHour when minutes hit 60.
        gameMinute = gameMinute - 60;
        gameHour++;
        weedInv++;
        document.querySelector(".weedInv").textContent = `Weed: ${weedInv}`
    }
    timeMinute = convertTime(timeMinute, gameMinute); // Get formatted time.

    if (gameHour >= 24) { // Increase gameDay when hours hit 24.
        gameHour = 0;
        gameDay++;
        doDailyMath();
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

// Do all the math at the end of each day
function doDailyMath() {
    locations.forEach(element => {
        element.weed = Math.floor(Math.random() * (15 - 5) + 5);
        element.cocaine = Math.floor(Math.random() * (100 - 60) + 60);
        element.mdma = Math.floor(Math.random() * (130 - 80) + 80);
        updateLocationData();
    });
}

// gameOver() will change the right panel to show thier end game stats.
function gameOver() {
    // Contents go here.
    clearInterval(endDay);
    document.querySelector(".container").innerHTML = "<div class='gameOver'><h1>GAME OVER</h1><div class='endgameStats'></div><button class='restartGame'>RESTART</button></div>";
    document.querySelector(".restartGame").addEventListener("click", function() {
        location.reload();
    });
    
    document.querySelector(".endgameStats").innerHTML = `<span>You finished the game with <strong>$${moneyOnHand}</strong></span><br>`;
}