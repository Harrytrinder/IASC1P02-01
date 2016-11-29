
var numArray = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen',
                  'Nineteen', 'Twenty', 'TwentyOne', 'TwentyTwo', 'TwentyThree', 'TwnetyFour', 'TwentyFive'];

function Color(){
  document.body.style.backgroundColor = "green";
}

function add() {
  var number1 = ""
  var number2 = ""

    var num1 = document.getElementById("num1").value;
    if (num1 === "five"){ var number1 = 5}
      else if (num1 === "four") {var number1 = 4}
      else if (num1 === "three") {var number1 = 3}
      else if (num1 === "two") {var number1 = 2}
      else if (num1 === "one") {var number1 = 1}
    var num2 = document.getElementById("num2").value;
    if (num2 === "five"){ var number1 = 5}
      else if (num2 === "four") {var number2 = 4}
      else if (num2 === "three") {var number2 = 3}
      else if (num2 === "two") {var number2 = 2}
      else if (num2 === "one") {var number2 = 1}
    var total = +number1 + number2;

    document.getElementById("output").innerHTML="Output:" + num1 + " Plus " + num2 + " Equals " + numArray[total];
    document.getElementById("output2").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + total;
    var rightNumber =  Number(num1+num2);


}

function minus() {
  var number1 = ""
  var number2 = ""

    var num1 = document.getElementById("num1").value;
    if (num1 === "five"){ var number1 = 5}
      else if (num1 === "four") {var number1 = 4}
      else if (num1 === "three") {var number1 = 3}
      else if (num1 === "two") {var number1 = 2}
      else if (num1 === "one") {var number1 = 1}
    var num2 = document.getElementById("num2").value;
    if (num2 === "five"){ var number1 = 5}
      else if (num2 === "four") {var number2 = 4}
      else if (num2 === "three") {var number2 = 3}
      else if (num2 === "two") {var number2 = 2}
      else if (num2 === "one") {var number2 = 1}
    var total = Math.floor(+number1 - number2);

    document.getElementById("output").innerHTML="Output:" + num1 + " Minus " + num2 + " Equals " + numArray[total];
    document.getElementById("output2").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + total;
    var rightNumber =  Number(num1-num2);


}

function times() {
  var number1 = ""
  var number2 = ""

    var num1 = document.getElementById("num1").value;
    if (num1 === "five"){ var number1 = 5}
      else if (num1 === "four") {var number1 = 4}
      else if (num1 === "three") {var number1 = 3}
      else if (num1 === "two") {var number1 = 2}
      else if (num1 === "one") {var number1 = 1}
    var num2 = document.getElementById("num2").value;
    if (num2 === "five"){ var number1 = 5}
      else if (num2 === "four") {var number2 = 4}
      else if (num2 === "three") {var number2 = 3}
      else if (num2 === "two") {var number2 = 2}
      else if (num2 === "one") {var number2 = 1}
    var total = Math.floor(+number1 / number2);

    document.getElementById("output").innerHTML="Output:" + num1 + " Times " + num2 + " Equals " + numArray[total];
    document.getElementById("output2").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + total;
    var rightNumber =  Number(num1/num2);

}

function devide() {

  var number1 = ""
  var number2 = ""

    var num1 = document.getElementById("num1").value;
    if (num1 === "five"){ var number1 = 5}
      else if (num1 === "four") {var number1 = 4}
      else if (num1 === "three") {var number1 = 3}
      else if (num1 === "two") {var number1 = 2}
      else if (num1 === "one") {var number1 = 1}
    var num2 = document.getElementById("num2").value;
    if (num2 === "five"){ var number1 = 5}
      else if (num2 === "four") {var number2 = 4}
      else if (num2 === "three") {var number2 = 3}
      else if (num2 === "two") {var number2 = 2}
      else if (num2 === "one") {var number2 = 1}
    var total = +number1 * number2;

    document.getElementById("output").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + numArray[total];
      document.getElementById("output2").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + total;
    var rightNumber =  Number(num1*num2);

}

function Percent() {
  var number1 = ""
  var number2 = ""

    var num1 = document.getElementById("num1").value;
    if (num1 === "five"){ var number1 = 5}
      else if (num1 === "four") {var number1 = 4}
      else if (num1 === "three") {var number1 = 3}
      else if (num1 === "two") {var number1 = 2}
      else if (num1 === "one") {var number1 = 1}
    var num2 = document.getElementById("num2").value;
    if (num2 === "five"){ var number1 = 5}
      else if (num2 === "four") {var number2 = 4}
      else if (num2 === "three") {var number2 = 3}
      else if (num2 === "two") {var number2 = 2}
      else if (num2 === "one") {var number2 = 1}
    var total = Math.floor(+number1 / +number2 *100);

    document.getElementById("output").innerHTML="Output:" + num1 + " Percentage " + num2 + " Equals " + numArray[total];
    document.getElementById("output2").innerHTML="Output:" + num1 + " Devide " + num2 + " Equals " + total;
    var rightNumber =  Number(num1/num2)*100;
}
