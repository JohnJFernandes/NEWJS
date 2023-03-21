function Car_Function()  {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    switch(Cars)  {
        case "911 RUF":
            Car_Output = "911 RUF" + Car_String;
            break;
        case "Rolls Royce Wraith":
            Car_Output = "Rolls Royce Wraith" + Car_String;
            break;
        case "Lamborghini Cian":
            Car_Output = "Lamborghini Cian" + Car_String;
            break;
        case "Hennessey Viper":
            Car_Output = "Hennessey Viper" + Car_String;
            break;
        case "2023 GTR":
            Car_Output = "2023 GTR" + Car_String;
            break;
        case "ZR1 C8":
            Car_Output = "ZR1 C8" + Car_String;
            break;
        default:
        Car_Output = "Please enter exactly as written on the above list.";      
    }
    document.getElementById("Output").innerHTML = Car_Output;
} 
function Best_Investment()  {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The choice is yours";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
ctx.font = "30px Arial";
ctx.strokeText("It's only transportation", 10, 50);

var c = document.getElementById("myCanva");
var ctx = c.getContext('2d');

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "Blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
