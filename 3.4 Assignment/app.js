//Global variable
var studentName = "Sydney Anglin";
console.log("Student Name:", studentName)

//String variable
let welcomeMessage = "Welcome to my JavaScript project!";
console.log(welcomeMessage);

//Block variable
 {
    let className = "IMED-2351 Programming";
    console.log("Class Name:", className);
 }

function logger(){
    console.log("Hello and Welcome");
}

logger();

document.getElementById("welcome").innerHTML = <h1> Hello, Welcome to my one-page project.</h1>
<h2> What is your name?</h2>

//Math operations
let assignmentGrade = 80;
let extraCredit = 10;
let finalGrade = assignmentGrade + extraCredit;

console.log("Final Grade:", finalGrade);

//Method
excitmentSound: function() {
    return "Yippee!";
};

function getFullName(first + last) {
    return first + " " + last;
};

//object variable
const studentInfo = {
    firstName: "Sydney",
    lastName: "Anglin",
    major: "Digital Media",
    college: "Northwest Vista",
    online: true
function createSentence(name,course) {
    return name + " is in " + course + ".";
};
};

console.log("Stduent Info Object:", stduentInfo);

//Event
document .getElementById("showBtn").addEventListener("click",function()) {
    
    let rawFirst = 
    document.getElementById("fName") .value;
    let rawLast =
    document.getElementById(:1Name") .value;

    let finalName
    =getFullName (rawFirst, rawLast);

    let finalCar = getClassName();

    let message = createSentence(finalName,finalCar);

    let sound = myClass.excitementSound();


    document.getElementById("result").innerText = message + " " + sound;
};