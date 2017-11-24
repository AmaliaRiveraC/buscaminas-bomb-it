var tableBombIt = [
    ' ',
    '*',
    '1',
    ' ',
    '\n',
    ' ',
    ' ',
     '*',
     '2',
     '\n',
     '1',
     '*',
     ' ',
     ' ',
     '\n',
     ' ',
     '3', 
     '*',
     ' ',
];

var containerBombIt = document.getElementById('container-bomb-it');
var bombIt = document.getElementById('bomb-it');

var drawGameZone = function(array) {
    for (var i = 0; i < array.length; i++) {
        var cell = document.createElement('div');
        var enter = document.createElement('br');

        if (array[i] == '1' || array[i] == '2' || array[i] == '3') {
            cell.className = 'number';
            cell.innerText = array[i];
            cell.onclick = showNumber;
        } else if (array[i] == ' ') {
            cell.className = 'emptySpace';
            cell.onclick = changeColor;
        } else if (array[i] == '*') {
            cell.className = 'bomb';
            cell.onclick = boom;
        } else if (array[i] == '\n') {
            bombIt.appendChild(enter);
            continue;
        }
    
        bombIt.appendChild(cell);
    }

    addBotonRestart();
}

var showNumber = function() {
    this.className = 'number number-show';
};

var changeColor = function() {
    this.style.backgroundColor = '#000';
};

var boom = function() {
    containerBombIt.removeChild(bombIt);
    containerBombIt.innerHTML = "<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif' id='img_bomb' alt='Bomba'/>"; 
    addBotonRestart();
};


var addBotonRestart = function() {
    var botonRestart = document.createElement('button');
    botonRestart.innerText = 'Restart!!';
    botonRestart.addEventListener('click', reStart);
    containerBombIt.appendChild(botonRestart);
};

var reStart = function() {
    location.reload();
};

drawGameZone(tableBombIt);