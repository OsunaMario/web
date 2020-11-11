function envio (e) {
    e.preventDefault();
    console.log(document.formulario);
}

function validacion(e) {
    return ['0','1','2','3','4','5','6','7','8','9'].filter((char) => char===e.key).length === 0;
}