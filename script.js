let start = new Date().getTime();

function getRandomColor(){

    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
function makeShapeAppear(){
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = (Math.random() * 200) + 100;
    if(Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else{
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor ;
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
    
}

function apperAfterDelay(){

  setTimeout(makeShapeAppear, Math.random() + 2000);
}

apperAfterDelay();

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    apperAfterDelay()
}