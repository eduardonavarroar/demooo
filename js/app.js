if (navigator.serviceWorker){
    //console.log("soporta sw");
    navigator.serviceWorker.register("sw.js");
}
else{
    alert(":(no soporta sw)");
}
