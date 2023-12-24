function nextpage(){
    window.location.href = "yuppiee.html";
}

function movebutton(){
    var x = Math.random()*(window.innerWidth - document.getElementById('nobutton').offsetWidth);
    var y = Math.random()*(window.innerHeight - document.getElementById('nobutton').offsetHeight);
    document.getElementById('nobutton').style.position = 'absolute';
    document.getElementById('nobutton').style.left = `${x}px`;
    document.getElementById('nobutton').style.top = `${y}px`;
}
