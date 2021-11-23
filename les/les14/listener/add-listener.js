var backColorBtn = document.getElementById('back-color'); 

// inline event names use "on" suffix: onkeyup, onmouseover, oninput. but in eventlistener there is no "on"
// addEventListener(event-name, function)

// each element has style object it contains all the css properties of the element
// function inside function as argument writen without ()
function rand0To255() {
    return Math.floor(Math.random() * 256);
}

function changeBodyBackColor() {
    document.body.style.backgroundColor = "rgb("+rand0To255()+","+rand0To255()+","+rand0To255()+")";
}

backColorBtn.addEventListener('click', changeBodyBackColor);
