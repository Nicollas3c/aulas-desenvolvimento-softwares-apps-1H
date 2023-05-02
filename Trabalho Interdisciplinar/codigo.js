function validar(){ 
    var a = document.getElementById("txtprnome").value;
    var b = document.getElementById("txtidade").value;
    var c = document.getElementById("txtmail").value;  
    var d = document.getElementById("txtNota").value;
    var e = document.getElementById("Mensagem").value;

//NOME
if(a==""){
    window.alert("digite o nome");
    document.getElementById("txtprnome").focus();
    document.getElementById("txtprnome").style.backgroundColor="#f0000054";
    document.getElementById("txtprnome").value="";
    return false;
}
else if(a <= 0 || a >= 0){
    window.alert("digite Nomes validos");
    document.getElementById("txtprnome").focus();
    document.getElementById("txtprnome").style.backgroundColor="#f0000054";
    document.getElementById("txtprnome").value="";
    return false;
}
else {
    window.alert("nome ok");
    document.getElementById("txtprnome").style.backgroundColor="#37ff0fb4"
}

//IDADE
if (b=="") {
 window.alert("digite sua idade");
 document.getElementById("txtidade").style.backgroundColor="#f0000054"
 document.getElementById("txtidade").focus();  
 return false; 
       
} 
else if(isNaN(b)){
    window.alert("apenas numeros");
    document.getElementById("txtidade").style.backgroundColor="#f0000054"
    document.getElementById("txtidade").focus();
    return false; 
}
   
else if(b<1 || b>90){
    window.alert("digite numeros entre 1 e 90");
    document.getElementById("txtidade").style.backgroundColor="#f0000054"
    document.getElementById("txtidade").focus();
    return false;
} 
else{
    window.alert("idade ok");
    document.getElementById("txtidade").style.backgroundColor="#37ff0fb4";
}

//EMAIL
if (c==""){
    window.alert("digite o seu email");
    document.getElementById("txtmail").focus();    
    document.getElementById("txtmail").style.backgroundColor="#f0000054"
    return false;
}
else if (c.indexOf("@") ==-1){
    window.alert("email incorreto");
    document.getElementById("txtmail").style.backgroundColor="#f0000054";
    document.getElementById("txtmail").focus(); 
    document.getElementById("txtmail").value="";
    return false;
}
else{
    window.alert("email ok");
    document.getElementById("txtmail").style.backgroundColor="#37ff0fb4"
}

//nota
if (d=="") {
    window.alert("digite sua Nota");
    document.getElementById("txtNota").style.backgroundColor="#f0000054"
    document.getElementById("txtNota").focus();
    return false; 
} 
else if(isNaN(d)){
    window.alert("apenas numeros");
    document.getElementById("txtNota").style.backgroundColor="#f0000054"
    document.getElementById("txtNota").focus();
    return false; 
}
else if(d<0 || d>7){
    window.alert("digite a nota entre 0 a 7");
    document.getElementById("txtNota").style.backgroundColor="#f0000054"
    document.getElementById("txtNota").focus();
    return false;
} 
else{
    window.alert("nota ok");
    document.getElementById("txtNota").style.backgroundColor="#37ff0fb4";
}

//comentario
if(e==""){
    window.alert("Faça um Comentario");
    document.getElementById("Mensagem").focus();
    document.getElementById("Mensagem").style.backgroundColor="#f0000054";
    document.getElementById("Mensagem").value="";
return false; 
}
else{
    window.alert("Comentario Ok");
    document.getElementById("Mensagem").style.backgroundColor="#00ff00";
    return true
}
}