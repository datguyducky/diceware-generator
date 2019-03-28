function diceWare(){
    var numPhrase = document.getElementById('num-phrase').value; // how many words user wants to generate
    var language = document.getElementById('languages').value; // language for word list 
    var what = "";

    if(numPhrase < 6 || numPhrase > 128){
        document.getElementById("gen-result-p").innerHTML = "Can't generate passphrase. Minimum of words is 6 and maximum is 128. Check if you entered number in this range.";
    }

    else{
    for(i=1;i<=numPhrase;i++){ // loop for generating random set of number (from 1 to 6). Length of loop depends on user input.
        var cont = "";
     
        for(j=1;j<=5;j++){
        
        var result = Math.floor(Math.random() * 6) + 1; // generating 5 times random number (from 1 to 6) which will get us something like for ex. 11111. Then we check which language user selected and use appropiate file, which contains list of words.
        result.toString;
        cont += result;
        }

        if(language == "zh"){//using chinese word list
            var genResult = chineseWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "fr"){//using french word list
            var genResult = frenchWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "de"){//using german word list
            var genResult = germanWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "it"){//using italian word list
            var genResult = italianWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "jpn"){//using japanese word list
            var genResult = japaneseWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "no"){//using norwegian word list
            var genResult = norwegianWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "pl"){//using polish word list
            var genResult = polishWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "pt"){//using portuguese word list
            var genResult = portugueseWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "ru"){//using russian word list
            var genResult = russianWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "es"){//using spanish word list
            var genResult = spanishWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else if(language == "sv"){//using swedish word list
            var genResult = swedishWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        else{//using english word list
            var genResult = englishWordList(cont);
            genResult.toString;
            what += genResult +" ";
        }
        //console.log(language);
    }

    document.getElementById("gen-result-p").innerHTML = what; //Writing generated words on page.
    }
}

