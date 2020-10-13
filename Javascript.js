function alerta(){
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
    } else {
        mensaje = "Has clickado Cancelar";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
    
}




   




function initPagina(){
    var texto = prompt("Mensaje a enviar", "");
    var Numero= prompt("Numero a enviar", "");
    if(texto==""){
        alert("Por favor introduzca un mensaje a enviar.");
        initPagina();
    }

    if(Numero==""){
        alert("Por favor introduzca numero a enviar.");
        initPagina();
    }
    else{
       
        window.open("https://api.whatsapp.com/send?phone="+Numero+"&text="+texto+"","_self");
    }
}


document.addEventListener('keydown', function(event){
    if(event.keyCode == 70){
 
    window.open("https://www.facebook.com/profile.php?id=100007812216161")
        
    }
    
})
document.addEventListener('keydown', function(event){
    if(event.keyCode == 89){
        // console.log("salta")
        // document.write("<li>"+"salto we" +"</li>");
    window.open("https://www.youtube.com/channel/UC9aPo1C7y5tcyanUBMKnkVg?view_as=subscriber")
        
    }
    
})
document.addEventListener('keydown', function(event){
    if(event.keyCode ==27){
    window.close();
        
    }
    
})


document.addEventListener('keydown', function(event){
    if(event.keyCode ==48){
        window.open("https://jesusjuvinao.server2.trinchera.dev/")
        
    }
    
})


document.addEventListener('keydown', function(event){
    if(event.keyCode ==87){
        window.open("https://api.whatsapp.com/send?phone=3006400308&text hola")
        
    }
    
})

document.addEventListener('keydown', function(event){
    if(event.keyCode ==71){
        window.open("https://github.com/Jesus123780")
        window.open("https://github.com/Jesus123780")
        
    }
    
})

