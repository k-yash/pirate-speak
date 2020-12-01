var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

getTranslationURL = (text) => serverURL + "?" +"text="+ text;

errorHandler = (error) => {
    console.log("Error Occured ",error);
    alert("something wrong with server! try again in some time");
}

btnTranslate.addEventListener("click", function clickEventHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    } )
    .catch(errorHandler);
})