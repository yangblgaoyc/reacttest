require('./css/css.css');
// import './css/css.css'
import './js/test.js';

const app=document.createElement("div");
app.innerHTML='<h1>Hello World!</h1>';
document.body.insertBefore(app,document.body.childNodes[0]);


