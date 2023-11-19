import  "./styles.scss" ;
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importáljuk a createChart függvényt a chart.js fájlból
import { createChart } from './chart.js';

// Hívd meg a createChart függvényt, hogy létrehozd a diagramot
createChart();

document.addEventListener('DOMContentLoaded', function() {
    // A gombra való kattintáskor meghívódik a myFunction
    document.getElementById('myButton').addEventListener('click', myFunction);
    
    // myFunction definíciója
    function myFunction() {
        document.getElementById('myChart1').style.display = "block";
    }
});