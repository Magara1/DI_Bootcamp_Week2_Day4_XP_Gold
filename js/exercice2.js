/*****   Exercises XP Gold
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

function abbrevName(name) {
    let nameSplit = name.split(" ");
    let newName = nameSplit[0];
    if (nameSplit.length > 1) {
        for (let i = 1; i < nameSplit.length; i++) {
            newName += " " + nameSplit[i].toUpperCase().charAt(0) + ".";
        }
    }
    return newName;
}

console.log(abbrevName("Robin Singh"));