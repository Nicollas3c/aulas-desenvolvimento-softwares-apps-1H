function verificar() {
    var nA = document.getElementById("txtnomealu").value;
    var nR = document.getElementById("txtresp").value;
    var dia = document.getElementById("txtdia").value;
    var mes = document.getElementById("txtmes").value;
    var ano = document.getElementById("txtano").value;
    var opc = document.getElementById("sltserie").value;
    if (nA == "") {
        window.alert("Digite o Nome do Aluno");
        document.getElementById("txtnomealu").focus();
        document.getElementById("txtnomealu").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        document.getElementById("txtnomealu").style.backgroundColor = "#00ff00";
    }
    if (nR == "") {
        window.alert("Digite o Nome do Responsável");
        document.getElementById("txtresp").focus();
        document.getElementById("txtresp").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        document.getElementById("txtresp").style.backgroundColor = "#00ff00";
    }

    if (isNaN(dia)) {
        window.alert("Digite Apenas Números para a Data");
        document.getElementById("txtdia").value = "";
        document.getElementById("txtdia").focus();
        document.getElementById("txtdia").style.backgroundColor = "#ff0000";
        return false;
    }
    else if (dia < 0 || dia > 31) {
        window.alert("Digite Apenas Números de 1 a 31");
        document.getElementById("txtdia").value = "";
        document.getElementById("txtdia").focus();
        document.getElementById("txtdia").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        document.getElementById("txtdia").style.backgroundColor = "#00ff00";
    }

    if (isNaN(mes)) {
        window.alert("Digite Apenas Números para a Data");
        document.getElementById("txtmes").value = "";
        document.getElementById("txtmes").focus();
        document.getElementById("txtmes").style.backgroundColor = "#ff0000";
        return false;
    }
    else if (mes < 1 || mes > 12) {
        window.alert("Digite Apenas Números de 1 a 12");
        document.getElementById("txtmes").value = "";
        document.getElementById("txtmes").focus();
        document.getElementById("txtmes").style.backgroundColor = "#ff0000";
        return false;
    }
    else { 
        document.getElementById("txtmes").style.backgroundColor = "#00ff00";
    }

    if (isNaN(ano)) {
        window.alert("Digite Apenas Números para a Data");
        document.getElementById("txtano").value = "";
        document.getElementById("txtano").focus();
        document.getElementById("txtano").style.backgroundColor = "#ff0000";
        return false;
    }
    else if (ano < 1999 || ano > 2022) {
        window.alert("Digite um Número Entre 1900 e 2022");
        document.getElementById("txtano").value = "";
        document.getElementById("txtano").focus();
        document.getElementById("txtano").style.backgroundColor = "#ff0000";
        return false;
    }
    else {
        document.getElementById("txtano").style.backgroundColor = "#00ff00";
    }
    if (opc == "X") {
        window.alert("selecione uma opção");
        document.getElementById("sltserie").focus();
        document.getElementById("sltserie").style.backgroundColor = "#f00";
        document.getElementById("sltserie").value = "";
        return false;
    }
    window.alert("Cadastro Ok")
    return true;
}
function selecionado1() {
    if (document.getElementById("radman").checked) {
        document.getElementById("radtar").checked = false
    }
    else {
        document.getElementById("radman").checked = false
    }
}

function selecionado2() {
    if (document.getElementById("radtar").checked) {
        document.getElementById("radman").checked = false
    }
    else {
        document.getElementById("radtar").checked = false
    }
}