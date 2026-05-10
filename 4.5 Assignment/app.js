function generateHero(){
    //Inputs
    let name = document.getElementById('petName').value;
    let species = document.getElementById('animal').value.toLowerCase();
    let power = parseFloat(document.getElementById('petPower').value);

    //string Method
    let loudName = name.toUpperCase();

    //number Method
    let formattedPower = power.toFixed(1);
   
   //if/else
   let status = "";
   if (power >= 6) {
    status = "legendary";
   } else {
    status = "trainee";
   }

   //switch statement
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
   }

    //concentrated string variable
    let heroBio = "The" + status + "hero," + loudName + "has a power level of " + formattedPower + " and uses " + ability + "!";

    //output page

    document.getElementById('output').innerHTML = heroBio;
}   