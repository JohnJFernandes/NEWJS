function addition_Function()  {           //basic addition function added//
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {           //basic subtraction function added//
    var Subtraction = 5-2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication() {                 //basic multiplication function added//
    var simple_Math = 8 * 8;
    document.getElementById("Math").innerHTML = "8 * 8 =" + simple_Math;
}

function division() {                          //basic division function added//
    var simple_Math = 8 / 2;
    document.getElementById("Math").innerHTML = "8 / 2 =" + simple_Math;
}

function more_Math()  {                     //utilizing basic math functions in one equation//
    var simple_Math =(1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10
    divided in half subtract 5 equals" + simple_Math; 
}

function modulus_Operator() {               //Equation needed if a remainder is needed//
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have,
        remainder = " + simple_Math;"
}

function negation_Operator()  {             //want the opposite of what is portrayed//
    var x = 10;
    document.getElementById("Math").innerHTML = -x;  
}

var X = 4;                      //utilizing increment operator//
X++
document.write(X);

var X = 5.25;                   //utilizing decrement operator//
X--
document.write(X);

window.alert(Math.random());     //Random number Generator//


window.alert(Math.random() * 100); //Random number generator between 1-100//
 
{
    public static void main(String[]args)           //Using a math object method to round answer 
    {
        double x = 79.52
        FileSystem.out.println(Math.round(x));
    }
}
