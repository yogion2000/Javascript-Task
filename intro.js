function ok(){
    var c=document.getElementById("input1").value;
    alert(c)
    document.getElementById("place").innerHTML=c;
    document.getElementById("input2").value=c;
}
function stl(){
    alert("color will be changed")
    document.getElementById("place").style.color="red";
}

function imagechange(){
    alert("Image Search")
    var image=document.getElementById("url1").value;
    document.getElementById("img1").src=image;
}
function change(){
    document.getElementById("imgchange").style.width="100px";
    document.getElementById("imgchange").style.borderRadius="5px";
    document.getElementById("imgchange").src="https://media.istockphoto.com/id/1281783803/photo/mountains-velliangiri-view-with-blue-sky-and-green-fores.jpg?s=612x612&w=0&k=20&c=25epzQEXtzNmGMtUoBa13SpHZ4rGz2HDLuHfWaUa51o=";
}
function login(){
    alert("hai")
    var box=document.createElement("div")
    var text=document.createTextNode("Login Page")
    var head=document.createElement("h1")
    var username=document.createElement("input")
    var submit=document.createElement("button")
    var btntxt=document.createTextNode("Click")
    head.appendChild(text)
    submit.appendChild(btntxt)
    box.appendChild(head)
    box.appendChild(username)
    box.appendChild(submit)
    document.body.appendChild(box)
}