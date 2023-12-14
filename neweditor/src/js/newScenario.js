
let newButton =document.getElementById("newButton");

newButton.addEventListener("click",ouvrirNouvelleInstance)

//ouvre une nouvelle instance de la page afin de créer un nouveau scénarion vide
function ouvrirNouvelleInstance() {
    // Obtenez l'URL actuelle de la page
    var urlActuelle = window.location.href;
    // Ouvrir une nouvelle fenêtre ou un nouvel onglet avec l'URL actuelle
    window.open(urlActuelle, '_blank');
}