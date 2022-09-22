let top = document.getElementByClassName('preenche');
let tam = 0;

setInterval(() => {
    top.style.width = tam + "%";
    tam += 4;
    if (tam >= 96) { tam = 0 }
    console.log(tam)
}, 500)