var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

 // Range for generating random values
 var values_range = 8;

MatchGame.generateCardValues = function () {
  var values=[];
  for(var i=0;i<8;i++){
    values.push(i+1);
    values.push(i+1);
  }
  values.sort(function(a, b){return 0.5 - Math.random()});
  return values;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
