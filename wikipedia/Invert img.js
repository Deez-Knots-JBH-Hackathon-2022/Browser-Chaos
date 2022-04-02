function invert() {
    var images = document.querySelectorAll("img");
    for(let i = 0; i < images.length; i++)
    {
        images[i].style.filter = "invert(1)";
    }
}

invert()