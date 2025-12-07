// Game logic -->
// When the user clicks on the cookie (cash in this case), the total count of cookies go up by 1
// When the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cookies per second (cps) value goes up.

// We will need functions to contain the game logic
// We will get the shop upgrades data from the API:
/// https://cookie-upgrade-api.vercel.app/api/upgrades
// to create the logic for the shop upgrades:
// OPT1: You can have a function to handle each upgrade.
// OPT2: You could have a re-usable function that works for ALL upgrades

// Tip on local storage
//- Make sure the local storage values are updated after the user buys an upgrade OR (and) when the user clicks on the cookie.

//================================
//Load current progress

// function loadGame() {
//   const loadCCC = localStorage.getItem("CCC");
//   const loadCPS = localStorage.getItem("CPS");
//   const loadFirstUp = localStorage.getItem("FirstUpg");
//   const loadSecUp = localStorage.getItem("SecUpg");
//   const loadThirdUp = localStorage.getItem("ThirdUpg");
//   const loadFourUp = localStorage.getItem("FourUpg");
//   currentCookieCount = loadCCC;
//   cookiesPerSecond = loadCPS;
//   upgrade1Purch = loadFirstUp;
//   upgrade2Purch = loadSecUp;
//   upgrade3Purch = loadThirdUp;
//   upgrade4Purch = loadFourUp;
// }

// loadGame();

//================================

let progress = {
  currentCookieCount: 0,
  cookiesPerSecond: 0,
  up1Avail: true,
  up2Avail: false,
  up3Avail: false,
  up4Avail: false,
  upgrade1Purch: false,
  upgrade2Purch: false,
  upgrade3Purch: false,
  upgrade4Purch: false,
  GameTime: 0,
};

// let ccc = progress.currentCookieCount;
// let cps = progress.cookiesPerSecond;
// let up1Ava = progress.up1Avail;
// let up2Ava = progress.up2Avail;
// let up3Ava = progress.up3Avail;
// let up4Ava = progress.up4Avail;
// let upg1Purch = progress.upgrade1Purch;
// let upg2Purch = progress.upgrade2Purch;
// let upg3Purch = progress.upgrade3Purch;
// let upg4Purch = progress.upgrade4Purch;

let {
  currentCookieCount: ccc,
  cookiesPerSecond: cps,
  up1Avail: up1Ava,
  up2Avail: up2Ava,
  up3Avail: up3Ava,
  up4Avail: up4Ava,
  upgrade1Purch: upg1Purch,
  upgrade2Purch: upg2Purch,
  upgrade3Purch: upg3Purch,
  upgrade4Purch: upg4Purch,
  GameTime: GameTime,
} = progress;

let hasLoaded = false;

// let currentCookieCount = 0;
// let cookiesPerSecond = 0;

// let upgrade1Purch = false;
// let upgrade2Purch = false;
// let upgrade3Purch = false;
// let upgrade4Purch = false;

// let refreshCurrentCookieCnt = (currentOreosNumber.textContent =
//   currentCookieCount);
// let refreshCookiePerSec = (currentOreosIncome.textContent = cookiesPerSecond);

const clickArea = document.getElementById("click-me");
const currentOreosNumber = document.getElementById("current-oreos-number");
const currentOreosIncome = document.getElementById("current-oreos-income");
const shopContainer = document.getElementById("shop-container");
const centerStage = document.getElementById("center-stage");
const newGameSection = document.getElementById("new-game-sect");
const newGameButton = document.createElement("p");
const mainVid = document.createElement("video");
const shopItem1 = document.createElement("section");
const shopItem2 = document.createElement("section");
const shopItem3 = document.createElement("section");
const shopItem4 = document.createElement("section");
const shopItem5 = document.createElement("section");
const shopItem6 = document.createElement("section");
const shopItem7 = document.createElement("section");
const shopItem8 = document.createElement("section");
const shopItem9 = document.createElement("section");
const shopItem10 = document.createElement("section");
const upgrade1 = document.createElement("img");
const upgrade2 = document.createElement("img");
const upgrade3 = document.createElement("img");
const upgrade4 = document.createElement("img");
const upgrade5 = document.createElement("img");
const upgrade6 = document.createElement("img");
const upgrade7 = document.createElement("img");
const upgrade8 = document.createElement("img");
const upgrade9 = document.createElement("img");
const upgrade10 = document.createElement("img");
const upgrade1Text = document.createElement("p");
const upgrade2Text = document.createElement("p");
const upgrade3Text = document.createElement("p");
const upgrade4Text = document.createElement("p");
const upgrade5Text = document.createElement("p");
const upgrade6Text = document.createElement("p");
const upgrade7Text = document.createElement("p");
const upgrade8Text = document.createElement("p");
const upgrade9Text = document.createElement("p");
const upgrade10Text = document.createElement("p");
const upgrade1Cost = document.createElement("p");
const upgrade2Cost = document.createElement("p");
const upgrade3Cost = document.createElement("p");
const upgrade4Cost = document.createElement("p");
const upgrade5Cost = document.createElement("p");
const upgrade6Cost = document.createElement("p");
const upgrade7Cost = document.createElement("p");
const upgrade8Cost = document.createElement("p");
const upgrade9Cost = document.createElement("p");
const upgrade10Cost = document.createElement("p");

// let shopAvails = [
//   {
//     upgName: "upgrade1",
//     isAvailable: true,
//   },
//   {
//     upgName: "upgrade2",
//     isAvailable: false,
//   },
//   {
//     upgName: "upgrade3",
//     isAvailable: false,
//   },
//   {
//     upgName: "upgrade4",
//     isAvailable: false,
//   },
// ];

//================================
//Load current progress

// let loadCCC = localStorage.getItem("CCC");
// let loadCPS = localStorage.getItem("CPS");
// let loadFirstUp = localStorage.getItem("FirstUpg");
// let loadSecUp = localStorage.getItem("SecUpg");
// let loadThirdUp = localStorage.getItem("ThirdUpg");
// let loadFourUp = localStorage.getItem("FourUpg");
// parseInt(loadCCC);
// parseInt(loadCPS);

// function loadGame() {
//   if (loadCCC) {
//     progress.currentCookieCount = loadCCC;
//     // return currentCookieCount;
//   }
//   if (loadCPS) {
//     progress.cookiesPerSecond = loadCPS;
//     // return cookiesPerSecond;
//   }
//   if (loadFirstUp == true) {
//     progress.upgrade1Purch = true;
//     // return upgrade1Purch;
//   }
//   if (loadSecUp == true) {
//     progress.upgrade2Purch = true;
//     // return upgrade2Purch;
//   }
//   if (loadThirdUp == true) {
//     progress.upgrade3Purch = true;
//     // return upgrade3Purch;
//   }
//   if (loadFourUp == true) {
//     progress.upgrade4Purch = true;
//     // return upgrade4Purch;
//   }
// }

function loadGame() {
  if (hasLoaded == false && localStorage.getItem("progress") == null) {
    console.log("Starting a new game.");
    hasLoaded = true;
  } else if (hasLoaded == false) {
    let loadProgress = JSON.parse(localStorage.getItem("progress"));
    progress = loadProgress;
    ccc = progress.currentCookieCount;
    cps = progress.cookiesPerSecond;
    up1Ava = progress.up1Avail;
    up2Ava = progress.up2Avail;
    up3Ava = progress.up3Avail;
    up4Ava = progress.up4Avail;
    upg1Purch = progress.upg1Purch;
    upg2Purch = progress.upg2Purch;
    upg3Purch = progress.upg3Purch;
    upg4Purch = progress.upg4Purch;
    hasLoaded = true;
    if (progress.upg1Purch == true) {
      upgrade1Cost.textContent = "Cost: SOLD!";
    }
    if (progress.upg2Purch == true) {
      upgrade2Cost.textContent = "Cost: SOLD!";
    }
    if (progress.upg3Purch == true) {
      upgrade3Cost.textContent = "Cost: SOLD!";
    }
    if (progress.upg4Purch == true) {
      upgrade4Cost.textContent = "Cost: SOLD!";
    }
    console.log("progress loaded");
  }
}

loadGame();

//================================
// New Game button

newGameSection.appendChild(newGameButton);
newGameButton.textContent = "Start a new game";

newGameButton.addEventListener("click", function () {
  ccc = 0;
  cps = 0;
  upg1Purch = false;
  upg2Purch = false;
  upg3Purch = false;
  upg4Purch = false;
  up1Ava = true;
  up2Ava = false;
  up3Ava = false;
  up4Ava = false;
  localStorage.clear();
  newGameButton.textContent = "Now refresh the page!";
});

//================================

//================================
//Create the shop
//Asynchronously fetch the cookie API!
//Build the shop using the API's data!

async function getCookieData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();
  function createShopItems() {
    shopContainer.appendChild(shopItem1);
    shopContainer.appendChild(shopItem2);
    shopContainer.appendChild(shopItem3);
    shopContainer.appendChild(shopItem4);
    // shopContainer.appendChild(shopItem5);
    // shopContainer.appendChild(shopItem6);
    // shopContainer.appendChild(shopItem7);
    // shopContainer.appendChild(shopItem8);
    // shopContainer.appendChild(shopItem9);
    // shopContainer.appendChild(shopItem10);
    shopItem1.appendChild(upgrade1Cost);
    shopItem2.appendChild(upgrade2Cost);
    shopItem3.appendChild(upgrade3Cost);
    shopItem4.appendChild(upgrade4Cost);
    // shopItem5.appendChild(upgrade5Cost);
    // shopItem6.appendChild(upgrade6Cost);
    // shopItem7.appendChild(upgrade7Cost);
    // shopItem8.appendChild(upgrade8Cost);
    // shopItem9.appendChild(upgrade9Cost);
    // shopItem10.appendChild(upgrade10Cost);
    shopItem1.appendChild(upgrade1);
    shopItem2.appendChild(upgrade2);
    shopItem3.appendChild(upgrade3);
    shopItem4.appendChild(upgrade4);
    // shopItem5.appendChild(upgrade5);
    // shopItem6.appendChild(upgrade6);
    // shopItem7.appendChild(upgrade7);
    // shopItem8.appendChild(upgrade8);
    // shopItem9.appendChild(upgrade9);
    // shopItem10.appendChild(upgrade10);
    shopItem1.appendChild(upgrade1Text);
    shopItem2.appendChild(upgrade2Text);
    shopItem3.appendChild(upgrade3Text);
    shopItem4.appendChild(upgrade4Text);
    // shopItem5.appendChild(upgrade5Text);
    // shopItem6.appendChild(upgrade6Text);
    // shopItem7.appendChild(upgrade7Text);
    // shopItem8.appendChild(upgrade8Text);
    // shopItem9.appendChild(upgrade9Text);
    // shopItem10.appendChild(upgrade10Text);
    shopItem1.id = "first-shop-sect";
    shopItem2.id = "second-shop-sect";
    shopItem3.id = "third-shop-sect";
    shopItem4.id = "fourth-shop-sect";
    // shopItem5.id = "fifth-shop-sect";
    // shopItem6.id = "sixth-shop-sect";
    // shopItem7.id = "seventh-shop-sect";
    // shopItem8.id = "eighth-shop-sect";
    // shopItem9.id = "ninth-shop-sect";
    // shopItem10.id = "tenth-shop-sect";
    upgrade1Cost.textContent = `Cost: ${upgrades[0].cost}`;
    upgrade1Text.textContent = "Auto-Clicker: +1 OPS";
    upgrade1Cost.id = "first-shop-price";
    upgrade2Text.id = "second-shop-desc";
    upgrade3Text.id = "third-shop-desc";
    upgrade4Text.id = "fourth-shop-desc";
    // upgrade5Text.id = "fifth-shop-desc";
    // upgrade6Text.id = "sixth-shop-desc";
    // upgrade7Text.id = "seventh-shop-desc";
    // upgrade8Text.id = "eighth-shop-desc";
    // upgrade9Text.id = "ninth-shop-desc";
    // upgrade10Text.id = "tenth-shop-sect";
    upgrade1.src = "./graphics/cake-2201861_640.png";
    upgrade1.id = "first-up";
    upgrade1.alt = "Autoclicker (adds +1 to Oreo's Per Second)";
    upgrade2.id = "second-up";
    upgrade3.id = "third-up";
    upgrade4.id = "fourth-up";
  }
  createShopItems();

  upgrade1.addEventListener("click", function () {
    if (up1Ava == true && ccc >= upgrades[0].cost && upg1Purch == false) {
      cps = cps + upgrades[0].increase;
      ccc = ccc - upgrades[0].cost;
      currentOreosNumber.textContent = ccc;
      currentOreosIncome.textContent = cps;
      up1Ava = false;
      upg1Purch = true;
      upgrade1Cost.textContent = "Cost: SOLD!";
      // localStorage.setItem("progress", JSON.stringify(progress));
      // localStorage.setItem("CCC", JSON.stringify(progress.currentCookieCount);
      // localStorage.setItem("CPS", progress.cookiesPerSecond);
      // return progress.cookiesPerSecond;
    } else {
      console.log(`You cannot afford ${upgrades[0].name}!`);
    }
  });

  upgrade2.addEventListener("click", function () {
    if (up2Ava == true && ccc >= upgrades[1].cost && upg2Purch == false) {
      cps = cps + upgrades[1].increase;
      ccc = ccc - upgrades[1].cost;
      currentOreosNumber.textContent = ccc;
      currentOreosIncome.textContent = cps;
      up2Ava = false;
      upg2Purch = true;
      upgrade2Cost.textContent = `Cost: SOLD!`;
      // localStorage.setItem("progress", JSON.stringify(progress));
      // return cookiesPerSecond;
    } else {
      console.log(`You cannot afford ${upgrades[1].name}!`);
    }
  });

  upgrade3.addEventListener("click", function () {
    if (up3Ava == true && ccc >= upgrades[2].cost && upg3Purch == false) {
      cps = cps + upgrades[2].increase;
      ccc = ccc - upgrades[2].cost;
      currentOreosNumber.textContent = ccc;
      currentOreosIncome.textContent = cps;
      up3Ava = false;
      upg3Purch = true;
      upgrade3Cost.textContent = `Cost: SOLD!`;
      // localStorage.setItem("progress", JSON.stringify(progress));
      // return cookiesPerSecond;
    } else {
      console.log(`You cannot afford ${upgrades[2].name}!`);
    }
  });

  upgrade4.addEventListener("click", function () {
    if (up4Ava == true && ccc >= upgrades[3].cost && upg4Purch == false) {
      cps = cps + upgrades[3].increase;
      ccc = ccc - upgrades[3].cost;
      currentOreosNumber.textContent = ccc;
      currentOreosIncome.textContent = cps;
      up4Ava = false;
      upg4Purch = true;
      upgrade4Cost.textContent = `Cost: SOLD!`;
      // localStorage.setItem("progress", JSON.stringify(progress));
      // return cookiesPerSecond;
    } else {
      console.log(`You cannot afford ${upgrades[3].name}!`);
    }
  });

  //2nd Shop item appears after 30 seconds past!
  setTimeout(function () {
    up2Ava = true;
    // shopAvails[1].isAvailable = true;
    // localStorage.setItem("progress", JSON.stringify(progress));
    upgrade2.src = "./graphics/loaf-2736953_640.png";
    upgrade2.alt = "Upgrade oven (adds +5 to Oreo's Per Second)";
    upgrade2Text.textContent = "Enhanced Oven: +5 OPS";
    upgrade2Cost.textContent = `Cost: ${upgrades[1].cost}`;
  }, 30000 - GameTime);

  //2nd Shop item appears after 30 seconds past!
  setTimeout(function () {
    up3Ava = true;
    // shopAvails[2].isAvailable = true;
    // localStorage.setItem("progress", JSON.stringify(progress));
    upgrade3.src = "./graphics/cookie-2566665_640.png";
    upgrade3.alt = "Upgrade to Cookie Farm (adds +10 to Oreo's Per Second)";
    upgrade3Text.textContent = "Cookie Farm: +10 OPS";
    upgrade3Cost.textContent = `Cost: ${upgrades[2].cost}`;
  }, 120000 - GameTime);

  setTimeout(function () {
    up4Ava = true;
    // shopAvails[3].isAvailable = true;
    // localStorage.setItem("progress", JSON.stringify(progress));
    upgrade4.src = "./graphics/synthetic-8597464_640_OREO2.png";
    upgrade4.alt = "Workforce optimization (adds +20 to Oreo's Per Second)";
    upgrade4Text.textContent = "Digital Baker: +20 OPS";
    upgrade4Cost.textContent = `Cost: ${upgrades[3].cost}`;
  }, 300000 - GameTime);
}
// TODO: Stringify upgradeData. Or maybe this wouldn't be necessary as not related to save game progress?

getCookieData();

//================================
// Center stage

// function createDefaultVid() {
//   centerStage.appendChild(mainVid);
//   mainVid.src = "./graphics/video/61955-501113823_tiny.mp4";
//   mainVid.alt = "Person rolling dough";
//   mainVid.id = "main-video";
//   mainVid.loop = true;
//   mainVid.autoplay = true;
// }

// createDefaultVid();

// if (progress.currentCookieCount >= 250) {
//   mainVid.src = "./graphics/video/8931-215796370_tiny.mp4";
//   mainVid.alt = "Experienced person rolling dough";
// } else if (progress.currentCookieCount >= 750) {
//   mainVid.src = "./graphics/video/53861-475905146_tiny.mp4";
//   mainVid.alt = "Business dough rolling";
// } else if (progress.currentCookieCount >= 3000) {
//   mainVid.src = "./graphics/video/91282-629546524_tiny.mp4";
// } else {
//   mainVid.src = "./graphics/video/61955-501113823_tiny.mp4";
//   mainVid.alt = "Person rolling dough";
// }

//================================

// const oreoConveyar = document.getElementById("oreo-conveyar");

// if (progress.cookiesPerSecond > 0) {
//   oreoConveyar.src = "./graphics/OreoConveyar2.gif";
// } else if (progress.cookiesPerSecond > 1) {
//   oreoConveyar.src = "./graphics/OreoConveyar3.gif";
// } else if (progress.cookiesPerSecond > 6) {
//   oreoConveyar.src = "./graphics/OreoConveyar4.gif";
// } else if (progress.cookiesPerSecond > 16) {
//   oreoConveyar.src = "./graphics/OreoConveyar5.gif";
// }

//================================

clickArea.addEventListener("click", function () {
  ccc++;
  console.log(`You have ${ccc}`);
  currentOreosNumber.textContent = ccc;
  // localStorage.setItem("progress", JSON.stringify(progress));
});

//================================Can you afford item

//================================MANNYS ADVICE \/

// Data Storage will use variables,

// let stats = {
//  currentCookieCount: 0,
//  cookiesPerSecond = 0,
// };

// If there is data already in local storage, update stats with this data, so the user picks it up where they left off

//================================
// Shop upgrades

// Fetch the upgrades from the API

// create multiple DOM elements to contain the upgrades (loop)

//TODO: Create DOM elements to make the shop upgrades appear
// - Create element
// - assign the value to its propery (texContent)
// - append it to the DOM

// After you complete this task, you should see the upgrades in your shop-container!

//TODO: create function(s) to handle the purchase action
// The user needs a button to buy the item
// When the user clicks the button -->
// subtract the currentCookieCount using the cost of the upgrade value
// increase the cookiesPerSecond when upgrade is obtained
// save new values in local storage

//================================

// Cookies per second interval

if (hasLoaded == true) {
  setInterval(function () {
    ccc += cps; //currentCookieCount = currentCookieCount + cookiesPerSecond
    currentOreosNumber.textContent = ccc;
    currentOreosIncome.textContent = cps;
    GameTime++;
    progress.currentCookieCount = ccc;
    progress.cookiesPerSecond = cps;
    progress.up1Avail = up1Ava;
    progress.up2Avail = up2Ava;
    progress.up3Avail = up3Ava;
    progress.up4Avail = up4Ava;
    progress.upg1Purch = upg1Purch;
    progress.upg2Purch = upg2Purch;
    progress.upg3Purch = upg3Purch;
    progress.upg4Purch = upg4Purch;
    progress.GameTime = GameTime;
    localStorage.setItem("progress", JSON.stringify(progress));
    // console.log(JSON.stringify(progress));
    // localStorage.setItem("CPS", progress.cookiesPerSecond);
    //update the DOM to reflect the changes in the values.
    // save the values in local storage
  }, 1000);
}
