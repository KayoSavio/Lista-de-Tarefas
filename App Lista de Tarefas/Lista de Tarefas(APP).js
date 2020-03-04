var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || ['teste','teste2'];

function renderTarefas(){
    listElement.innerHTML = '';
    for(tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var textElement = document.createTextNode(tarefa);
        tarefaElement.appendChild(textElement);
        listElement.appendChild(tarefaElement);
        var linkElement = document.createElement('a');
        var textLink = document.createTextNode(' Realizada');
        linkElement.appendChild(textLink);
        linkElement.setAttribute('href','#');
        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick','deletaTarefa('+pos+')');
        tarefaElement.appendChild(linkElement);
        console.log(tarefa);
    }
}
function addTarefas(){
    var textInput = inputElement.value;
    tarefas.push(textInput);
    inputElement.value = '';
    renderTarefas();
    saveStorage();
}

function deletaTarefa(pos){
    tarefas.splice(pos, 1);
    renderTarefas();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('lista_tarefas',JSON.stringify(tarefas));
}

buttonElement.onclick = addTarefas;
renderTarefas();
