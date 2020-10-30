var askNumber;
var number;
var ask = true;

function schrijfTafels() {
    while (ask == true){
        askNumber = prompt("Voer een nummer van 1 t/m 10 in.");
        number = parseInt(askNumber);
        if (number >= 1 && number <= 10) {
            ask = false
            var number1 = 1;
            for (a = 1; a <= number; a++) {
                for (var b = 1; b <= 10; b++) {
                    document.write(b + " * " + a + " = " + number1 * b + "</br>")
                }
                number1++
                document.write("<br>");
            }
        } else if (isNaN(number)) {
            alert("U dient een getal in te voeren.");
        } else if (number <=0 || number >= 11){
            alert("Bereik van getal moet zijn: 1 t/m 10.");
        }  
    }
    
}
schrijfTafels()