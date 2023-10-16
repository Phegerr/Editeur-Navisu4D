//import generateJoke from './generateJoke'
//import './styles/buttons.css'
//import './styles/menuFichiers.css'
//import './styles/style.css'
//import insaneLogo from './assets/logo_assoc.png'
import './js/questionsBtn.js';
import './js/hide.js';
import logoTVWhite from './assets/logoTVWhite.png';
const logoTV = document.getElementById('logoTV');
logoTV.src = logoTVWhite;

// import scrolltop from './assets/scrolltop.png';
// const scrollTop = document.getElementById('logoTV');
// scrollTop.src = scrolltop;

import top from './assets/top.png';
const Top = document.getElementById('top');
Top.src = top;
//import styles
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./styles/', true, /\.css$/));

//import js
//requireAll(require.context('./js/', true, /\.js$/));

//import images
//requireAll(require.context('./assets/', true, /\.png$/));
