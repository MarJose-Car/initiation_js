// alert('ok js');
// -- Déclarer un tableau indexé : 
 // a)
 var monTableau = []; // alt gr + 5
console.log(monTableau);
// b)
var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs information

//Affecter des valeurs au tableau, plusieurs méthode :
//a) 
var nosPrenoms = ["Christian", " Philippe", "Mamadou", "Zitouni", "Sébastien"];
console.log(nosPrenoms);
//b) 
monTableau[0] = "Christian";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
monTableau[3] = "Sébastien";
monTableau[4] = "Zitouni";
console.log(monTableau);

// -- Déclarer et affecter des valeurs à un objet.

var Coordonnee = {
    prenom : "Hugo",
    nom : "LIEGEARD",
    age : 82
};
console.clear() //permet d'effacer les lignes de débug qui précède le console.clear()
console.log(Coordonnee);//j'affiche toute les informations de mon tableau
console.log(Coordonnee ['prenom']);//je n'affiche que le prénom
console.log(Coordonnee['nom']);//je n'affiche que le nom

// *-- on va créer deux tableaux indexé

var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
var listeDeNom = ["MAMA", "BENALLAL", "LIEGEARD"];
var Annuaire = [listeDePrenom, listeDeNom];
console.log(Annuaire);
document.write();//fonction native de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur console
document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write (" ");
document.write(Annuaire[1][1]);

//tableau à 2 dimensions non indexé

var contact = [
    {prenom: "Hugo", nom: "Liegeard", tel:"0783 07 9525"},
    {prenom: "Salim", nom: "Soumare", tel:"0783 07 9253"},
    {prenom: "Pransum", nom: "Balasubra", tel:"0783 07 9854"}
];
console.log(contact);

/*-----------------------------------------------------------------------------------\
/                                     EXIERCICE :-)                                  /
/                        ~     ~     ~     ~     ~     ~      ~                      /
/                   Créez un Tableau à 2 dimensions appelé                           /
/                   "AnnuaireDesStagiaires" qui contiendra                           /
/                   toutes les coordonnées de chaque stagiaire.                      /
/                   Ex. Nom, Prénom, tel                                             /
/------------------------------------------------------------------------------------*/

var AnnuaireDesStagiaires = [
    {prenom:"Maria",nom :"Carvalho", tel :"04524526"},
    {prenom:"Cinnie",nom :"Farnaud", tel :"0557756"},
    {prenom:"Sahar",nom :"Ferchichi", tel :"0672722"},
    {prenom:"Mamadou",nom :"Diaby", tel :"0604527"},
    {prenom:"Samia",nom :"Ouali", tel :"78237832"},
    {prenom:"Sébastian",nom :"Delrue", tel :"785785678"},
    {prenom:"Vincent",nom :"xxxxxxxx", tel :"72578327"},
    {prenom:"Zitouni",nom :"xxxxxxx", tel :"783278"},
    {prenom:"Noria",nom :"xxxxxxxx", tel :"5727273"},
    {prenom:"Juliette",nom :"xxxxxxxx", tel :"583273587"},
    {prenom:"Philippe",nom :"xxxxxxxxx", tel :"837837832"},
    {prenom:"Christian",nom :"xxxxxxxxx", tel :"837383"}
];
console.log(AnnuaireDesStagiaires);

//exemple à trois dimensions
var array3dimension = [
    {
        prenom:"Hugo",
        nom:"LIEGEARD",
        Coordonnees:{
            email : "hugo.liegeard@lepoles.com",
            tel:{
                fixe: "0596 108 328",
                fax: "0596 108 632",
                por: {
                    prive: "07 83 97 10 15",
                    pro: " 07 83 97 15 15",
                }
            },
            adresse: {
                ville: "Ducos",
                cp:"97224",
                region:"Martinique",
                pays: {
                    code:"FR",
                    nom:"France"
                }
            }
        }
    } //fermeture 1er{}
]; //fin array3dimension
console.log(array3dimension);
console.log(array3dimension[0].Coordonnees.email);
//Ajouter un élément
var couleur = ["rouge","jaune","vert"];
console.clear();
console.log(couleur);
console.log(couleur.length); //length me permet d'afficher sur ma console le nombre d'élément que cntient mon tableau
//Pour ajouter un élément dans mon tableau, je fais appel à la fonction push()
var nbElementDeMonTableau = couleur.push("violet");
console.log(couleur);
console.log(nbElementDeMonTableau);

//pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift()
console.clear();
var nbElementDeMonTableau = couleur.unshift("bisque","orange");
console.log(couleur);
console.log(nbElementDeMonTableau);

//suprimer un ou plusieurs éléments de mon tableau, je fais appel à la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementDeMonTableau);

//Pour suprimer le 1er élément de mon tableau, j'utilisela donctionshift()
couleur.shift();
console.log(couleur);
console.log(nbElementDeMonTableau);



