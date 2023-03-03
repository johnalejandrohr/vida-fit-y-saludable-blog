document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("img");
    images.forEach(function(img) {
        img.setAttribute("loading", "lazy");
    });
});
