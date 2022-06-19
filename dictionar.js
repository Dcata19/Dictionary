let id = 1;

function getInput() {
    return document.getElementById('input').value.toUpperCase();
}

function addWord() {
    let listElement = document.createElement('li');
    let list = document.getElementById('list');
    listElement.className = 'list-group-item text-center';
    listElement.innerText = getInput();
    listElement.id = id;
    list.appendChild(listElement);
    ++id;
    document.getElementById('message').innerText = '';
}

function searchWord() {
    for (let i = 1; i < id; ++i) {
        if (document.getElementById(i).innerText == getInput()) {
            document.getElementById('message').innerText = 'Cuvantul exista in dictionar';
        } else {
            document.getElementById('message').innerText = 'Cuvantul nu exista in dictionar';
        }
    }
}