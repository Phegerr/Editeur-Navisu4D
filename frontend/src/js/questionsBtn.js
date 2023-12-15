
var ind;


function addquestion() {
      /*
            let index = 6;
            let ind = index.toString();
            let newquestion = '<li id="textArea' + ind + '" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="txt" cols="10" rows="1"></textarea></li>';
            document.getElementById("asks").insertAdjacentHTML("beforeend", newquestion)
            */
      let newquestion = '<li id="textArea" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="commentaireArea" cols="10" rows="1"></textarea></li>';
      document.getElementById("asks").insertAdjacentHTML("beforeend", newquestion);

}


function insertquestion() {
      let insertQuestion = '<li id="textArea" > <label for="txtArea" class="labelQuestionTxt">Commentaire et commandes</label><textarea name="commentaireArea" cols="10" rows="1"></textarea></li>';
      document.getElementById("textArea").insertAdjacentHTML('afterend', insertQuestion);
}


function removequestion() {

      const element = document.getElementById("textArea");
      element.remove();
      /*
          element2remove = "textArea6";
          const element = document.getElementById(element2remove);
          element.remove(); 
      */
}

window.addquestion = addquestion;
window.insertquestion = insertquestion;
window.removequestion = removequestion;


