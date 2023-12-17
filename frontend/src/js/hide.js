let hscenar = document.getElementById("hideScenario");
let scenar = document.getElementById("scenar");
let hzone = document.getElementById("hideZone");
let zone = document.getElementById("zone");
let hcam = document.getElementById("hideCamera");
let cam = document.getElementById("cam");
let hetapes = document.getElementById("hideEtapes");
let etapes = document.getElementById("etapes");
let hdocs = document.getElementById("hideDocs");
let docs = document.getElementById("docs");


hscenar.addEventListener("click", () => {
  if(getComputedStyle(scenar).display != "none"){
    scenar.style.display = "none";
    hscenar.style.transform = "rotate(180deg)";
  } else {
    scenar.style.display = "block";
    hscenar.style.transform = "rotate(0deg)"; 
  }
});

hzone.addEventListener("click", () => {
  if(getComputedStyle(zone).display != "none"){
    zone.style.display = "none";
    hzone.style.transform = "rotate(180deg)";
    
  } else {
    zone.style.display = "block";
    hzone.style.transform = "rotate(0deg)"; 
  }
});

hcam.addEventListener("click", () => {
  if(getComputedStyle(cam).display != "none"){
    cam.style.display = "none";
    hcam.style.transform = "rotate(180deg)"; 
  } else {
    cam.style.display = "block";
    hcam.style.transform = "rotate(0deg)"; 
  }
});

hetapes.addEventListener("click", () => {
  if(getComputedStyle(etapes).display != "none"){
    etapes.style.display = "none";
    hetapes.style.transform = "rotate(180deg)";
  } else {
    etapes.style.display = "block";
    hetapes.style.transform = "rotate(0deg)"; 
  }
});

hdocs.addEventListener("click", () => {
  if(getComputedStyle(docs).display != "none"){
    docs.style.display = "none";
    hdocs.style.transform = "rotate(180deg)";
  } else {
    docs.style.display = "block";
    hdocs.style.transform = "rotate(0deg)";
  }
});