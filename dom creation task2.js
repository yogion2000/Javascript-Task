function add(){
        var lister=document.getElementById("list")
        var items=document.getElementById("cart").value
        var text=document.createElement("li")
        text.textContent=items;
        lister.appendChild(text)
}