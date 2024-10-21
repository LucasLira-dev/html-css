function cliquemenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display ='block';
    }
}

function mudoutamanho() {
    if(window.innerWidth >= 580) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}