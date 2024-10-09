function addItem() {

    let inputValue = document.getElementById("input").value;

 
    if (inputValue.trim() !== "") {

        let li = document.createElement("li");
        li.textContent = inputValue;

        
        document.getElementById("input").value = "";
        var box = document.createElement("input");
        box.type="checkbox"
        box.name="r";
        box.value="2";
        box.id="02-11";
        
        var pai = document.getElementsByClassName("checkbox-wrapper-11")[0]
        document.getElementsByClassName("checkbox-wrapper-11").appendChild(box)

        document.getElementsByClassName("checkbox-wrapper-11").appendChild(li)

        document.getElementById("Listas").appendChild(box);

        //input id="02-11" type="checkbox" name="r" value="2">
    } else {
        alert("Por favor, insira um dever.");
    }
}
