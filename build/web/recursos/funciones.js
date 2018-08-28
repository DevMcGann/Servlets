/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validarFomar(forma){
    //validamos usser
    var usuario = forma.usuario;
    
    if (usuario.value == "" || usuario.value=="Escribir Usuario"){
        alert("Debe proporcionar un nombre de Usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //validamos pass
    var password = forma.password;
    if(password.value == "" || password.value.lenght < 3){
        alert("Debe proporcionar un password de al menos 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    //validar tecnologia de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    //revisamos si selecciono algun checkbox
    for (i=0; i< tecnologias.lenght; i++){
        if(tecnologias[i].checked){
            checkedSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe elegir al menos una tecnologia");
        return false;
    }
    
    
    //validamos genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    for(i=0; i<generos.lenght; i++){
        if (generos[i].checked){
            radioSeleccionado = true;
        }
    }
      if(!radioSeleccionado){
        alert("Debe elegir al menos un genero");
        return false;
    }
    
    
    //validamos ocupacion
    var ocupacion = forma.ocupacion;
    
    if(ocupacion.value==""){
        alert("Debe elegir al menos una ocupación");
        return false;
    }
    
    
    
    //Form validado
    alert("Formulario valido, enviando datos...");
    return true;
    
}