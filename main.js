function diceWare() {
	var language = document.getElementById('languages').value; // language for word list

	var myHeaders = new Headers();
	myHeaders.append('Content-Type','text/plain; charset=UTF-8');

	fetch(`languages/${language}.json`, myHeaders)
	.then(response => response.json())
  	.then(json = function(json) {
		let jsonString = JSON.stringify(json);
		let langObj = JSON.parse(jsonString);
		
		//generating passphrase part
		var numPhrase = document.getElementById('num-phrase').value; // how many words user wants to have in passphrase
		
		var what = ""; // this is placeholder for fully generated passphrase, this is what we return to user 

		if (numPhrase < 6 || numPhrase > 128) {
			document.getElementById("error").style.display = "block"; //displaying error if user typed less than 6 or more than 128
		} else {
			document.getElementById("error").style.display = "none";
			for (i = 1; i <= numPhrase; i++) { // loop for generating random set of numbers (from 1 to 6). Length of loop depends on user input
				var cont = ""; //placeholder for set of numbers than we generated (ex. 11111) - this is index number for language word-list array

				for (j = 1; j <= 5; j++) {
					var result = Math.floor(Math.random() * 6) + 1; // generating 5 times random number (from 1 to 6) which will get us something like for ex. 11111
					result.toString;
					cont += result; //storing result in 'cont' variable
				}

				what = what + langObj[cont];
				//console.log(language);
			}

			//display generated passphrase on page
			document.getElementById("gen-result-p").innerHTML = what;
		}
	})
}

function copyText() {
    //copying text to clipboard
    var text = document.getElementById("gen-result-p").innerText; //element to copy text from

    var elem = document.createElement("textarea"); //creating textarea so we can use 'elem.select()' when we really have text in '<p>' tag
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy"); //copying text
    document.body.removeChild(elem); //deleting textarea
}