const dropArea = document.getElementById("dropArea");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const resetButton = document.getElementById("reset-button"); // Ajout du bouton de réinitialisation

inputFile.addEventListener("change", uploadFile);

function uploadFile() {
    const fileName = inputFile.files[0].name; // Obtenez le nom du fichier
    imageView.textContent = fileName; // Affichez le nom du fichier dans la dropArea
    imageView.style.backgroundImage = ""; // Supprimez l'image de l'arrière-plan
    imageView.style.border = "2px dashed #ccc"; // Ajoutez une bordure à la dropArea
}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadFile();
});

// Ajout d'un événement de clic pour le bouton de réinitialisation
resetButton.addEventListener("click", function () {
    imageView.textContent = "Drag and drop or click here to upload file"; // Texte par défaut
    imageView.style.backgroundImage = ""; // Supprimez l'image de l'arrière-plan
    imageView.style.border = "2px dashed #ccc"; // Ajoutez une bordure à la dropArea
    inputFile.value = ""; // Réinitialisez la valeur du champ de fichier
});

