/*****   Exercises XP Gold
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

function swapCase(phrase) {
    let phraseSwap = "";
    for (let i = 0; i < phrase.length; i++) {
        if (("" + phrase.charAt(i)) == ("" + phrase.charAt(i)).toUpperCase()) {
            phraseSwap += ("" + phrase.charAt(i)).toLowerCase();
        } else {
            phraseSwap += ("" + phrase.charAt(i)).toUpperCase().trim();
        }
    }
    return phraseSwap.trim();
}

console.log(swapCase("The Quick Brown Fox"));