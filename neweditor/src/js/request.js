import axios from 'axios';
console.log("Hi");

/*let hbutton = document.getElementById("hidebutton");*/
const dataInput = document.getElementById('titre');
const inputData = dataInput.value;
let save = document.getElementById("saveButton");


save.addEventListener("click", () => {
  const titreInput = document.getElementById("titre");
  const auteurInput = document.getElementById("auteur").value;
  const dateInput = document.getElementById("date").value;
  const titreValue = titreInput.value;
  const requestData ={
    fileName: 'iheb2.txt',
    title: titreValue,
    description: 'Example Description',
    origin: 'Example Origin',
    date: dateInput,
    bbox: 'Example Bbox',
    introduction: 'Example Introduction',
    questions: ['Question 1', 'Question 2'],
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
    