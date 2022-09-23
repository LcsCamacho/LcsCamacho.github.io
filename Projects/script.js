let top = document.querySelector(".espaco");
let tam = 0;
alert("top")
setInterval(() => {
    top.style.width = tam + "%";
    tam += 4;
    if (tam >= 50
) { tam = 0 }
}, 500)