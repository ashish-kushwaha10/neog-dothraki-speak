var btnInput = document.querySelector("#btn-input");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationText(input){
    return serverURL + "?" + "text=" + input;
}
function errorHandle(err){
    alert("something went wrong! please try again later");
    console.log(err);
}

function clickHandle(){
    var inputText = textInput.value;

    fetch(getTranslationText(inputText))
        .then(response => response.json())
        .then(jsonContent =>{
            var translatedContent = jsonContent.contents.translated;
            textOutput.innerText = translatedContent;
        })
        .catch(errorHandle);
}

btnInput.addEventListener("click",clickHandle);