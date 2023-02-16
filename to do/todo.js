const arr = []

function addTask() {
    let inp = document.getElementById("inp").value
    console.log(inp)
    arr.push(inp)
    createTodo()
}

function createTodo() {
    let ul = document.getElementById("Ulist");
    ul.innerHTML= '';

    arr.forEach((task, index)=> {
        let li = document.createElement("li");
        li.setAttribute("class", "item");

        li.innerHTML=`
        <input class="check" type="checkbox">
        <span class="txt">${task}</span>
        `
        let btn = document.createElement("button")

        btn.innerText= `
        delete
        `

        btn.addEventListener("click", (event) => {
            event.preventDefault();
            delTask(index);
        });

        li.appendChild(btn);
        ul.appendChild(li);
        inp.value = '';
    });
}

function delTask(index) {
    arr.splice(index, 1);
    createTodo();
}