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
  


 // Assuming you have an input field with type=file for uploading an image
//  const fileInput = document.getElementById("fileslbl");
//  const imageFile = fileInput.files[0]; // Assuming you're only dealing with one file



//  // Create a FormData object
//  const formData = new FormData();

 // Append the file to the FormData object
//  formData.append('image', imageFile);

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
    // ... other properties
  };
  // requestData.image = imageFile;
  ;


axios.post('http://localhost:8080/scenarios', requestData, {
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => {
          // Gérer la réponse ici
          console.log("youpiiiii");
          console.log(response);
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
    