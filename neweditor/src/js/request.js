import axios from 'axios';
console.log("Hi");

const previousTitleInputColor=document.getElementById("titre").style.backgroundColor;
let save = document.getElementById("saveButton");


save.addEventListener("click", () => {
  var titreInputElement = document.getElementById("titre");
  if (!titreInputElement.checkValidity()) {
    alert('Veuillez renseigner un titre');
    titreInputElement.style.backgroundColor = 'red'; // Fond rouge
} else {
  titreInputElement.style.backgroundColor = previousTitleInputColor;
  const titreInput = titreInputElement.value;
  const auteurInput = document.getElementById("auteur").value;
  const dateInput = document.getElementById("date").value;
  const descriptifInput = document.getElementById("descriptifArea").value;
  const longitudeInput = document.getElementById("longitude").value;
  const latitudeInput = document.getElementById("latitude").value;
  const altitudeInput = document.getElementById("altitude").value;
  const tangageInput = document.getElementById("tangage").value;
  const roulisInput = document.getElementById("roulis").value;
  const lacetInput = document.getElementById("lacet").value;
  const latitudesudInput = document.getElementById("latitudesud").value;
  const latitudenordInput = document.getElementById("latitudenord").value;
  const longitudeouestInput = document.getElementById("longitudeouest").value;
  const longitudeestInput = document.getElementById("longitudeest").value;
  const questionInput = document.getElementsByName("commentaireArea");
  
 
  const questionsList = [];
  for(let i=0; i<questionInput.length;i++){
    questionsList.push(questionInput[i].value);
  }
  


 

const fileInput = document.getElementById("input-file");
  const formData = new FormData();
  formData.append('imageData', fileInput.files[0]);

  const requestData ={
    fileName: titreInput.replace(/ /g, ""), //removing space
    title: titreInput,
    description: descriptifInput,
    date: dateInput,
    auteur: auteurInput,
    bbox:{
      s: latitudesudInput,
      w: longitudeouestInput,
      n: latitudenordInput,
      e: longitudeestInput
    },
    questions: questionsList,
    camera: {
      lon: longitudeInput,
      lat: latitudeInput,
      alt: altitudeInput,
      tan: tangageInput,
      rou: roulisInput,
      lac: lacetInput,
    },
  };
  requestData.imageData = formData;


 


axios.post('http://localhost:8080/scenarios', requestData, {
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => {
          // Gérer la réponse ici
          console.log(response);
          return response.data;
      })
      .then(data => {
          console.log('Response from the server:', data);
      })
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Error:', error);
      });

      }
    });
    


let open = document.getElementById("openButton");
const loadDialog = document.getElementById("loadDialog");
const titreInput = document.getElementById("titre");
const scenarioList = document.getElementById("scenarioList");
const loadBtn = document.getElementById("loadBtn");
const suppressBtn = document.getElementById("suppressBtn");

// "Open" button opens the <dialog> modally with the list of scenarios present in the server
open.addEventListener("click", () => {
  loadDialog.showModal();
  axios.get('http://localhost:8080/scenarios')
    .then(response => {
        const names = response.data;
        scenarioList.options.length = 0;

        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.text = name;
            scenarioList.appendChild(option);
        });

        
    })
    .catch(error => {
        console.error('Error:', error);
  });
});


// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
loadBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get(`http://localhost:8080/scenarios/${scenarioList.value}`);
    loadScenario(response.data)
    loadDialog.close();


} catch (error) {
    console.error('Error:', error);
}

});

suppressBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  // Affichez une boîte de dialogue de confirmation
  if (confirm(`Voulez-vous vraiment supprimer le scenario ${scenarioList.value}? Les données seront effacées du serveur.`)) {
      try {
          const response = await axios.delete(`http://localhost:8080/scenarios/${scenarioList.value}`);
          console.log('Response:', response);
          loadDialog.close();

      } catch (error) {
          console.error('Error:', error);
      }
  }
});

function loadScenario(data) {
  document.getElementById("titre").value = data.title;
  document.getElementById("auteur").value = data.auteur;
  document.getElementById("date").value = data.date;
  document.getElementById("descriptifArea").value = data.description;
  document.getElementById("longitude").value = data.camera.lon;
  document.getElementById("latitude").value = data.camera.lat;
  document.getElementById("altitude").value = data.camera.alt;
  document.getElementById("tangage").value = data.camera.tan;
  document.getElementById("roulis").value = data.camera.rou;
  document.getElementById("lacet").value = data.camera.lac;
  document.getElementById("latitudesud").value = data.bbox.s;
  document.getElementById("latitudenord").value = data.bbox.n;
  document.getElementById("longitudeouest").value = data.bbox.w;
  document.getElementById("longitudeest").value = data.bbox.e;
  const questionInput = document.getElementsByName("commentaireArea");
}
