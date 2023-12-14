import axios from 'axios';
console.log("Hi");


let save = document.getElementById("saveButton");


save.addEventListener("click", () => {
  const titreInput = document.getElementById("titre").value;
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
      
    });
    
