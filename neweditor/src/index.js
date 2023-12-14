
import './js/questionsBtn.js';
import './js/hide.js';
import './js/request.js';
import './js/newScenario.js';
import './js/drag.js';

import logoTVwhite from './assets/logoTVwhite.png';

import top from './assets/top.png';
//const Top = document.getElementById('top');
//Top.src = top;
//import styles
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./styles/', true, /\.css$/));

//import js
//requireAll(require.context('./js/', true, /\.js$/));

