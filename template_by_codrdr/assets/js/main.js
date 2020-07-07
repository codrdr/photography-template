/*
Original:
    open=display:block
    close=display:none
    menu=display:none
*/

function openMenu() {
    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var menu = document.getElementById("menu");
    open.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'block';
}

function closeMenu() {
    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var menu = document.getElementById("menu");
    open.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'none';
}
