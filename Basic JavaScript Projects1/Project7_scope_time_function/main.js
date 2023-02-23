var X = 100;
function Add_numbers_1()  {
        document.write(20 + X +'<br>');
}
function Add_numbers_2()  {
        document.write(X +100);
}
Add_numbers_1();
Add_numbers_2();
function Add_numbers_3()  {
    var K = 1000;
    document.write(20 + Z +'<br>');
}
function Add_numbers_4()  {
    document.write(Z + 1000);
Add_numbers_3();
Add_numbers_4();
}
function get_Date() {
    if (new Date() .getHours() < 16)  {
    document.getElementById("Greeting").innerHTML = "How are you today?";  
    }
}

if (Age < 21)  {
    document.write("You are not allowed to consume Alcohol")
}

function Age_Function()  {
    Age = document.getElementById("Age").value;
    if (Age > 21)  {
        Drink = "Enjoy a frosty Springfield Duff light"
    }
    else  {
        Drink = "Sorry you are not old enough to participate";
    }
    document.getElementById("Mandatory").innerHTML = Drink;
}
function Time_function()  {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)  {
        Reply = "It is afternoon";
    } 
    else  {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day"),innerHTML = Reply;
}
