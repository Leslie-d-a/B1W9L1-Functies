var askName;
var askAge;
var ask = true;

function printNameAge(name, age) {
    alert("Hallo " + name + ", je leeftijd is " + age + " jaar");
}

function askNameAge(){
	while (ask == true) {
	    askName = prompt("Wat is je naam?\nOf type stop om te stoppen.");
	    if (askName == "stop") {
	        ask = false
	    } else {
	        askAge = prompt("Hoe oud ben je?\nOf type stop om te stoppen.");
	        if (askAge == "stop") {
	            ask = false
	        } else {
	            printNameAge(askName, askAge);
	        }
	    }
	}
}

askNameAge();