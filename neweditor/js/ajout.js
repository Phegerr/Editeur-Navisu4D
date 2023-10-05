
let ajouter = document.getElementById("ajouter");
//let etape = document.getElementById("asks");
let newquestion ='<li> <label for="txtArea" class="labelQuestionTxt">Commentaire & commandes</label>  <textarea name="txt" id="txtArea" cols="10" rows="1"></textarea></li>';


function addquestion() {
   // ajouter.addEventListener("click", () => {
      document.getElementById("asks").innerHTML += newquestion;
    //})
}

//ajouter.onclick = addquestion;
