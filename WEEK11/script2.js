function aName(){

var adject = new Array();
adject = ["happy", "sad", "dead", "alive", "drunk"];
var num1 = Math.floor(Math.random()*5);

var nouns = new Array();
nouns = ["monkey", "penguin", "fish", "bear", "human"];
var num2 = Math.floor(Math.random()*5);

document.getElementById("output").innerHTML+=("<br />What a" + " " + adject[num1]+ " "+ nouns[num2]);

}
