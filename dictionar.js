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
            document.getElementById('message').innerText = 'The word already exists in dictionary';
        } else {
            document.getElementById('message').innerText = 'The word does not exists in dictionary';
        }
    }
}
