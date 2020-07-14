/*
Original:
    open=display:block
    close=display:none
    menu=display:none
*/

/* --- Menu handler --- */
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

/* --- Accordion handler --- */
function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
