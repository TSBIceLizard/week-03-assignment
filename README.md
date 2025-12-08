# week-03-assignment

Idle game akin to the 'Cookie clicker'

## Reflection

I managed to create the majority of the game logic and layout by friday but ended up getting stuck on saving and loading from friday all the way until sunday at 5pm. I attempted a huge veriety of different methods to get saving working with sending the data to local storage with stringify then calling it back with 'parse' during the load function. I attempted to read and write to the 'progress' object variable with progress.currentCookieCount (etc) but this didn't work at all until I created a middleman(?) variable for each of the object properties (I would have expected JS should/would work like that, but for whatever reason it doesn't). I also considered that I might run into the issue of the game saving over a load if the saving happens before the game is given a chance to load, therefore I made a loadGame() function which 'saving' is rigged to wait for.

Upgrades fade in (unlock) after a certain amount of time has passed, and when the player has purchased the upgrade the cost updates it's text to "sold" for user feedback.

## Things that I didn't have enough time or energy to get working

I wanted to use If statements to choose which Oreo income .gif to use out of 5, so if the CPS (oreos in this case) is > 0, then it will switch the .gif .src to be a faster animating version of the same .gif. For whatever reason that I couldn't figure out > this didn't work.

I wanted to display a video in the center stage of the page which changes based on how many oroes a player has in their oreo bank, but I had difficulty getting this working. My guess is it was the order of the if { } else if { }, but i did not have enough time or energy to really fix this once I finally got saving working.

I didn't have enough time for this to make fully sure that the website is responsive on different screens, I barely had time to finish the game logic at the state it was in.

## Last notes

Simply because the local storage wasn't behaving as expected, this assignment was incredibly arduous and I feel as though I need somewhat of a break after the 4~ days of flatout work it took me to get this working. I took occasional breaks now and then but I have to see the code infront of me in order to evaluate and troubleshoot, so breaks only helped to regain my energy and enthusiasm.

## Thanks for reading, but sorry some of these notes weren't so cheerful
