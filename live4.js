// exo d'algo + JS manip des nombres - intro TU
// A faire sans regarder la doc de Math.random , y'as les réponses dedans ! 

// cette PROCEDURE ( elle ne retourne rien, on n'en a pas besoin)
// vous permet d'écrire aff au lieu de console.log à chaque fois, une sorte d' ALIAS si vous voulez
// volontairement séparée pour l'instant, c'est un processus utilisé dans les TESTS UNITAIRES
// vos données de tests sont préremplies par votre humble serviteur ( pas toujours ) via aff, attention, il ne prend qu'un seul argument.

function aff(a) {
    console.log(a);
}

aff("Il est vraiment trop fort ce Baptiste.");
console.log("Il est vraiment exceptionel Baptiste.");



// EXO 
console.log("1");
// Math.random() RETOURNE un NOMBRE aléatoire entre 0 et 1 (inclus),  and 1 (exclus)
// afficher un nombre aléatoire

//soluce
aff("a", Math.random());


// EXO
console.log("2");
// Donner un chiffre rond ( INTEGER ) aléatoire.
// un chiffre va de O à 9

// soluce
aff(Math.floor(Math.random() * 10));


console.log("3");
// Donner un nombre entier entre une nombre a  INCLUS et un nombre B EXCLUS
// Math.floor(argument) retourne un nombre entier.

// soluce
aff(Math.floor(Math.random()));
aff(Math.floor(12.3456));

console.log("4");
// Créer une fonction qui renvoie un nombre entier entre deux valeurs

// soluce
function integerBetween(a, b) {
    let result;
    result = Math.floor(Math.random() * (b - a + 1) + a);
    return result;
}

aff(integerBetween(0, 1));
aff(integerBetween(5, 10));


// EXO MAP 1
aff('// EXO MAP 1');

// map contenant des clefs:valeurs des codes ISO de devise, exemple :  EUR -> € , USD -> $ 

// créer une fonction qui retourne la traduction,   € , $ etc 

// rajouter un vérificateur d'existence de devise dans le parametre de la fonction, sous forme de fenetre d'ALERTe de navigateur

const mapCurrency = new Map();

mapCurrency.set('EUR', '€');
mapCurrency.set('USD', '$');
mapCurrency.set('GBP', '£');

function currencyDisplayConvert(a) {
    if (mapCurrency.get(a) == undefined) {
        window.alert("/!\\ CURRENCY NOT FOUND /!\\ : " + a);
    }
    // TODO delete
    return mapCurrency.get(a);
}

aff(currencyDisplayConvert('EUR'));
aff(currencyDisplayConvert('GBP'));
// TODO delete
// aff(currencyDisplayConvert('RUB'));

// EXO MAP 2
aff('// EXO MAP 2');

// map dictionaire francais , mot : definition
// map dictionaire autre langue
// afficher tout le contenu de dico Fr via une boucle ( for de préférence) 
// n'afficher que les MOTS ( ahem...clefs )sans leur DEFINITION du dico étranger
// fonction(ou procédure, choisissez, osef du nom) prenant en paramètre le language de l'utilisateur et affichant le dictionaire dans le language choisi sous forme de log.
// BONUS : appeller cette fonction via un la méthode prompt sur l'objet window , pour ensuite ne log le dictionaire d'un seul languageFR
// ( en gros, on fait pop une fenetre via window.prompt, et on stocke le résultat dans une variable temporaire, avec laquelle on va ensuite appeller la fonction précédente )

const dicoFr = new Map([
    ['salade', 'Terme générique désignant certaines plantes potagères feuillues (laitues, chicorées, cresson, mâche, pissenlit).'],
    ['tomate', 'Plante herbacée annuelle (solanacée), dont la culture est très répandue et dont le fruit charnu est consommé sous des formes très variées.'],
    ['oignon', ' Plante (liliacée) potagère du genre ail, dont le bulbe, d\'une saveur et d\'une odeur fortes et piquantes, est très employé en cuisine ; le bulbe lui-même. (L\'oignon est une plante bisannuelle bulbeuse très anciennement cultivée.)'],
])

const dicoEn = new Map([
    ['salad', 'a usually cold dish consisting of vegetables, as lettuce, tomatoes, and cucumbers, covered with a dressing and sometimes containing seafood, meat, or eggs.'],
    ['tomato', 'any of several plants belonging to the genus Lycopersicon, of the nightshade family, native to Mexico and Central and South America, especially the widely cultivated species L. lycopersicum, bearing a mildly acid, pulpy, usually red fruit eaten raw or cooked as a vegetable.'],
    ['onion', 'a plant, Allium cepa, of the amaryllis family, having an edible, succulent, pungent bulb.'],
])

// // TABLEAU de parametres passé
// for (let [word, definition] of dicoFr) {
//     console.log(word + " = " + definition);
// }

// // for of .keys()
// let counter = 0;
// for (let word of dicoEn.keys()) {
//     counter++;
//     aff("english : " + counter + " " + word);
// }

// logs a dictionary into the console
function logDico(map) {
    console.log("Dictionary log : ");
    for (let [word, definition] of map) {
        console.log(word + " = " + definition);
    }
}
logDico(dicoFr);
logDico(dicoEn);

// procedure display a dictionary by language , aka BONUS
function displayDictionaryByLanguageLog(language) {

    switch (language) {
        case 'FR':
            logDico(dicoFr);
            break;
        case 'EN':
            logDico(dicoEn);
            break;
        default:
            'LANGUAGE NOT FOUND'
            break;
    }

    // // DEPRECIATED , fait en mode "sale"
    //     if (language === 'FR') {
    //         for (let [word, definition] of dicoFr) {
    //             console.log(word + " = " + definition);
    //         }
    //     } else if (language === 'EN') {
    //         for (let [word, definition] of dicoEn) {
    //             console.log(word + " = " + definition);
    //         }
    //     }
}

// displayDictionaryByLanguageLog('FR');
// displayDictionaryByLanguageLog('EN');

let languageChoice = window.prompt("LANGUAGE :");

displayDictionaryByLanguageLog(languageChoice);


// ---------------------------------------------------------------------

function affExo(exoNumber) {
    console.log('======= EXO ' + exoNumber + ' =======');
}

function affEndExo(exoNumber) {
    console.log('--- END ' + exoNumber + ' ---');
}

affExo('A');
// objet A . 
// 1 . créer une objet personne, qui contiendra les valeurs : le prénom , le nom, l'age, la nationalité
// 2 . créer une méthode "dire bonjour" qui retourne "bonjour " suivi du nom et du prénom.
// 3 . créer le constructeurs ( setters )
// 4 . instancier 3 personnes, avec des caractéristiques différentes
// 5 . créer une METHODE "frenchCheck" qui retourne TRUE si la nationalité de la personne est STRICTEMENT EGALE A française.

// 1
let personne = {
    firstName: "Exemple",
    lastName: "Jean",
    age: 16,
    nationality: "FRA",
    type: "NOT HUMAN"
}

//TEST DATA A.1
console.log(typeof(personne));
console.log(personne.firstName);
console.log(personne.lastName);
console.log(personne.age);
console.log(personne.nationality);
console.log(personne.type);
// END TEST DATA A.1

// 1 + 3
class Personne {
    constructor(firstName, lastName, age, nationality) {
        // setters
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
    }

    // fonction dire bjr
    sayHello() {
        console.log('Hello Mr.', this.lastName, this.firstName);
    }

    frenchCheck() {
        if (this.nationality === 'FRA') {
            return true;
        } else {
            return false;
        }
    }

}

// 4
let user1 = new Personne('Dupont', 'Michel', 21, 'FRA');
let user2 = new Personne('Shevchenko', 'Andriy', 45, 'UKR');
let user3 = new Personne('Balboa', 'Rocky', 30, 'USA');

user3.sayHello();

console.log(user1.nationality);
//mixer des " et des ' est possible dans les logs , mais déconseillé afin de pouvoir échapper l'autre caractère plus facilement
console.log(user2.firstName, user2.lastName, '(', user2.nationality, ')', " is a footballer having played for his national team, etc he's", user2.age, "years old.");
affEndExo('A');

console.log(user1.frenchCheck());
console.log(user2.frenchCheck());
console.log(user3.frenchCheck());


// 2 . créer une méthode "dire bonjour" qui retourne "bonjour " suivi du nom et du prénom.
// 3 . créer le constructeurs ( setters )
// 4 . instancier 3 personnes, avec des caractéristiques différentes
// 5 . créer une METHODE "frenchCheck" qui retourne TRUE si la nationalité de la personne est STRICTEMENT EGALE A française.

// B .
affExo("B");
affEndExo("B");
// 1. Créer une classe livre qui contiendra les proprietés : nom, auteur, prix
// 2. instancier 2 livres
// 3. constructeurs + fonction qui retourne tout les champs:valeurs sous forme de console.log
// 4. créer une fonction qui compare le prix de deux livres et affiche le nom du moins cher
// 5. rajouter une PROPRIETE devise, nos livres ne seront vendus que dans un language, par défaut ils seront vendus en euros ( les euros €, dollars us $, livres sterling £ , rouble russe RUB dans un tableau ) , 
//    rajouter cette propriété manuellement pour chaque livre
// 6. GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme auteur ( nom différent de 1 caractère minimum, indice), ayant tous un prix différent, tous étant de la meme currency


//1 classe livre
class Book {
    constructor(name, author, price, currency) {
            // 2 setters class livre
            this.name = name;
            this.author = author;
            this.price = price;
            //5
            this.currency = "€"
        }
        // 3 fonction affichage
    displayBookLog() {
        console.log('-displayBookLog()- Nom du livre : ' + this.name +
            ' , auteur : ' + this.author +
            ' , price : ' + this.price +
            ' , currency : ' + this.currency);
    }
}


// 2.instanciation de 2 livres + data test
let livre_test_1 = new Book('Les frères kazamarov', 'Fyodr Dostoyevsky', 40);
console.log('+++livre 1 : ',
    livre_test_1.name,
    livre_test_1.author,
    livre_test_1.price, '+++');

let livre_test_2 = new Book('La république', 'Platon', 100);
console.log('+++livre 2 : ',
    livre_test_2.name,
    livre_test_2.author,
    livre_test_2.price, '+++');

// 3 fonction affichage
livre_test_2.displayBookLog();

//4
function comparePrice(book1, book2) {
    if (book1.price > book2.price) {
        console.log(book2.name + ' est moins cher que ' + book1.name);
    } else if (book1.price === book2.price) {
        console.log("prix egal");
    } else {
        console.log(book1.name + ' est moins cher que ' + book2.name);
    }
}

comparePrice(livre_test_2, livre_test_1);
comparePrice(livre_test_1, livre_test_2);

//5
let currrencyTable = ['€', '$', '£', 'RUB']
livre_test_1.currency = currrencyTable[3];
livre_test_1.displayBookLog();
livre_test_1.price = 9999.99;
livre_test_1.displayBookLog();
console.log(livre_test_1.name + ' : ' + livre_test_1.currency + ' ' + livre_test_1.price);
console.log('livre 2 currency : ' + livre_test_2.currency);
livre_test_2.displayBookLog();

affExo("B6")
console.log('-test data-');
// 6. PARTIE GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme auteur ayant tous un prix différent, tous étant de la meme currency ( on en a une par défaut)
//    ces données sont bidon et c'est ok si elles sont imprécises, du moment que vous vous y retrouviez
//    BONUS : rajouter un champ currency ( optionel ) dans la fonction, qui change la currency des livres générés au lieu de l'€ habituel par défaut
//    constructeur du livre rappel : (name, author, price, currency)
//    SIGMA GRINDSET BONUS : rajouter 2 livres d'un autre auteur, et donc avec une autre devise ...ahem... CURRENCY
function bookGenerator(author, currency) {
    book1 = new Book('La chute de la république romaine', author, 11);
    book2 = new Book('Sur sparte', author, 22);
    book3 = new Book('Les vies romaines', author, 33);
    book4 = new Book('Les vies des nobles grecs', author, 44);
    book5 = new Book("L'age d'alexandre", author, 55.87);
    // // SIGMA GRINDSET BONUS 
    bookUS1 = new Book('livre us$', 'Mark Twain', currrencyTable[1]);
    bookUS2 = new Book('livre us$ ', 'Mark Twain', currrencyTable[1]);
}

bookGenerator('Marcus Aurelius', currrencyTable[1]);
book1.displayBookLog();
book2.displayBookLog();
book3.displayBookLog();
bookUS1.displayBookLog();
bookUS2.displayBookLog();

affEndExo('B6');
console.log('-test data end-');


affExo('C');
// Une id est un identifiant unique, comme votre numéro de sécu, y'en a JAMAIS DEUX PAREIL ( parfois, c'est tant mieux)
// C. 1. Créer une classe Article, qui contiendra les propriété suivantes : id ( NUMERO identifiant), nom , prix , description de l'objet, imagelink ( sous forme de string)
// avec son constructeur bien évidemment
// 2 . créer une méthode articleLog() qui affichera les proriétés de l'article
// 3 . instancier 2 articles, avec une id, un nom, un prix, une description
// 4 . créer une fonction articleGeneratorTestData() et déplacer vos instances d'article dedans, remplacer les id fait à la main par des l'indicateur de boucle "i"
// 5 . créer une METHODE qui ajoute UN lien url d'image à imageLink, attention au nommage
// 6 . rajouter une propriété imagesLink /!\ pluriel à l'objet Article ayant comme valeur un tableau de STRING 
//   . rajouter en dur images Link à article1 , modifier les constructeurs, articleLog etc en conséquence
//   . vous venez de comprendre l'intéret de la conception + débuggeur

// classe d'objet article
class Article {
    constructor(id, name, price, description, imageLink, imagesLink) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
        // 6 . tableau d'images
        this.imagesLink = imagesLink;

        console.log('created :' + this.name + ' id:' + this.id);
    }

    // 2. log d'article
    articleLog() {
        console.log('+article : ' + this.name +
            ' , name :' + this.name +
            ' , price :' + this.price +
            ' , description :' + this.description +
            ' , imageLink :' + this.imageLink +
            ' , imagesLink :' + this.imagesLink);
    }

    // 5. add imageLink, attention au nommage
    setImagelink(singleUrlLink) {
        this.imageLink = singleUrlLink;
    }

}
// on laisse souvent l'article avec l'id 0 aux devs pour tester
let article0 = new Article(0, 'test zero', 10, 'desctext zero');

// 4. testdata generator
const testImagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
];

let idCounter = 0;

function articleGeneratorTestData() {
    article1 = new Article(idCounter++, 'AK-47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
    article2 = new Article(idCounter++, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.');
    article3 = new Article(idCounter++, 'Corrupt politician, 1000kg', 1200000, 'Why kill your ennemies when it"s way easier to buy them?.');

    //on rajoutera le reste des articles à la suite, dans cette fonction -> on n'aura pas d'id doubles 
    articleImagesLinkOk = new Article(idCounter++, 'toyota camry but its kalashnikov pictures', 20000, 'A warlord\'s classic', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg', testImagesLink)
}
articleGeneratorTestData(4);
//end exo 4

article0.articleLog();

// // 3. instances
// let article1 = new Article(1, 'AK47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
// let article2 = new Article(2, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.')
// article1.articleLog();
// article2.articleLog();


console.log('test data gene');
articleImagesLinkOk.articleLog();
console.log('end test data gene');

// 6. imagesLink
article0.setImagelink("https://cdn.britannica.com/70/123170-050-D7AAF458/AK-47.jpg");
article0.imagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
]
article0.articleLog();