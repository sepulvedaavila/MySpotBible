function localizar() {
    navigator.geolocation.getCurrentPosition(localizacion);
}

function localizacion(pos){
    long = pos.coords.longitude;
    lat = pos.coords.latitude;
    localStorage.setItem('long', long);
    localStorage.setItem('lat', lat);
    mapa = document.getElementById('mapa').src = 'https://maps.google.com/maps/api/staticmap?center='+localStorage.getItem("lat")+','+localStorage.getItem("long")+'&zoom=15&markers='+localStorage.getItem("lat")+','+localStorage.getItem("long")+'|'+localStorage.getItem("lat")+','+localStorage.getItem("long")+'&size=175x175';
}
contador = 1;
if(localStorage.getItem('contador')){
    contador = localStorage.getItem('contador');
}else{
    localStorage.setItem('contador', 1);
}
function registro(){
    var nombrelugar = document.getElementById('nombrelugar').value;
    var precioconsumo = document.getElementById('precioconsumo').value;
    var calificacion = document.getElementById('calificacion').value;
    var categoria = document.getElementById('categoria').value;
    
    contador = localStorage.getItem('contador');
    localStorage.setItem('lugar'+contador, nombrelugar);
    localStorage.setItem('precio'+contador, precioconsumo);
    localStorage.setItem('calificacion'+contador, calificacion);
    localStorage.setItem('categoria'+contador, categoria);
    localStorage.setItem('long'+contador, long);
    localStorage.setItem('lat'+contador, lat);
    contador++;
    localStorage.setItem('contador', contador);
    window.location.assign('lugares.html');
}

function verLugares(){
    window.location.assign("lugares.html");
}