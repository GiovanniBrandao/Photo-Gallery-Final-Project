function upDate(previewPic) {

    var image = document.getElementById("image");


    image.innerHTML = '<img src="' + previewPic.src + '" alt="' + previewPic.alt + '">';

    console.log("Photo updated, event triggered");
}


function unDo() {

    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    
    console.log("Photo out, event triggered");

}

function loaded() {
    var image = document.getElementById("image");

    image.innerHTML = "Welcome to a banana photo gallery!"; 
    
    console.log("Page loaded, event triggered");
}

var allImages = document.querySelectorAll(".preview");

for (var i = 0; i < allImages.length; i++) {
    allImages[i].setAttribute("tabindex", "0");
    allImages[i].addEventListener("focus", function () {
        upDate(this);
    });
    allImages[i].addEventListener("blur", unDo);

}