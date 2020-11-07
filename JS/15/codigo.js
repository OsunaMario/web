function muestraInformacion(e) {
    console.log(e.type);
    var informacion = document.getElementById('info')
    document.createElement('h1').className='titulo';
    document.createElement('h4').className='parriba';
    document.createElement('h4').className='pabajo';

    if (e.type == 'mousemove') {
        informacion.innerHTML = '<h1>Mouse</h1><p>Pantalla ['+e.screenX+', '+e.screenY+']</p>' + '<p>Página ['+e.pageX+', '+e.pageY+']</p>';
        informacion.style.backgroundColor = 'white';
    }else if (e.type =='mousedown') {
        informacion.style.backgroundColor = '#FFFFCC';
    }else if (e.type == 'keypress') {
        informacion.innerHTML = '<h1>Keyboard</h1><p>Carácter ['+e.key+']</p>' + '<p>Código ['+e.keyCode+']</p>';
        informacion.style.backgroundColor = '#CCE6FF';
    }
}