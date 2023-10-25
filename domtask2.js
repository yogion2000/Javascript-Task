function on(){
    document.getElementById("offBulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("offCat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("statement").innerHTML="Switch is ON";
    document.getElementById("on").style.backgroundColor="#22c55e";
    document.getElementById("off").style.backgroundColor="#cbd2d9";
}
function off(){
    document.getElementById("offBulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("offCat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("statement").innerHTML="Switch is OFF";
    document.getElementById("off").style.backgroundColor="#e12d39";
    document.getElementById("on").style.backgroundColor="#cbd2d9";
}