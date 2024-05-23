function accion() {
    var enlaces = document.querySelectorAll('.enlace');
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].classList.contains('desaparece')) {
            enlaces[i].classList.remove('desaparece');
        } else {
            enlaces[i].classList.add('desaparece');
        }
    }
}
