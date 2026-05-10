 function logger(){
    console.log("Hello and Welcome");
 }
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.margin = "0 auto";
;

 logger();

document.getElementById("welcome").innerHTML = `<h1> Hello, Welcome 
to my one-page project.</h1> 
<h2>What is your name?</h2>`

//Object with properties
let myClass = {
    course: "IMED-2351",
    teacher: "Rodolfo Macias",
    semester: "Spring 2026",

//Method
    excitmentSound: function() {
        return "Yippee!";
    }
};
//Functions pass parameters in & out
function getFullName(first, last) {
    return first + " " + last;
};

function getClassName() {
    return myClass.course + " in " + myClass.semester + " with " + myClass.teacher;
}

function createSentance(name, course) {
    return name + " is in " + course + ".";
};

//Event
document.getElementById("showBtn").addEventListener("click", function() {

    let rawFirst = document.getElementById("fName").value;
    let rawLast = document.getElementById("lName").value;

    let finalName =getFullName(rawFirst, rawLast);

    let finalCar = getClassName();

    let message = createSentance(finalName, finalCar);

    let sound = myClass.excitmentSound();

    document.getElementById("result").innerText = message + " " + sound;
});
let button = document.querySelector("button");
button.style.display = "block"
button.style.margin = "20px auto";

function changeTitleColor(){
    let title = document.getElementById("mainTitle");
    title.style.color = "purple";
    title.style.fontWeight = "bold";
}

//Object 
const academyData = {
    name: "Legend Academy",
//object method
    getWelcome: function(){
        return "Welcome to " + this.name + "!";
    }
};

//array
const gearPacks = {
    dog: ["Golden Bone", "Steel Leash"],
    cat: ["Night Goggles", "Silent Paws"],
    bird: ["Wing Spikes", "Sonic Whistle"],
    lizard: ["Camo Cloak", "Heat Shield"]
};

function startTraining(){
    //Inputs
    let name = document.getElementById('petName').value;
@@ -74,10 +49,15 @@ function startTraining(){
        card.style.borderColor = "#9e9e9e"
        card.style.backgroundColor = "#f5f5f5"
    }

    //String & Number method
    let loudName = name.toUpperCase();
    let formattedPower = power.toFixed(1);
    if (isNaN(power)){
        alert("Please enter a valid power level! :)");
        return;
    };

    let status = power >= 8 ? "Elite" : "Trainee";
    

    //Switch statment
    let ability = "";
@@ -88,26 +68,30 @@ function startTraining(){
        case "lizard": ability = "Growth Manipulation"; break;
        default: ability = "Mystery Power";  
    }

    //Concatenated String Variable
    let heroBio = "The hero " + loudName + " is a " + species + " with " + ability + " at level  " + formattedPower + "!";
    display.innerText = heroBio;
    let heroBio = "The " + status + " " + loudName + " has an ability of " + ability + " at power " + power;
            display.innerText = heroBio;

    //For Loop
    let logHTML = "";
    for (let i = 1; i <= 3; i++){
        logHTML += "<li>Session " + i + ": Completed</li>";
    }
    document.getElementById('trainingLog').innerHTML = logHTML;

    //While Loop
    let currentLevel = 0;
    while (currentLevel < power){
        currentLevel++;
        console.log("Leveling up... Currently at: " + currentLevel);
    let count = 0;
    while (count < power){
        count++;
        console.log("Charging..." + count);
    }

    //Output to page
    document.getElementById('trainingLog').innerHTML = logHTML;
    document.getElementById('mottoDisplay').innerText = academyData.getWelcome();
    
    //array method
    let inventoryArray = gearPacks[species] || ["Basic Cape"];
    inventoryArray.push("Power Gem");
    document.getElementById('itemsList').innerText = inventoryArray.join(", ");

    if (species ==="lizard") {
        document.body.style.backgroundColor = "#a0e8b4";

}
