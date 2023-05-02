function verificar() {
    var n1 = document.getElementById("txtPratPrin").value;
    var n2 = document.getElementById("txtResp").value;
    if (n1 == "") {
        window.alert("Digite o Número de Pessoas para a Reserva");
        document.getElementById("txtPratPrin").focus();
        document.getElementById("txtPratPrin").style.backgroundColor = "#ff0000";
        return false;
    }
    else if (isNaN(n1)) {
        window.alert("Digite Apenas Números para a Reserva");
        document.getElementById("txtPratPrin").value = "";
        document.getElementById("txtPratPrin").focus();
        document.getElementById("txtPratPrin").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        window.alert("Número OK")
        document.getElementById("txtPratPrin").style.backgroundColor = "#00ff00";
    }
    if (n2 == "") {
        window.alert("Digite o Nome do Responsável pela Reserva");
        document.getElementById("txtResp").focus();
        document.getElementById("txtResp").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        document.getElementById("txtResp").style.backgroundColor = "#00ff00";
    }
    window.alert("Responsável OK")
    return true;
}

function ticar1() {
    if (document.getElementById("radtip1").checked) {
        document.getElementById("radtip2").checked = false
    }
    else {
        document.getElementById("radtip1").checked = false
    }
}

function ticar2() {
    if (document.getElementById("radtip2").checked) {
        document.getElementById("radtip1").checked = false
    }
    else {
        document.getElementById("radtip2").checked = false
    }
}
function carregar() {
    document.addEventListener("keydown", 
        function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
}