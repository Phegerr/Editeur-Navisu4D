
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
let hbutton = document.getElementById("hidebutton");

hscenar.addEventListener("click", () => {
  if(getComputedStyle(scenar).display != "none"){
    scenar.style.display = "none";
  } else {
    scenar.style.display = "block";
  }
});

hzone.addEventListener("click", () => {
  if(getComputedStyle(zone).display != "none"){
    zone.style.display = "none";

    
  } else {
    zone.style.display = "block";
    
  }
});

hcam.addEventListener("click", () => {
  if(getComputedStyle(cam).display != "none"){
    cam.style.display = "none";
    
  } else {
    cam.style.display = "block";
    hbutton.style.display = "transform: rotate(270deg);"
  }
});

hetapes.addEventListener("click", () => {
  if(getComputedStyle(etapes).display != "none"){
    etapes.style.display = "none";
    
  } else {
    etapes.style.display = "block";
  }
});

hdocs.addEventListener("click", () => {
  if(getComputedStyle(docs).display != "none"){
    docs.style.display = "none";
    
  } else {
    docs.style.display = "block";
  }
});