
firstLoadImg('../images/Mirror-Mirror-Design/logo.png', 'logo');

setTimeout(removeLoadImg, 3000, 'logo');

function firstLoadImg(link, id) {
    var myImg = new Image();
    myImg.src = link;
    myImg.width = "1000";
    myImg.height = "1000";
    myImg.id = id;

    document.body.appendChild(myImg); // L'image est ajoutée au DOM

}

function removeLoadImg(id) {
    document.getElementById(id).remove();
    document.getElementById("_wrapper").style.display = "block";

    //responsiveVoice.speak("Bonjour  guillaume", "French Female");
}