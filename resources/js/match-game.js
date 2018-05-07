var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
  var $random_values = MatchGame.generateCardValues();
  MatchGame.renderCards($random_values,$('#game'));
});

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
  var $colors = ["hsl(25,85%,65%)","hsl(55,85%,65%)","hsl(90,85%,65%)","hsl(160,85%,65%)","hsl(220,85%,65%)","hsl(265,85%,65%)","hsl(310,85%,65%)","hsl(360,85%,65%)"];
  $game.empty();
  $game.data("flipped_cards",[]);
  for(var i=0;i<cardValues.length;i++){
    var $card = $('<div class="card col col-xs-3"><span></span></div>');
    $card.data("value",cardValues[i]);
    $card.data("color",$colors[cardValues[i]-1]);
    $card.data("flipped",false);
    $game.append($card);
  }
  $('.card').click(function(){
    MatchGame.flipCard($(this),$game);
  });

};


/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

  if($.inArray($card,$game.data("flipped_cards"))!==-1){
    return;
  }else{
    $card.css({"background-color": $card.data("color")});
    $card.text($card.data("value"));
    $card.data("flipped",true);
    $game.data("flipped_cards").push($card);
  }

  if($game.data("flipped_cards").length==2) {
    var $card1 = $game.data("flipped_cards")[0];
    var $card2 = $game.data("flipped_cards")[1];
    if($card1.data("value")===$card2.data("value")){
      //FOUND!
      $card1.css({"background-color":"rgb(153,153,153)","color": "rgb(204,204,204)"});
      $card2.css({"background-color":"rgb(153,153,153)","color": "rgb(204,204,204)"});
      $card1.unbind("click");
      $card2.unbind("click");
    }else{
      setTimeout(function(){
      $card1.css({"background-color": "rgb(32,64,86)"});
      $card1.text("");
      $card1.data("flipped",false);
      $card2.css({"background-color": "rgb(32,64,86)"});
      $card2.text("");
      $card2.data("flipped",false);
      },350);
    }
    $game.data("flipped_cards",[]);
  }
};
