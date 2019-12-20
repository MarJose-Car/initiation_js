//alert(ok);
/* LES BOUCLES*/

// Il y a différents types de boucles, les plus utilisés sont la boucle "FOR" et la boucle "While"
// *-* Boucle FOR():
for(let i = 0; i<=5;i++){
    document.write ('<p>Nombre de tour(s) de boucle(s):<em style="background:yellow">'+i+'</em></p>');

}
document.write("hr");
/*
Pour i = 0; j'initialise le départ de ma boucle à 0
Pour i<= 5; => tant que la valeur de i est inférieur ou égale à 5 i++; => j'incrémente (j'ajoute) un tour de boucle

En gros je donne l'instruction de faire un tour de boucle suplémentaire tant que la valeur de i n'est pas égale ou supérieur à 5

*/

var j = 0;
while(j< 5){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="backround:yellow;">'+j+'</em><:p>');

    j++;
}

/**
 * CONSIGNE / Grâce à une boucle For,
 * affichez La liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */
var prenoms = ["Jean", "Marc", "Mathieu", "Luc", "Pierre", "Paul", 'Jacques', "Hugo"];

console.log(Prenoms);
for(let i = 0; i < Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write(Prenoms[i]);
    document.write("/");

}