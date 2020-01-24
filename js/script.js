var form = document.querySelector("form");
var div = document.querySelector("#tempResult");

form.addEventListener("submit", function(e) {
    // prevent form from automatic refresh on submit
    e.preventDefault();

    // get user submitted value
    var tempToConvert = form.elements["input"].value;
    
    // check for C or F
    if (form.elements["far"].checked) {
        let convertedTemp = (tempToConvert - 32) * (5/9);
        div.innerText = convertedTemp;
        if (convertedTemp < 33) {
            div.style.backgroundColor = "blue";
        } else {
            div.style.backgroundColor = "red";
        }
    } else {
        let convertedTemp = (9/5 * tempToConvert) + 32;
        div.innerText = convertedTemp;
    }
    
    


});

form.elements["clear"].addEventListener("click", function(e) {
    form.elements["input"].value = "";
});