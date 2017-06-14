const remote = require('electron').remote;

document.body.style.backgroundColor = "black";

firstLoadImg('images/Mirror-Mirror-Design/logo.png', 'logo');

setTimeout(removeLoadImg, 3000, 'logo');

function firstLoadImg(link, id) {
    var myImg = new Image();
    myImg.src = link;
    myImg.width = "720";
    myImg.height = "1280";
    myImg.id = id;

    document.body.appendChild(myImg); // L'image est ajoutée au DOM

}

function removeLoadImg(id) {
    document.getElementById(id).remove();
    var window = remote.getCurrentWindow();
    window.close();
}