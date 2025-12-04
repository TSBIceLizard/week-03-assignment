console.log("Hello World");

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

//================================MANNYS ADVICE ^

// Data Storage will use variables,

let currentCookieCount = 0;
let cookiesPerSecond = 0;

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
  //update the DOM to reflect the changes in the values.
  // save the values in local storage
}, 1000);
