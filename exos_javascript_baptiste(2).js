// Il peut y avoir plusieurs solutions pour un exercice.
// Vous pouvez vérifier vos données via votre console de navigateur ( F12, attention au FN )

// Intro , rajouter le code suivant hors commentaire javascript ( les // ) dans votre balise head, après le css , mais avant le title.
// <!-- on met les scripts d'import de script js après le css -->
//     <!-- ici on importe exo js baptiste.js via une balise script -->
//     <!-- vous pouvez découper vos exos comme bon vous semble en plusieurs scripts, comme plusieurs css, attention à la portée de variables. -->
//     <script src="exos_javascript_baptiste.js"></script>

let shalom = "bonjour bordel point js";

console.log("-------- EXO 1--------");
// Rajouter € à la fin de prix

function euro(prix) {
    console.log(prix, "€");
}

euro(24);
euro(1);

console.log("-------- EXO 2--------");
// addition de 3 chiffres

function add3Numbers(x, y, z) {
    let somme = x + y + z;
    console.log(somme);
}



console.log("-------- EXO 3--------");
// calculer le prix après la TVA ( ca fait beaucoup 20%, à calculer)

function tva(a) {
    return a * 0.8;
};

console.log(tva(10));


console.log("-------- EXO 4--------");
// calculer majorité
function majeur(age) {
    if (age >= 18) {
        console.log("majeur");
    } else {
        console.log("mineur");
    }
}

// Données de TEST
majeur(12);
majeur(55);
majeur(18);


console.log("-------- EXO 5--------");
// retourner un booléen relatif a la majorité de la personne
function isMajeurCheck(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isMajeurCheck(19));


console.log("-------- EXO 6--------");
// calculer majorité mais demander une carte d'identité si la personne à entre 18 et 25 ans ( il paraît vraiment jeune )
function isMajeurSuspect(age) {
    if (age < 18) {
        console.log("MINOR DETECTED , NUCLEAR STRIKE ACTIVATED");
    } else if (19 < age || age < 26) {
        console.log("Papiers svp");
    } else {
        console.log("Bienvenue");
    }
}

isMajeurSuspect(18);


// ============BOUCLES===============
// ============BOUCLES===============
console.log("-------- EXO A--------");
// A.afficher les nombres de 0 à 10 avec une boucle for
for (let i = 0; i < 11; i++) {
    console.log(i);
}


console.log("-------- EXO B--------");
// B.afficher les nombres de 0 à 5 avec une boucle while
let j = 0;
while (j < 6) {
    console.log(j++);
}


console.log("-------- EXO C--------");
// C.afficher les nombres pairs de 0 à 10 avec un do ... while

console.log("-------- EXO C--------");
// C.afficher les nombres pairs de 0 à 10 avec un do ... while
let k = 0;
do {
    if (k % 2 == 0) {
        console.log(k)
    }
    k++;
} while (k < 11);


console.log("-------- EXO D--------");
// D. afficher les nombres pairs de 0 à 20 via une boucle.
for (let l = 0; l <= 20; l++) {
    if (l % 2 == 0) {
        console.log(l)
    }
}


console.log("======END======");
console.log("copyright Baptiste Groux™, license WTFPL http://www.wtfpl.net/about/");