//1er
//returns {boolean} - true si la longueur est validée par l'utilisateur, sinon false.
function what_are_words_worth() 
{
    var valeur_entree = prompt("Veuillez entrer un mot ou une phrase :");
    var longueur = valeur_entree.length; 
    // Calculer la longueur de l'entrée
    var confirmation = confirm(`Votre entrée "${valeur_entree}" comporte ${longueur} caractère(s). Confirmez-vous ?`);
    return confirmation; 
    // Retourner le résultat de la confirmation
} 

//2EM
//param {string} phrase - La phrase à analyser.
//returns {number} - Le nombre de mots dans la phrase.
function count_words(phrase)
{
   let count = 0; // Initialiser le compteur de mots
   for (let i = 0; i < phrase.length; ++i) {
       // Vérifier si le caractère actuel est un espace et que le caractère suivant n'est pas un espace
       if (phrase.charAt(i) === ' ' && (i + 1 < phrase.length && phrase.charAt(i + 1) !== ' ')) {
           ++count; // Incrémenter le compteur
       }
   }
   return count + (phrase.length > 0 ? 1 : 0); // Ajouter 1 pour le dernier mot si la chaîne n'est pas vide
}

//3EME 
//param {string} phrase - La phrase à analyser.
//param {string} [separator=' '] - Le séparateur utilisé pour diviser les mots (optionnel).
//returns {number} - Le nombre de mots dans la phrase.
function count_words_by(phrase, separator = ' ') 
{
    let count = 0; // Initialiser le compteur de mots
    for (let i = 0; i < phrase.length; ++i) {
        // Vérifier si le caractère actuel est le séparateur et que le caractère suivant n'est pas le séparateur
        if (phrase.charAt(i) === separator && (i + 1 < phrase.length && phrase.charAt(i + 1) !== separator)) {
            ++count; // Incrémenter le compteur
        }
    }
    return count + (phrase.length > 0 ? 1 : 0); // Ajouter 1 pour le dernier mot si la chaîne n'est pas vide
}

// 4EME
// param {string} letter - La lettre à vérifier.
//returns {boolean} - true si c'est une voyelle, sinon false.
function is_a_vowel(letter)         
 {
    return vowels.includes(letter); // Vérifier si la lettre est dans le tableau des voyelles
}
//param {string} string_of_words - La phrase à analyser.
//returns {number} - Le nombre de voyelles dans la phrase.
function count_vowels(string_of_words) {
    let count = 0; // Initialiser le compteur de voyelles
    for (let i = 0; i < string_of_words.length; i++) {
        if (is_a_vowel(string_of_words.charAt(i))) {
            count++; // Incrémenter le compteur si c'est une voyelle
        }
    }
    return count; // Retourner le nombre total de voyelles
}

//5eme 
//param {string} string_of_words - La phrase à analyser.
//returns {number} - Le nombre de consonnes dans la phrase.
function count_consonants(string_of_words) {
    return string_of_words.length - count_vowels(string_of_words) - (string_of_words.match(/ /g) ? string_of_words.match(/ /g).length : 0);
}
//param {string} string_of_words - La phrase d'origine.
//param {string} caracter - Le caractère à supprimer.
//returns {string} - La phrase sans les occurrences du caractère à supprimer.
function remove(string_of_words, caracter) {
    let result = ''; // Initialiser une chaîne vide pour stocker le résultat
    for (let i = 0; i < string_of_words.length; i++) {
        if (string_of_words.charAt(i) !== caracter) {
            result += string_of_words.charAt(i); // Ajouter le caractère à la chaîne résultat
        }
    }
    return result; // Retourner la chaîne résultante
}

//6EME
//param {string} string_of_words - La phrase d'origine.
//param {string} caracter - Le caractère à supprimer.
//returns {string} - La phrase sans les occurrences du caractère à supprimer.
function remove(string_of_words, caracter) {
    let result = ''; // Initialiser une chaîne vide pour stocker le résultat
    for (let i = 0; i < string_of_words.length; i++) {
        if (string_of_words.charAt(i) !== caracter) {
            result += string_of_words.charAt(i); // Ajouter le caractère à la chaîne résultat
        }
    }
    return result; // Retourner la chaîne résultante
}

//7EME
//param {string} string_of_words - La phrase d'origine.
//param {string} caracters - Les caractères à supprimer.
//returns {string} - La phrase sans les occurrences des caractères à supprimer.
function remove_strings(string_of_words, caracters)    
 {
    return remove_many(string_of_words, caracters); // Appeler remove_many
}

function remove_many(string_of_words, caracters) {
    let result = ''; // Initialiser une chaîne vide pour stocker le résultat

    // Parcourir chaque caractère de la chaîne d'origine
    for (let i = 0; i < string_of_words.length; i++) {
        let currentChar = string_of_words.charAt(i); // Obtenir le caractère actuel
        let shouldRemove = false; // Variable pour vérifier si le caractère doit être supprimé

        // Vérifier si le caractère actuel est dans la série de caractères à supprimer
        for (let j = 0; j < caracters.length; j++) {
            if (currentChar === caracters.charAt(j)) {
                shouldRemove = true; // Marquer que le caractère doit être supprimé
                break; // Sortir de la boucle
            }
        }

        // Si le caractère ne doit pas être supprimé, l'ajouter au résultat
        if (!shouldRemove) {
            result += currentChar; // Ajouter le caractère à la chaîne résultat
        }
    }

    return result; // Retourner la chaîne résultante
}

//8EME
//param {string} a_string - La chaîne de caractères à chiffrer.
//param {number} a_number - Le décalage à appliquer.
//returns {string} - La chaîne chiffrée.

function crypto(a_string, a_number)
{
    let result = ''; // Initialiser une chaîne vide pour stocker le résultat
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Alphabet en minuscules
    const alphabet_length = alphabet.length; // Longueur de l'alphabet

    // Parcourir chaque caractère de la chaîne d'entrée
    for (let i = 0; i < a_string.length; i++) {
        let currentChar = a_string.charAt(i); // Obtenir le caractère actuel

        // Vérifier si le caractère est une lettre minuscule
        if (currentChar >= 'a' && currentChar <= 'z') {
            // Trouver l'index du caractère dans l'alphabet
            let currentIndex = alphabet.indexOf(currentChar);
            // Calculer le nouvel index avec le décalage
            let newIndex = (currentIndex + a_number) % alphabet_length;
            // Ajouter le caractère chiffré au résultat
            result += alphabet.charAt(newIndex);
        } 
        // Vérifier si le caractère est une lettre majuscule
        else if (currentChar >= 'A' && currentChar <= 'Z') {
            // Trouver l'index du caractère dans l'alphabet
            let currentIndex = alphabet.toUpperCase().indexOf(currentChar);
            // Calculer le nouvel index avec le décalage
            let newIndex = (currentIndex + a_number) % alphabet_length;
            // Ajouter le caractère chiffré au résultat
            result += alphabet.toUpperCase().charAt(newIndex);
        } 
        // Si ce n'est pas une lettre, ajouter le caractère tel quel
        else {
            result += currentChar;
        }
    }

    return result; // Retourner la chaîne chiffrée
}

//9EME
//param {string} a_string - La chaîne de caractères à déchiffrer.
//param {number} a_number - Le décalage à appliquer.
//returns {string} - La chaîne déchiffrée.
function decrypt(a_string, a_number) {
   let result = ''; // Initialiser une chaîne vide pour stocker le résultat
   for (let i = 0; i < a_string.length; i++) {
       let currentChar = a_string.charAt(i); // Obtenir le caractère actuel
       if (currentChar >= 'a' && currentChar <= 'z') {
           // Déchiffrer les lettres minuscules
           let newChar = String.fromCharCode(((currentChar.charCodeAt(0) - 'a'.charCodeAt(0) - a_number + 26) % 26) + 'a'.charCodeAt(0));
           result += newChar; // Ajouter le caractère déchiffré au résultat
       } else if (currentChar >= 'A' && currentChar <= 'Z') {
           // Déchiffrer les lettres majuscules
           let newChar = String.fromCharCode(((currentChar.charCodeAt(0) - 'A'.charCodeAt(0) - a_number + 26) % 26) + 'A'.charCodeAt(0));
           result += newChar; // Ajouter le caractère déchiffré au résultat
       } else {
           result += currentChar; // Conserver les caractères non alphabétiques
       }
   }
   return result; // Retourner la chaîne déchiffrée
}

//10EME
//param {string} crypted_string - La chaîne de caractères cryptée.
//returns {number} - La clé de chiffrement trouvée.
function enigma(crypted_string) {
    return Array.from({ length: 26 }, (_, i) => i).find(key => decrypt(crypted_string, key).includes(' ')) || 0;
}