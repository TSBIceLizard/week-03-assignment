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

let currentCookieCount = 0;
let cookiesPerSecond = 0;

// let refreshCurrentCookieCnt = (currentOreosNumber.textContent =
//   currentCookieCount);
// let refreshCookiePerSec = (currentOreosIncome.textContent = cookiesPerSecond);

const clickArea = document.getElementById("click-me");
const currentOreosNumber = document.getElementById("current-oreos-number");
const currentOreosIncome = document.getElementById("current-oreos-income");
const shopContainer = document.getElementById("shop-container");
const centerStage = document.getElementById("center-stage");
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

let upgrade1Avail = true;
let upgrade2Avail = false;
let upgrade3Avail = false;
let upgrade4Avail = false;
let upgrade5Avail = false;
let upgrade6Avail = false;
let upgrade7Avail = false;
let upgrade8Avail = false;
let upgrade9Avail = false;
let upgrade10Avail = false;

let upgrade1Purch = false;
let upgrade2Purch = false;
let upgrade3Purch = false;
let upgrade4Purch = false;
let upgrade5Purch = false;
let upgrade6Purch = false;
let upgrade7Purch = false;
let upgrade8Purch = false;
let upgrade9Purch = false;
let upgrade10Purch = false;

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
    shopContainer.appendChild(shopItem5);
    shopContainer.appendChild(shopItem6);
    shopContainer.appendChild(shopItem7);
    shopContainer.appendChild(shopItem8);
    shopContainer.appendChild(shopItem9);
    shopContainer.appendChild(shopItem10);
    shopItem1.appendChild(upgrade1Cost);
    shopItem2.appendChild(upgrade2Cost);
    shopItem3.appendChild(upgrade3Cost);
    shopItem4.appendChild(upgrade4Cost);
    shopItem5.appendChild(upgrade5Cost);
    shopItem6.appendChild(upgrade6Cost);
    shopItem7.appendChild(upgrade7Cost);
    shopItem8.appendChild(upgrade8Cost);
    shopItem9.appendChild(upgrade9Cost);
    shopItem10.appendChild(upgrade10Cost);
    shopItem1.appendChild(upgrade1);
    shopItem2.appendChild(upgrade2);
    shopItem3.appendChild(upgrade3);
    shopItem4.appendChild(upgrade4);
    shopItem5.appendChild(upgrade5);
    shopItem6.appendChild(upgrade6);
    shopItem7.appendChild(upgrade7);
    shopItem8.appendChild(upgrade8);
    shopItem9.appendChild(upgrade9);
    shopItem10.appendChild(upgrade10);
    shopItem1.appendChild(upgrade1Text);
    shopItem2.appendChild(upgrade2Text);
    shopItem3.appendChild(upgrade3Text);
    shopItem4.appendChild(upgrade4Text);
    shopItem5.appendChild(upgrade5Text);
    shopItem6.appendChild(upgrade6Text);
    shopItem7.appendChild(upgrade7Text);
    shopItem8.appendChild(upgrade8Text);
    shopItem9.appendChild(upgrade9Text);
    shopItem10.appendChild(upgrade10Text);
    shopItem1.id = "first-shop-sect";
    shopItem2.id = "second-shop-sect";
    shopItem3.id = "third-shop-sect";
    shopItem4.id = "fourth-shop-sect";
    shopItem5.id = "fifth-shop-sect";
    shopItem6.id = "sixth-shop-sect";
    shopItem7.id = "seventh-shop-sect";
    shopItem8.id = "eighth-shop-sect";
    shopItem9.id = "ninth-shop-sect";
    shopItem10.id = "tenth-shop-sect";
    upgrade1Cost.textContent = `Cost: ${upgrades[0].cost}`;
    upgrade1Text.textContent = "Auto-Clicker: +1 OPS";
    upgrade1Cost.id = "first-shop-price";
    upgrade2Text.id = "second-shop-desc";
    upgrade3Text.id = "third-shop-desc";
    upgrade4Text.id = "fourth-shop-desc";
    upgrade5Text.id = "fifth-shop-desc";
    upgrade6Text.id = "sixth-shop-desc";
    upgrade7Text.id = "seventh-shop-desc";
    upgrade8Text.id = "eighth-shop-desc";
    upgrade9Text.id = "ninth-shop-desc";
    upgrade10Text.id = "tenth-shop-sect";
    upgrade1.src = "./graphics/cake-2201861_640.png";
    upgrade1.id = "first-up";
    upgrade1.alt = "Autoclicker (adds +1 to Oreo's Per Second)";
    upgrade2.id = "second-up";
    upgrade3.id = "third-up";
    upgrade4.id = "fourth-up";
  }
  createShopItems();

  upgrade1.addEventListener("click", function () {
    if (upgrade1Avail == true && currentCookieCount >= upgrades[0].cost) {
      cookiesPerSecond = cookiesPerSecond + upgrades[0].increase;
      currentCookieCount = currentCookieCount - upgrades[0].cost;
      currentOreosNumber.textContent = currentCookieCount;
      currentOreosIncome.textContent = cookiesPerSecond;
      return cookiesPerSecond;
    } else {
      console.log(`You cannot afford ${upgrades[0].name}!`);
    }
  });

  upgrade2.addEventListener("click", function () {
    if (upgrade2Avail == true && currentCookieCount >= upgrades[1].cost) {
      cookiesPerSecond = cookiesPerSecond + upgrades[1].increase;
      currentCookieCount = currentCookieCount - upgrades[1].cost;
      currentOreosNumber.textContent = currentCookieCount;
      currentOreosIncome.textContent = cookiesPerSecond;
      return cookiesPerSecond;
    }
    console.log(`You cannot afford ${upgrades[1].name}!`);
  });

  upgrade3.addEventListener("click", function () {
    if (upgrade3Avail == true && currentCookieCount >= upgrades[2].cost) {
      cookiesPerSecond = cookiesPerSecond + upgrades[2].increase;
      currentCookieCount = currentCookieCount - upgrades[2].cost;
      currentOreosNumber.textContent = currentCookieCount;
      currentOreosIncome.textContent = cookiesPerSecond;
      return cookiesPerSecond;
    }
    console.log(`You cannot afford ${upgrades[2].name}!`);
  });

  upgrade4.addEventListener("click", function () {
    if (upgrade4Avail == true && currentCookieCount >= upgrades[3].cost) {
      cookiesPerSecond = cookiesPerSecond + upgrades[3].increase;
      currentCookieCount = currentCookieCount - upgrades[3].cost;
      currentOreosNumber.textContent = currentCookieCount;
      currentOreosIncome.textContent = cookiesPerSecond;
      return cookiesPerSecond;
    }
    console.log(`You cannot afford ${upgrades[3].name}!`);
  });

  //2nd Shop item appears after 30 seconds past!
  setTimeout(function () {
    upgrade2Avail = true;
    upgrade2.src = "./graphics/loaf-2736953_640.png";
    upgrade2.alt = "Upgrade oven (adds +5 to Oreo's Per Second)";
    upgrade2Text.textContent = "Enhanced Oven: +5 OPS";
    upgrade2Cost.textContent = `Cost: ${upgrades[1].cost}`;
  }, 30000);

  //2nd Shop item appears after 30 seconds past!
  setTimeout(function () {
    upgrade3Avail = true;
    upgrade3.src = "./graphics/cookie-2566665_640.png";
    upgrade3.alt = "Upgrade to Cookie Farm (adds +10 to Oreo's Per Second)";
    upgrade3Text.textContent = "Cookie Farm: +10 OPS";
    upgrade3Cost.textContent = `Cost: ${upgrades[2].cost}`;
  }, 120000);

  setTimeout(function () {
    upgrade4Avail = true;
    upgrade4.src = "./graphics/synthetic-8597464_640_OREO2.png";
    upgrade4.alt = "Workforce optimization (adds +20 to Oreo's Per Second)";
    upgrade4Text.textContent = "Digital Baker: +20 OPS";
    upgrade4Cost.textContent = `Cost: ${upgrades[3].cost}`;
  }, 300000);
}
// TODO: Stringify upgradeData. Or maybe this wouldn't be necessary as not related to save game progress?

getCookieData();

//================================
// Center stage

function createDefaultVid() {
  centerStage.appendChild(mainVid);
  mainVid.src = "./graphics/video/61955-501113823_tiny.mp4";
  mainVid.alt = "Person rolling dough";
  mainVid.id = "main-video";
  mainVid.loop = true;
  mainVid.autoplay = true;
}

createDefaultVid();

if (currentCookieCount < 750 && currentCookieCount >= 250) {
  mainVid.src = "./graphics/video/8931-215796370_tiny.mp4";
  mainVid.alt = "Experienced person rolling dough";
} else if (currentCookieCount >= 750 && currentCookieCount < 3000) {
  mainVid.src = "./graphics/video/53861-475905146_tiny.mp4";
  mainVid.alt = "Business dough rolling";
} else if (currentCookieCount >= 3000) {
  mainVid.src = "./graphics/video/91282-629546524_tiny.mp4";
} else {
  mainVid.src = "./graphics/video/61955-501113823_tiny.mp4";
  mainVid.alt = "Person rolling dough";
}

//================================

clickArea.addEventListener("click", function () {
  currentCookieCount++;
  console.log(`You have ${currentCookieCount}`);
  currentOreosNumber.textContent = currentCookieCount;
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

// The interval

setInterval(function () {
  currentCookieCount += cookiesPerSecond; //currentCookieCount = currentCookieCount + cookiesPerSecond
  currentOreosNumber.textContent = currentCookieCount;
  //update the DOM to reflect the changes in the values.
  // save the values in local storage
}, 1000);
