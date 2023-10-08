
let insertQuestion ='<li> <label for="txtArea" class="labelQuestionTxtTest">Commentaire & commandes</label>  <textarea name="txt" id="txtArea" cols="10" rows="1"></textarea></li>';

function insertquestion() {
    
    document.getElementById("textArea").insertAdjacentHTML('afterbegin', insertQuestion);
}
