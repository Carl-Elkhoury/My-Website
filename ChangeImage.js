var numOfSlidesEdu = 1;
var currentSlide = 0;
var colorChanges = [["rgb(131, 192, 229)","rgb(123,119,132)","rgb(120, 119, 125)"],
                    ["rgb(131, 192, 229)","rgb(123,119,132)","rgb(120, 119, 125)"],
                    ["","",""]];

// spot 0 is the color of the body
// spot 1 is the color of the selection bar
// spot 2 is the color of the left board

refreshSlides();


function nextSlideEdu(){
    currentSlide++;
    currentSlide= currentSlide%numOfSlidesEdu;
    refreshSlides();
}

function lastSlideEdu(){
    currentSlide--;
    if(currentSlide<0)
        currentSlide=numOfSlidesEdu-1;
    refreshSlides();
}

function refreshSlides(){
    var x = document.getElementsByClassName("Himage");
    for(var i=0; i<x.length; i++)
        x[i].style.display="none";
    x[currentSlide].style.display="block";

    var body = document.getElementsByClassName("body");
    body[0].style.backgroundcolor(colorChanges[i][0]);
    var selectionbar = document.getElementById("selection-bar");
    selectionbar.style.backgroundcolor(colorChanges[i][1]);
    var leftBoard = document.getElementsByClassName("ImageBoard");
    leftBoard[0].style.backgroundcolor(colorChanges[i][2]);
}