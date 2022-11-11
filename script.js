//Obtain text from textarea and save on variable to be used later
document.getElementById("uno").onclick = function convertir() {
    var myName = document.getElementById("entrada").value;

    //Create an array to save the text split
    var cut = myName.split('');
    console.log(cut)

    //Check array elements one by one and replace depending on the letter
    for (let i = 0; i < cut.length; i++) {
        if (cut[i] == "a") {
            cut[i] = "ᚨ";
        } else if (cut[i] == "b") {
            cut[i] = "ᛒ";
        } else if (cut[i] == "k" || cut[i] == "c") {
            cut[i] = "ᚲ";
        } else if (cut[i] == "d") {
            cut[i] = "ᛞ";
        } else if (cut[i] == "e") {
            cut[i] = "ᛖ";
        } else if (cut[i] == "f") {
            cut[i] = "ᚠ";
        } else if (cut[i] == "g") {
            cut[i] = "ᚷ";
        } else if (cut[i] == "h") {
            cut[i] = "ᚺ";
        } else if (cut[i] == "i") {
            cut[i] = "ᛁ";
        }
        else if (cut[i] == "j") {
            cut[i] = "ᛃ";
        }
        else if (cut[i] == "l") {
            cut[i] = "ᛚ";
        }
        else if (cut[i] == "m") {
            cut[i] = "ᛗ";
        }
        else if (cut[i] == "n") {
            cut[i] = "ᚾ";
        }
        else if (cut[i] == "o") {
            cut[i] = "ᛟ";
        }
        else if (cut[i] == "p") {
            cut[i] = "ᛈ";
        }
        else if (cut[i] == "q") {
            cut[i] = "ᚲ";
        }
        else if (cut[i] == "r") {
            cut[i] = "ᚱ";
        }
        else if (cut[i] == "s") {
            cut[i] = "ᛋ";
        }
        else if (cut[i] == "t") {
            cut[i] = "ᛏ";
        }
        else if (cut[i] == "u") {
            cut[i] = "ᚢ";
        }
        else if (cut[i] == "v" || cut[i] == "w") {
            cut[i] = "ᚹ";
        }
        else if (cut[i] == "y") {
            cut[i] = "ᛇ";
        }
        else if (cut[i] == "z") {
            cut[i] = "ᛉ";
        }
        else if(cut[i] == "x"){
            cut[i] = "ᛪ";
        }
    }

    console.log(cut);
    //Turn array back into string
    var end = cut.join("");
    console.log(end);

    //Show new string in the white textarea 
    document.getElementById("encriptado").innerHTML = end;
}

//Obtaining data from second button (same text but different js function)
document.getElementById("dos").onclick = function revertir() {
    var convertido = document.getElementById("entrada").value;
    console.log(convertido);

    //Replacing each letter combination for its respective vowel
    var convertir = convertido.replace(/ᛪᚲ/g, "xc").replace(/ᚹᚺ/g, "wh").replace(/ᚨ/g, "a").replace(/ᛒ/g, "b").replace(/ᚲ/g, "k" || "c").replace(/ᛞ/g, "d").replace(/ᛖ/g, "e").replace(/ᚠ/g, "f").replace(/ᚷ/g, "g").replace(/ᚺ/g, "h").replace(/ᛁ/g, "i").replace(/ᛃ/g, "j").replace(/ᛚ/g, "l").replace(/ᛗ/g, "m").replace(/ᚾ/g, "n").replace(/ᛝ/g, "ing").replace(/ᛟ/g, "o").replace(/ᛈ/g, "p").replace(/ᚲ/g, "q").replace(/ᚱ/g, "r").replace(/ᛋ/g, "s").replace(/ᛏ/g, "t").replace(/ᚢ/g, "u").replace(/ᚹ/g, "v" || "w").replace(/ᚦ/g, "th").replace(/ᛇ/g, "y").replace(/ᛉ/g, "z");
    console.log(convertir);

    //Showing the result on the white textarea
    document.getElementById("encriptado").innerHTML = convertir;
}

//Function to copy text in clipboard
function copiar() {
    var copiarTexto = document.getElementById("encriptado");
    navigator.clipboard.writeText(copiarTexto.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(() => {
            alert("Hubo un problema");
        });

}