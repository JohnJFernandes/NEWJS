function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
function Ride_Function()  {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are to short" :"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function()  {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age > 18) ? "You can" :"You are not old enough to";
    document.getElementById("Vote").innerHTML = Can_Vote + " Vote.";
}

function Vehicle(Make, Model, year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()  {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" +Erik.Vehicle_Year;
}

