function my_Dictionary()  {
    var Animal = {
        Species: "Dog",
        Color: "Gray",
        Breed: "American Staffordshire Terrier",
        Age: 4,
        Sound: "Growl"
    };
    delete Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}