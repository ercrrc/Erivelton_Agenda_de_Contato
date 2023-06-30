const button = document.querySelector("#bnt-enviar");
button.addEventListener("click", (e) => {
    const valorA = document.getElementById('valor-a').value;
    const valorB = document.getElementById('valor-b').value;
    const menssage = document.getElementById('menssage');

    if (valorB > valorA) {
        menssage.innerHTML = 'O valor B e maior que o valor A';
    } else {
        menssage.innerHTML = 'O valor A e maior que o valor B';
    }
})