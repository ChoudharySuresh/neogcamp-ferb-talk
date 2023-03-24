var btn = document.querySelector("#btn");
var textInput = document.querySelector("textarea");
var textOutput = document.querySelector(".output");


function trigger(){
    var userInput = textInput.value;
    var url = "https://api.funtranslations.com/translate/ferb-latin.json"+ "?" + "text=" +userInput;
    
    fetch(url)
    .then(response => response.json())
    .then(res => {
        textOutput.innerText=res.contents.translated;
    })
    .catch(err => console.log(`${err} ,Something went wrong We will figure it Out` ));
}

btn.addEventListener("click" , trigger);