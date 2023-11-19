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
  const CommentaireAreaInput = document.getElementById("CommentaireArea").value;
  const latitudesudInput = document.getElementById("latitudesud").value;
  const latitudenordInput = document.getElementById("latitudenord").value;
  const longitudeouestInput = document.getElementById("longitudeouest").value;
  const longitudeestInput = document.getElementById("longitudeest").value;

  const requestData ={
    fileName: 'iheb3.txt',
    title: titreInput,
    description: descriptifInput,
    date: dateInput,
    bbox:{
      latitudesud: latitudesudInput,
      latitudenord: latitudenordInput,
      longitudeouest: longitudeouestInput,
      longitudeest: longitudeestInput
    },
    questions: CommentaireAreaInput,
    // ... other properties
  };
//   { title: titreValue,
//   auteur: auteurInput,
//   date:dateInput,

//   };


axios.post('http://localhost:8080/scenarios', requestData, {
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => {
          // Gérer la réponse ici
          console.log("youpiiiii");
          console.log(response.data);
          return response.data;
      })
      .then(data => {
          console.log(requestData);
          console.log('Response from the server:', data);
      })
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Error:', error);
      });
      
    });
    