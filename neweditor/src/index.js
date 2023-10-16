//import generateJoke from './generateJoke'
//import './styles/buttons.css'
//import './styles/menuFichiers.css'
//import './styles/style.css'
//import insaneLogo from './assets/logo_assoc.png'
import { addquestion } from './js/questionsBtn.js';
import './js/hide.js';
//import styles
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./styles/', true, /\.css$/));

//import js
//requireAll(require.context('./js/', true, /\.js$/));
