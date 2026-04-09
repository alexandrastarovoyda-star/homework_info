const images = document.querySelectorAll(".block img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

images.forEach(function(img){
    img.onclick = function(){
        viewer.style.display = "flex";
        viewerImg.src = this.src;
    }
});

viewer.onclick = function(){
    viewer.style.display = "none";
}