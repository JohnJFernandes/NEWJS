document.write("Mardi Gras")

document.write("20" + 23)

function my_Function()  {
    document.getElementById("test").innerHTML = 0/0;
}
function my_Function2()  {
    document.getElementById("test").innerHTML = isNaN('This is a string');
}
function my_Function3()  {
    document.getElementById("test").innerHTML = isNaN('008');
}
document.write(5E510);
document.write(-3E412);
document.write(10<9);
document.write(10>9);
console.log(10>12);
document.write(10 == 10);
document.write(10 == 12);

X = 80;
Y = 80;
document.write(X === Y);

Z = 79;
W = "spam";
document.write(Z === W);

A = 60;
B = "sixty";
document.write(A === B);

X = 80;
Z = 79;
document.write(X === Z);

document.write(5>2 && 10>4);

document.write(5<2 && 10<9);

document.write(5>8 || 8>9);

document.write(5>4 || 5<6);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function1() {
    document.getElementById("Note").innerHTML = !(5>10);
}

