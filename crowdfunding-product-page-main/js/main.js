alert('This website is best suited at 1440px or 450px display')

// ---------------------------NAV-TOGGLE-------------------------

const menu = document.getElementById('hamburger');
const close = document.getElementById('close_icon');
const navBar = document.getElementById('box');

function showNav() {
    addEventListener('click', () => {
        menu.style.display = "none";
        close.style.display = "block";
        navBar.style.top = "10%";
    })
}

function closeNav() {
    addEventListener('click', () => {
        navBar.style.top = "-50%";
        close.style.display = "none";
        menu.style.display = "block";
    })
}

// ----------------------------Project Back------------------------------

const prjback = document.getElementById('back_prj');
const dim = document.getElementById('dim');

function showPrjD () {
    addEventListener('click', () => {
        prjback.style.display = "block";
        dim.style.opacity = "0.7";
    })
}

function closePrjD() {
    addEventListener('click', () => {
        dim.style.opacity = "1";
        prjback.style.display = "none";
    })
}

// ----------------------------Bookmarked ----------------------------------

const bkm = document.getElementById('btnCont');

function bookmarked() {
    addEventListener('click', () => {
       bkm.classList.toggle('click_color')
    })
}

// --------------------------Radio-Clicked--------------------------------
const r1 = document.getElementById('rad1');
const d1 = document.getElementById('one_d');
const bor1 = document.getElementById('c_one');

const r2 = document.getElementById('rad2');
const d2 = document.getElementById('two_d');
const bor2 = document.getElementById('c_two');

const r3 = document.getElementById('rad3');
const d3 = document.getElementById('three_d');
const bor3 = document.getElementById('c_three');

const r4 = document.getElementById('rad4');
const d4 = document.getElementById('four_d');

r4.checked = false;
d4.style.display = "none";

function check1() {
    r2.checked = false;
    r3.checked = false;

    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";

    bor1.style.border = "3px solid hsl(176, 50%, 47%)";
    bor2.style.border = "3px solid whitesmoke";
    bor3.style.border = "3px solid whitesmoke";
}

function check2() {
    r1.checked = false;
    r3.checked = false;

    d2.style.display = "block";
    d1.style.display = "none";
    d3.style.display = "none";

    bor1.style.border = "3px solid whitesmoke";
    bor2.style.border = "3px solid hsl(176, 50%, 47%)";
    bor3.style.border = "3px solid whitesmoke";
}

function check3() {
    r2.checked = false;
    r1.checked = false;

    d3.style.display = "block";
    d2.style.display = "none";
    d1.style.display = "none";

    bor1.style.border = "3px solid whitesmoke";
    bor2.style.border = "3px solid whitesmoke";
    bor3.style.border = "3px solid hsl(176, 50%, 47%)";

}




// -------------------------Thank You Page---------------------------------

const thnk = document.getElementById('modal_success');
const backprj = document.getElementById('back_prj');

function cont() {
    thnk.style.display = "block";
    backprj.style.opacity = "0.5";
}

// --------------------------Got It-------------------------------
function gotIt() {
    addEventListener('click', () => {
        backprj.style.opacity = "1";
        backprj.style.display = "none";
        thnk.style.display = "none";
        dim.style.opacity = "1";
    })
}

// --------------------------Main Page Buttons--------------------------

function slcRw1() {
    r2.checked = true;
    showPrjD();
    check2();
}

function slcRw2() {
    r3.checked = true;
    showPrjD();
    check3();
}