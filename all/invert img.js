function invert() {
    var images = document.querySelectorAll("img");
    x = images.length
    i = Math.floor(Math.random() * x);
    images[i].style.filter = "invert(1)";
}
function revert() {
        var images = document.querySelectorAll("img");
        for(let j = 0; j < images.length; j++)
        {
            images[j].style.filter = "invert(0)";
        }
    
}

	const InvertInterval = setInterval(invert, 5000);
	const RevertInterval = setInterval(revert, 6101);