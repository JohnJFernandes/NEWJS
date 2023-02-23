function full_Sentence()  {
    var part_1 ="1 cup flour";
    var part_2 ="1 cup ground oats";
    var part_3 ="1 cup brown sugar";
    var part_4 ="1 stick of butter";
    var part_5 ="3 cups of favorite fruit"
    document.getElementById("Concatenate").innerHTML = whole_
}
function slice_Method()  {
    var Sentence = "All day everyday HUSTLE till I get paid";
    var Section = Sentence.slice(16,23);
    document.getElementById("Slice").innerHTML = Section;
}
function myFunction() {
    let text = document.getElementById("icecream").innerHTML;
    document.getElementById("icecream").innerHTML =
    text.toUpperCase();
  }
let text = "Blueberries, cherries and apples are the best"
let position = text.search("apples");
document.getElementById("fruit").innerHTML = position;
function string_Method()  {
    var X =211;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method()  {
    var Z =2111.3014546546573541354;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}
let text1 = "Berry wonderful";
let result = text.valueOf();
document.getElementById("berry").innerHTML = result;
let num = 5.541456;
let n = num.toFixed();
document.getElementById("yum").innerHTML = n;