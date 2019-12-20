/****************** 
    LES VARIABLES
******************/

//1.je fais une alerte pour vérifier que mon fichier JS est bien relié à mon html
//  alert("js okay"); 

/* 
Lorsque l'on a besoin de stocker une information on utilise une variable. Une variable peut être interpréte comme une boite dans laquelle nous allons stocker une information.

IL EXISTE PLUSIEURS TYPE DE VARIABLE

*/

// pour déclarer une variable (la créer) :
// var prenom;

// pour lui affecter une valeur :
var prenom = "Alpha";
var prenom = 'Alexandre';
const PRENOM = 'matias';
// const PRENOM = 'mathias';
// Afficher la valeur d'une variable :
//a- pour tester une valeur on ouvre la console du navigateur (F12) puis on écrit le nom de la variable à droite des ">>" puis ENTER

//b- Afficher une alert avec la variable (NE PAS METTRE DE GUILLEMETS)
// alert(prenom);

//c- On écrit dans le script (code)
console.log(prenom);
console.log(prenom2);

//IL est possible d'écrire  plusieurs variables sur  une seule ligne :
var nb1, nb2, nb3;
//& d'y affecter des valeurs :
nb1 = 1;
nb2 = 50;
nb3 = 220;

// Une instruction se termine TOUJOURS par un poin virgule.

// Le nom d'une variable peut comporter des lettre et des chiffres mais exclut les signes de ponctuation (espace, accent...).

// /!\ LE JS EST SENSIBLE A LA CASSE /!\ (alt gr + 8 pour avoir " \")

/* 
 mavariable different de maVariable ou ma_variable

*/

// écirture snake case => ma_variable
// écirture camelCase => maVariable


/************************* 
 LES TYPES DES VARIABLES
*************************/

// -- typeof, me permet de connaitre le type de ma variable:
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre :
var Age = 40;
console.log(typeof Age);

// -- les variable de type FLOAT
var uneDecimal = -2.984;
console.log(uneDecimal); // affiche -2.984
console.log(typeof uneDecimal); // la console retourne "number" donc un / des chiffres

// -- les variables de type Booléens (boolean)
// LE BOOLEEN permet de vérifier si l'information est VRAI (true) ou FALSE (faux)
var unBoolean = false; // true 
console.log(unBoolean); // retourne false
console.log(typeof unBoolean); // retourne boolean

// -- Les CONSTANTES

// La déclaration CONST permet de créer une contante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs. Une constante ne peut pas être déclarée à nouveau.

const HOST ="localhost";
const USER = "root";
const PASSWORD = "mysql";
/* 
Donc il est impossible de faire cela :
        const USER = "Alpha";
La console me retounera => SyntaxError: redeclaration of const USER
*/
// Dans la convention on écrit les constantes en majuscule pour les reconnaitre
var unNombre = "24";
console.log(unNombre);// affiche 24
console.log(typeof unNombre);// retourne string (chaîne de caractère)

// pour convertir le string (chaine de caractère) "24" en number :
unNombre =  parseFloat(unNombre); // parseFloat permet d'interpréter le string 24 en chiffre 24
console.log(unNombre);// affiche 24
console.log( typeof unNombre);// retourne number


// pour convertir un chiffre en string
var nb4 = 93;
console.log(nb4);// affiche 93
console.log( typeof nb4);// la console interprète le nb4 comme un chiffre

nb4 = nb4.toString(); // toString() permet de convertire un nombre entier ou décimal en chaine de caractère (string).
console.log(typeof nb4);