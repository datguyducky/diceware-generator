function diceWare() {
    //generating passphrase part
    var numPhrase = document.getElementById('num-phrase').value; // how many words user wants to have in passphrase
    var language = document.getElementById('languages').value; // language for word list 
    var what = ""; // this is placeholder for fully generated passphrase, this is what we return to user 

    if (numPhrase < 6 || numPhrase > 128) {
        document.getElementById("error").style.display = "block"; //displaying error if user typed less than 6 or more than 128
    } else {
        document.getElementById("error").style.display = "none";
        for (i = 1; i <= numPhrase; i++) { // loop for generating random set of number (from 1 to 6). Length of loop depends on user input
            var cont = ""; //placeholder for set of numbers than we generated (ex. 11111) - this is index number for language word-list array

            for (j = 1; j <= 5; j++) {

                var result = Math.floor(Math.random() * 6) + 1; // generating 5 times random number (from 1 to 6) which will get us something like for ex. 11111
                result.toString;
                cont += result; //storing result in 'cont' variable
            }

            if (language == "zh") { //using chinese word list
                var genResult = chineseWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "fr") { //using french word list
                var genResult = frenchWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "de") { //using german word list
                var genResult = germanWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "it") { //using italian word list
                var genResult = italianWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "jpn") { //using japanese word list
                var genResult = japaneseWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "no") { //using norwegian word list
                var genResult = norwegianWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "pl") { //using polish word list
                var genResult = polishWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "pt") { //using portuguese word list
                var genResult = portugueseWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "ru") { //using russian word list
                var genResult = russianWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "es") { //using spanish word list
                var genResult = spanishWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else if (language == "sv") { //using swedish word list
                var genResult = swedishWordList(cont);
                genResult.toString;
                what += genResult + " ";
            } else { //using english word list
                var genResult = englishWordList(cont);
                genResult.toString;
                what += genResult + " ";
            }
            //console.log(language);
        }

        //display generated passphrase on page
        document.getElementById("gen-result-p").innerHTML = what;
    }
}

function copyText() {
    //copying text to clipboard part
    var text = document.getElementById("gen-result-p").innerText; //element to copy text from

    var elem = document.createElement("textarea"); //creating textarea so we can use 'elem.select()' when we really have text in '<p>' tag
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem); //deleting textarea
}