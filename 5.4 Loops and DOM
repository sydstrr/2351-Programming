document.getElementById("result").innerText = message + " " + sound;

function changeTitleColor(){
    let title = document.getElementById("mainTitle");
    title.style.color = "purple";
    title.style.fontWeight = "bold";
}

function generateHero(){
function startTraining(){
    
    //Inputs
    let name = document.getElementById('petName').value;
    let species = document.getElementById('animal').value.toLowerCase();
    let power = parseFloat(document.getElementById('petPower').value);
    let display= document.getElementById('bioOutput');
    let card = document.getElementById('heroCard');

     
     //Change CSS
    if (power >= 8){
        card.style.borderColor = "gold"
        card.style.backgroundColor = "#fff9c4";
    } else if (power >= 4){
        card.style.borderColor = "#2196F3"
        card.style.backgroundColor = "#e3f2fd"
    } else {
        card.style.borderColor = "#9e9e9e"
        card.style.backgroundColor = "#f5f5f5"
    }

    //String method
    //String & Number method
    let loudName = name.toUpperCase();

    //Number Method
    let formattedPower = power.toFixed(1);

    //If/Else Conditional 
    let status = "";
    if (power >= 6) {
        status = "Legendery";
    } else {
        status = "Trainee";
    }

    //Switch statment
    let ability = "";
    switch (species) {
        case "dog":
            ability = "Super Growl";
            break;
        case "cat":
            ability = "Super Scratch";
            break;
        case "bird":
            ability = "Sonic Flight";
            break;
        case "lizard":
            ability = "Growth Manipulation";
            break;
        default:
            ability = "Mystery Power";  
        case "dog": ability = "Super Growl"; break;
        case "cat": ability = "Super Scratch"; break;
        case "bird": ability = "Sonic Flight"; break;
        case "lizard": ability = "Growth Manipulation"; break;
        default: ability = "Mystery Power";  
    }

    //Concatenated String Variable
    let heroBio = "The " + status + " hero, " + loudName + " has a power level of " + formattedPower + " and uses " + ability + "!";
    let heroBio = "The hero " + loudName + " is a " + species + " with " + ability + " at level  " + formattedPower + "!";
    display.innerText = heroBio;

    //For Loop
    let logHTML = "";
    for (let i = 1; i <= 3; i++){
        logHTML += "<li>Session " + i + ": Completed</li>";
    }

    //While Loop
    let currentLevel = 0;
    while (currentLevel < power){
        currentLevel++;
        console.log("Leveling up... Currently at: " + currentLevel);
    }

    //Output to page
    document.getElementById('output').innerHTML = heroBio;
    document.getElementById('trainingLog').innerHTML = logHTML;

    if (species ==="lizard") {
        document.body.style.backgroundColor = "#a0e8b4";
    } else {
        document.body.style.backgroundColor = "#f3f3f3";
    }
}