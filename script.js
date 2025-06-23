function setImage(){
    const img = document.getElementById("x");
    img.src = "new resume.jpg";
    img.classList.add("hovered");
}

function setOldImage(){
    const img = document.getElementById("x");
    img.src = "resume copy.jpg";
    img.classList.remove("hovered");
}

function newBtn(){
    document.getElementById("dwnBtn").textContent="Click to Download Resume";
}
function oldBtn(){
    document.getElementById("dwnBtn").textContent="Download Resume ";
}
