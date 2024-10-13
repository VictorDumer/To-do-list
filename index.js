function addItem() {

    let inputValue = document.getElementById("input").value;


    if (inputValue.trim() !== "") {

        let listaconteudo = document.getElementById("Listas");

        let li = document.createElement("li");

        let label = document.createElement("label");
        label.textContent = inputValue;

        let input = document.getElementById("input");
        input.value = "";

        var box = document.createElement("input");
        box.type = "checkbox"
        box.name = "r";
        box.value = "2";
        box.id = "02-11";

        let div1 = document.createElement("div");
        div1.className = "checkbox-wrapper-11";
        div1.appendChild(box);
        div1.appendChild(label);

        let div2 = document.createElement("div");
        div2.id = "icones";

        var botaotrash = document.createElement("button");
        let trash = document.createElement("i");
        trash.className = "fa-solid fa-trash";
        botaotrash.id = "icon"
        botaotrash.appendChild(trash);
        botaotrash.onclick = function () {
            listaconteudo.removeChild(li);
        }

        div2.appendChild(botaotrash);

        li.appendChild(div1);
        li.appendChild(div2);
        document.getElementById("Listas").appendChild(li);
    } else {
        alert("Por favor, insira um dever.");
    }
}
