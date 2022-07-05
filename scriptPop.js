// // // console.log("Bonjours hello");

// // // // A .creer 2 nombres , X et Y , et les soustraire.

// // // let x = 5;
// // // let y = 3;

// // // let resultat = x-y;

// // // // B .Afficher message ou on ajoute " Madame monsieur" au debut d'un string existant

// // // console.log("exo B");
// // // console.log("-----");

// // // let prenom = "Thomas";
// // // console.log("Monsieur" + prenom);

// // // // C. Declarer 3 variables a b et c
// // // //ajouter a à b , puis diviser le resultat par c


// // // let a = 1 ;
// // // let b = 2 ;
// // // let c = 10 ;


// // // // Solution 1
// // // // console.log((a + b)/c);




// // // // D. declarer 2 variables : age et prenom
// // // //Afficher un message de bienvenue à la personne si elle a 10 ans ou plus

// // // let userAge = "25";
// // // if (userAge > 10 ) {
// // //      console.log("Welcome");
// // // }

// // // // E. afficher une popup d'alerte, avec le message "interdit au moin de 10 ans"


// // // // alert("interdit au moins de 10 ans");

// // // // ---------------------------------------------------------

// // // function substract(a, b){
// // //     console.log(a - b);
// // // }


// // // (
// // //     function(){
// // //         console.log("coucou");
// // //     }
// // // )()


// // // function sayHello(name){
// // //     console.log("bonjour", name);
// // // }

// // // sayHello("Thomas");
// // // // dit "bonjour + prenom"




// // // // exo 2
// // // // fonction dit "bonjour + " prénom
// // // function sayHello(name) {
// // //     console.log("bonjour", name);
// // // }

// // // sayHello("myriam");

// // // // exo3
// // // // procédure d'addition de 3 chiffres, afficher le résultat dans la console

// // // // (console.log("exo3"));

// // //procedure
// // function add3Numbers(a, b, c) {

// //     console.log(a + b + c);
// // }
// // //appel
// // add3Numbers(1,2,5);




// // // exo 4
// // // retourner la valeur d'une addition de 2 chiffres,
// // // stockés dans une variable qui sera retournée puis affichée


// // function func3Number(a,b) {
// //     let tempoVar = 0;
// //     tempoVar = a+b+c;
// //     return tempoVar;
// // }
// // func3Number(1, 2, 4);

// // exo5
// // calculer majorité, afficher bienvenue si SUPERIEUR ou EGAL A 18 ans,
// // afficher "allez vous en" si moins de 18


// function majorite(age){
//     if(age >= 18) {
//         console.log("bienvenue");
//     } else {
//         console.log("allez vous en !");
//     }
// }

// majorite(50);
// majorite(10);



// // exo6
// // retourner un booléen relatif a la majorité de la personne

// function isAdult(age) {
//     if(age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


// // exo7
// // calculer majorité mais demander une carte d'identité si la personne à entre 18 et 25 an

// function majorite7(age){
//     if(age >= 25) {
//         console.log("bienvenue");
//     } else if( 19 < age < 24) {
//         console.log("ID PLEASE");
//     } else {
//         console.log("allez vous en !");
// }
// }
// majorite7(50)



// A.afficher les nombres de 0 à 10 avec une boucle for

for (let i = 0; i < 11; i++) { // i=0 c'est la veleur de depart, i++ c'est 
    console.log(i);
  }

// B.afficher les nombres de 0 à 5 avec une boucle while

let n = 0;
while(n < 5) {
    n++;
    console.log(n);
}



// C.afficher les nombres pairs de 0 à 10 avec un do ... while
// D. afficherles nombres pairs de 0 à 20 via une boucle.





